import { Storage } from '@ionic/storage';
import { JuiciablePage } from './../juiciable/juiciable';
import { TerminosPage } from './../terminos/terminos';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, PopoverController, ToastController } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { CancelacionPage } from '../cancelacion/cancelacion';
import { PrendaPage } from '../prenda/prenda';
import { SegurosPage } from '../seguros/seguros';
import { TelefonosPage } from '../telefonos/telefonos';
import { AdminSecondPage } from '../admin-second/admin-second';
import { AyudaPage } from '../ayuda/ayuda';
import { PopoverComponent } from '../../components/popover/popover';
import { ServicesProvider } from '../../providers/services/services';

@IonicPage()
@Component({
  selector: 'page-menu-principal',
  templateUrl: 'menu-principal.html',
})
export class MenuPrincipalPage {

  pages: any = [];
  tokenhere: string;
  prestamos: any;
  capitalSolicitado: any;
  cuotas: any = [];
  juiciable: boolean;
  mostrarPrendaSolicitada:boolean=false;
  mostrarPrecancelacion:boolean=false;
  solicitudPrenda:any;
  solicitudPrecancelacion:any;
  fechaRetiroPrenda:any;
  importePrecancelacion:any;
  vigenciaDesde:any;
  vigenciaHasta:any;
  imgSrc:any;
  fbid:boolean =false;

  @ViewChild(Nav) nav: Nav;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public toastCtrl: ToastController, 
    private storage: Storage,
    public serviceProvider: ServicesProvider
  ) {     
       
  }

  avatarImg(){
    this.storage.get('fbid').then((result)=>{
      console.log('result', result);
      if(result){
        this.fbid = true;
        this.imgSrc = "https://graph.facebook.com/"+result+"/picture?type=square";
      }else{
        this.fbid=false;
      }
    })
  }

  ionViewWillEnter() {
    this.avatarImg();
    console.log(this.serviceProvider._prestamo);
  
    this.pages = [];   
    this.pages.push({ title: 'Estado de Cuentas', page:this.serviceProvider._prestamo.Judicializado? JuiciablePage : AdminPage, imgSrc: '../../assets/imgs/menu/2est.svg', sub: 'Estado - Forma de pago' });
    if (this.serviceProvider._prestamo.HabilitadoPedidoPrecancelacion) {
      this.pages.push({ title: 'Solicitud de pre cancelación', page: CancelacionPage, imgSrc: '../../assets/imgs/menu/3sol.svg', sub: 'Funcionalidad - flujo' });
    }
    if (this.serviceProvider._prestamo.HabilitadoPedidoPrenda && this.serviceProvider.fechaPrenda === null) {
      this.pages.push({ title: 'Solicitud de prenda', page: PrendaPage, imgSrc: '../../assets/imgs/menu/4pren.svg', sub: 'Funcionalidad - flujo' });
    }
    if (this.serviceProvider._prestamo.SolicitudPrenda !== null || this.serviceProvider.fechaPrenda !== null){
      this.mostrarPrendaSolicitada=true;
      this.solicitudPrenda = this.serviceProvider._prestamo.SolicitudPrenda;
      //console.log('prenda', this.solicitudPrenda['FechaDisponibleRetiro'])
      this.fechaRetiroPrenda = (this.serviceProvider.fechaPrenda !== null ? this.serviceProvider.fechaPrenda : this.solicitudPrenda['FechaDisponibleRetiro']);
    }
    if (this.serviceProvider._prestamo.SolicitudPrecancelacion !== null || this.serviceProvider.solicitudCancelacion.length !== 0){
      console.log('sol', this.serviceProvider.solicitudCancelacion);
      this.mostrarPrecancelacion=true;
      this.solicitudPrecancelacion = this.serviceProvider._prestamo.SolicitudPrecancelacion;
      this.importePrecancelacion = (this.serviceProvider.solicitudCancelacion.length !== 0 ? this.serviceProvider.solicitudCancelacion['Importe'] : this.solicitudPrecancelacion['Importe']);
      this.vigenciaDesde = (this.serviceProvider.solicitudCancelacion.length !== 0 ? this.serviceProvider.solicitudCancelacion['VigenciaDesde'] : this.solicitudPrecancelacion['VigenciaDesde']);
      this.vigenciaHasta = (this.serviceProvider.solicitudCancelacion.length !== 0 ? this.serviceProvider.solicitudCancelacion['VigenciaHasta'] : this.solicitudPrecancelacion['VigenciaHasta']);    
    }
    if(this.serviceProvider._prestamo.PolizaVigente){
      this.pages.push({ title: 'Seguros', page: SegurosPage, imgSrc: '../../assets/imgs/menu/5seg.svg', sub: 'Auto - Vida - Hogar' });
    }
    this.pages.push({ title: 'Teléfonos', page: TelefonosPage, imgSrc: '../../assets/imgs/menu/6phone.svg', sub: 'Listados de utilidad' });
    this.pages.push({ title: 'Novedades & tips', page: AdminSecondPage, imgSrc: '../../assets/imgs/menu/7news.svg', sub: 'Notificaciones - tips' });
    this.pages.push({ title: 'Preguntas', page: AyudaPage, imgSrc: '../../assets/imgs/menu/8preguntas.svg', sub: 'Preguntas frecuentes' });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPrincipalPage');
  }

  openPage(page) {
    if(this.serviceProvider._prestamo.PolizaVigente){
      if(page['title'] == 'Seguros' && this.serviceProvider._prestamo.PolizaVigente['DocumentosPoliza'].length == 0){
        this.toastError();
      }else{
        console.log('else')
        this.navCtrl.push(page.page);        
      }
    }else{
      this.navCtrl.push(page.page);              
    }
  }

  goToTerminos(){
    this.navCtrl.push(TerminosPage);
  }
  presentPopover(myevent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({ ev: myevent });
  }

  openSolicitudPedida(){
    this.navCtrl.push(PrendaPage,{prenda:this.solicitudPrenda});
  }

  openSolicitudCancelacion(){
    this.navCtrl.push(CancelacionPage, {cancelacion:this.solicitudPrecancelacion});
  }

  toastError() {
    let toast = this.toastCtrl.create({
      message: 'Documentos de la Poliza vacia!',
      showCloseButton: true,
      closeButtonText: "X",
      duration: 3000,
      position: 'bottom',
      cssClass: 'toastError'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
