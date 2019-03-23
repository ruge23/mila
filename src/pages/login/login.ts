import { NewPassPage } from './../new-pass/new-pass';
import { Storage } from '@ionic/storage';
import { CambioPassPage } from './../cambio-pass/cambio-pass';
import { AuthProvider } from './../../providers/auth/auth';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';

import { PerfilPage } from './../perfil/perfil';
//import { HomePage } from './../home/home';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';
import { ServicesProvider } from '../../providers/services/services';
import { HomePage } from '../home/home';
//import { MenuPage } from './../menu/menu';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  @ViewChild('video1') mVideoPlayer: ElementRef;
  
  user = {
    name: '',
    pw: ''
  };
  msgError: string = "";
  showMsgError: boolean = false;
  //mostrar:boolean=false;
  videoPlayer:any;
  videoHide:boolean=true;
  cambioBtn:boolean = false;

  constructor(public navCtrl: NavController, 
    private authProvider: AuthProvider,
    private serviceProvider: ServicesProvider, 
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
  ) { 
    //this.presentLoadingDefault();
  }

  /* presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.mostrar = true;
      loading.dismiss();
    }, 3000);
  } */
  ionViewWillEnter(){
    this.validarEmail();
    /* this.videoPlayer = this.mVideoPlayer.nativeElement;
    this.videoPlayer.type="video/mp4";
    this.videoPlayer.src= "../../assets/videos/videoLogin.mp4";
    this.videoPlayer.load();
    this.videoPlayer.play(); */
    /* setTimeout(()=>{
      this.videoHide = false;
    },1000) */  
  }

  /* ionViewDidLoad(){
    this.videoPlayer = this.mVideoPlayer.nativeElement;    
    this.videoPlayer.play();
  } */

  loginUser() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Espere por favor...'
    });
    loading.present();
    if(this.validacion()){
      console.log('user', this.user.name + this.user.pw);
      this.serviceProvider.getTokenUsuario(this.user.name, this.user.pw).subscribe(data => {
        console.log('data', data);
        if(data){
          let ret = JSON.parse(data["status"]);
          console.log('ret', ret);
          if (ret === 200) {
            this.storage.set('userEmail', this.user.name);
            this.serviceProvider.getDatosCliente().subscribe(x=>{
              this.storage.get('cambioPass').then(val=>{
                console.log('valStorage', val);
                if(val){
                  this.navCtrl.setRoot(NewPassPage);
                  loading.dismiss();              
                }else{
                  this.navCtrl.setRoot(HomePage);
                  loading.dismiss();
                }
              })
            })
          }
        }
      },error=>{
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Error!',
          message: 'Tu usuario no esta asociado a una cuenta.',
          buttons: ['OK'],
          cssClass: 'alertDanger'
        });
        this.user.name = "";
        this.user.pw = "";    
        alert.present();
        //console.log('err',error);
      })
    }
  }

  validarEmail(){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Espere por favor...'
    });
    loading.present();
    this.storage.get('userEmail').then((result)=>{
      loading.dismiss();      
      if(result){
        this.user.name = result;
      }else{
        this.user.name = "";
      }
    })
  }

  validacion() {
    let ret = true;
    let msg = "";
    if (this.user.name == "") {
      ret = false;
      msg += "Debe completar el email\n";
    }
    if (this.user.pw == "") {
      ret = false;
      msg += "Debe completar el password";
    }
   
    this.msgError = msg;
    return ret;
  }

  toastError() {
    let toast = this.toastCtrl.create({
      message: this.msgError,
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

  goToChangePw(){
    this.navCtrl.push(CambioPassPage);
  }

  goToPerfil(){
    this.navCtrl.push(PerfilPage);
  }
}
