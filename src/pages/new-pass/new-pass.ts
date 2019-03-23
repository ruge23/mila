import { Storage } from '@ionic/storage';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';


@Component({
  selector: 'page-new-pass',
  templateUrl: 'new-pass.html',
})
export class NewPassPage {

  user:any={
    pw1:"",
    pw2:""
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

  ionViewWillEnter(){
    this.user.pw1 = "";
    this.user.pw2 = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad newPassPage');
  }

  enviarPass(){
    if(this.user.pw1 === this.user.pw2){
      this.storage.get('userEmail').then(val=>{
        if(val){
          this.services.getChangeNewPass(val,this.user.pw1).subscribe(x=>{
            console.log('xPassData', x);
            this.info = JSON.parse(x['_body']);
            //this.data = JSON.parse(this.info);
            console.log('data',this.info);
            if(this.info['SolicitudProcesada']){
              this.storage.set('cambioPass', false);              
              this.msg = this.info['Resultado'];
              this.toastError();
              setTimeout(()=>{
                this.navCtrl.setRoot(HomePage);
              },2000)
            }else{
              this.msg = this.info['Resultado'];
              this.toastError();
              setTimeout(()=>{
                this.navCtrl.pop()
              },2000)
            }
          })
        }
      })
    }else{
      this.msg = 'Tus contraseñas no coinciden!';
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
