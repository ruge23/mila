import { Storage } from '@ionic/storage';
import { ServicesProvider } from './../../providers/services/services';
import { PagosPage } from './../pagos/pagos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, LoadingController, ToastController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-cancelacion',
  templateUrl: 'cancelacion.html',
})
export class CancelacionPage {
  private saldo: string;
  private vigencia: Date;
  private numPrestamo: number;
  expanded:boolean =false;
  className:string = "descargar";
  debito:boolean;
  nameUser:string;
  dataCancelacion:any=[];
  importeCancelacion:any;
  vigenciaDesde:any;
  vigenciaHasta:any;
  solicitado:boolean=false;
  imgSrc:any;
  fbid:boolean =false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController, 
    public serviceProvider: ServicesProvider,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private toastCtrl: ToastController,        
  ) {
    this.saldo =  serviceProvider._prestamo.SaldoPrecancelacion;
    this.vigencia =  serviceProvider._prestamo.VigenciaSaldoPrecancelacion;
    this.numPrestamo = serviceProvider._prestamo.Numero;
    this.debito = serviceProvider._prestamo.DebitoAutomatico;
    this.nameUser = this.serviceProvider._persona.nombre;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancelacionPage', this.serviceProvider._prestamo);
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

  ionViewWillEnter(){
    this.avatarImg();
    if(this.navParams.data.cancelacion || this.serviceProvider.solicitudCancelacion.length !== 0){
      console.log('datallega', this.navParams.data.cancelacion);
      this.solicitado = true;
      this.expanded = true;
      if(this.navParams.data.cancelacion){
        this.importeCancelacion = this.navParams.data.cancelacion['Importe'];
        this.vigenciaDesde = this.navParams.data.cancelacion['VigenciaDesde'];
        this.vigenciaHasta = this.navParams.data.cancelacion['VigenciaHasta'];    
      }else{
        this.importeCancelacion = this.dataCancelacion['Importe'];
        this.vigenciaDesde = this.dataCancelacion['VigenciaDesde'];
        this.vigenciaHasta = this.dataCancelacion['VigenciaHasta'];
      }
    }
  }

  consultarPreCancelacion(){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Espere por favor...'
    });
    loading.present();
    let fecha = new Date();
    this.serviceProvider.getSolicitudPrecancelacion(this.numPrestamo, fecha).subscribe(x=>{
      this.solicitado = true;      
      console.log('data',x);
      this.dataCancelacion = JSON.parse(x['_body']);
      console.log('ssss', this.dataCancelacion);
      if(this.dataCancelacion['SolicitudProcesada']){
        let msg = this.dataCancelacion['Resultado'];
        this.serviceProvider.solicitudCancelacion = this.dataCancelacion;
        this.importeCancelacion = this.dataCancelacion['Importe'];
        this.vigenciaDesde = this.dataCancelacion['VigenciaDesde'];
        this.vigenciaHasta = this.dataCancelacion['VigenciaHasta'];
        this.toastError(msg);
        this.expanded = !this.expanded;
        loading.dismiss();                           
      }else{
        let msg = this.dataCancelacion['Resultado'];
        this.toastError(msg);
        this.expanded = !this.expanded;
        this.solicitado = false;
        loading.dismiss();                            
      }
    })
  }

  presentPopover(myevent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({ ev: myevent });
  }

  toastError(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      showCloseButton: true,
      duration: 3000,
      closeButtonText: "X",
      position: 'top',
      cssClass: 'toastError'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  goBack(){
    this.navCtrl.setRoot(MenuPage);
  }

  expandItem() {
    console.log('ola');
    this.consultarPreCancelacion();
    if(this.className === "descargar"){
      this.className = "check";
    }else this.className = "descargar";
  }

  goToPago(){
    this.navCtrl.push(PagosPage, this.debito);
  }

}
