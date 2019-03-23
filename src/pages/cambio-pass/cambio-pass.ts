import { Storage } from '@ionic/storage';
import { ServicesProvider } from './../../providers/services/services';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-cambio-pass',
  templateUrl: 'cambio-pass.html',
})
export class CambioPassPage {

  user:any={
    email:"",
    pw:""
  }

  msg:string;

  info:any=[];
  data:any=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private services: ServicesProvider,
    public toastCrtl: ToastController,
    private storage: Storage,  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CambioPassPage');
  }

  enviarPass(){
    if(this.user.email !== ""){
      this.services.getChangePass(this.user.email).subscribe(x=>{
        console.log('xPassData', x);
        this.info = JSON.parse(x['_body']);
        //this.data = JSON.parse(this.info);
        console.log('data',this.info);
        if(this.info['SolicitudProcesada']){
          this.storage.set('cambioPass', true);
          this.storage.set('userEmail', this.user.email);          
          this.msg = 'Te enviamos un email a tu casilla, con una nueva contraseña temporal';
          this.toastError();
          setTimeout(()=>{
            this.navCtrl.pop()
          },2000)
        }else{
          this.msg = this.info['Resultado']
          this.toastError();
          setTimeout(()=>{
            this.navCtrl.pop()
          },2000)
        }
      })
    }else{
      this.msg = 'Debes ingresar tu email';
      this.toastError();
    }
  }

  toastError() {
    let toast = this.toastCrtl.create({
      message: this.msg,
      showCloseButton: true,
      duration: 4000,
      closeButtonText: "X",
      position: 'top',
      cssClass: 'toastError'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
