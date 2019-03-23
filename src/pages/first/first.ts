import { Storage } from '@ionic/storage';
import { MenuPage } from './../menu/menu';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Menu, LoadingController } from 'ionic-angular';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { initialize } from '../../../plugins/cordova.plugin.serviceOnBoardingSDK/www/serviceOnBoardingSDK.js';
//import { initialize } from 'serviceonboardingsdk';

import { LoginPage } from './../login/login';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';
import { ServicesProvider } from '../../providers/services/services';
import { HomePage } from '../home/home';

declare var cordova;

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})

export class FirstPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl : LoadingController,
    public fb: Facebook,
    private storage: Storage,
    public service: ServicesProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

  //login with Facebook
  loginAction() {
    //permissions
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        if (res.status == "connected") {
          //Get user ID an Token
          var fb_id = res.authResponse.userID;
          this.storage.set('_fbid', res.authResponse.userID);
          var fb_token = res.authResponse.accessToken;
          console.log('id and toke', fb_id, fb_token);

          //Get user infos from the API
          this.fb.api("/me?fields=name,email", [])
            .then((user) => {
              var name = user.name;
              var email = user.email;
              console.log('emailDeFace', email);
              if (email != "") {
                //this.storage.set('emailFB', email);
                let loading = this.loadingCtrl.create({
                  spinner: 'bubbles',
                  content: 'Espere por favor...'
                });
                this.service.getTokenEmail(email).subscribe(x => {
                  console.log('1Data',x);
                  this.service.getDatosCliente().subscribe(x=>{
                    console.log('2Data',x);
                    loading.dismiss();
                    this.navCtrl.setRoot(HomePage);
                  })     
                });
              }
            });
        } else {
          //error ocurred while loging-in
          console.log("Error ocurred")
        }
      })
      .catch((error) => {
        console.log('Error logging into Facebook', error);
      });
  }

  /* login con faceId */
  login() {
    let success = () => { alert('success') };
    let error = () => { console.log('error') };

    console.log('entro al ready', initialize);

    initialize('https://rest.microlending.com.ar/biometria/v1/vu/', 'dbd001c8-8779-424c-82ef-1b708f2bf7bf', success, error);

    //cordova.plugins.
    //cordova.plugin.serviceonboardingsdk.initialize('https://rest.microlending.com.ar/biometria/v1/vu/','dbd001c8-8779-424c-82ef-1b708f2bf7bf',success, error);
    //this.sdk.initialize('https://rest.microlending.com.ar/biometria/v1/vu/','dbd001c8-8779-424c-82ef-1b708f2bf7bf',success, error);
  }

  goTointerLogin() {
    this.navCtrl.push(LoginPage)
  }

  goToPerfil() {
    this.navCtrl.push(PerfilPage);
  }

}
