import { Storage } from '@ionic/storage';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController, LoadingController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { MenuPage } from '../menu/menu';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the PrendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prenda',
  templateUrl: 'prenda.html',
})
export class PrendaPage {

  numPrestamo:number;
  nameUser:string;
  solicitado:boolean=false;
  solicitud:any=[];
  fechaRetiro:any;
  mostrarFecha:boolean=false;
  imgSrc:any;
  fbid:boolean =false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private service: ServicesProvider,
    public popoverCtrl: PopoverController,
    private toastCtrl: ToastController,
    private storage: Storage,
    public loadingCtrl: LoadingController
  ) {
    this.numPrestamo = this.service._prestamo.Numero;
    this.nameUser = this.service._persona.nombre;
  }

  ionViewWillEnter(){
    this.avatarImg();
    if(this.navParams.data.prenda || this.service.fechaPrenda !== null){
      console.log('hola');
      this.solicitado = true;
      this.mostrarFecha = true;
      if(this.navParams.data.prenda !== null){
        this.fechaRetiro = this.navParams.data.prenda['FechaDisponibleRetiro']
      }else{
        this.fechaRetiro = this.service.fechaPrenda;
      }
    }
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

  solicitarPrenda(){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Espere por favor...'
    });
    loading.present();
    this.service.getSolicitudPreda(this.numPrestamo).subscribe(x=>{
      this.solicitado = true;
      console.log('data',x);
      this.solicitud = JSON.parse(x["_body"]);
      if(this.solicitud){
        let msg = this.solicitud['Resultado']
        this.toastError(msg);
        this.mostrarFecha = true;
        this.service.fechaPrenda = this.fechaRetiro = this.solicitud['FechaDisponibleRetiro'];
        loading.dismiss();        
        setTimeout(()=>{
          this.navCtrl.setRoot(MenuPrincipalPage);
        },3500)
      }else{
        let msg = this.solicitud['Resultado'];
        this.toastError(msg);
        this.solicitado = false;
      }      
    })
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrendaPage');
  }

  presentPopover(myevent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({ ev: myevent });
  }

  goBack(){
    this.navCtrl.setRoot(MenuPage);
  }

}
