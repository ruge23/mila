//import { HomePage } from './../pages/home/home';
import { MenuPage } from './../pages/menu/menu';
//import { MenuPrincipalPage } from './../pages/menu-principal/menu-principal';
//import { PerfilPage } from './../pages/perfil/perfil';
//import { AdminPage } from './../pages/admin/admin';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FirstPage } from './../pages/first/first';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
//import { TelefonosPage } from './../pages/telefonos/telefonos';
//import { AyudaPage } from './../pages/ayuda/ayuda';
//import { LoginPage } from './../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = FirstPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    screenOrientation: ScreenOrientation, 
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#632a88')
      splashScreen.hide();
    });
  }
}

