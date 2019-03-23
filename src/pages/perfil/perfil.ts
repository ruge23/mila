import { ServicesProvider } from './../../providers/services/services';
import { AuthProvider } from './../../providers/auth/auth';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { MenuPage } from './../menu/menu';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  nameUser:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public auth: AuthProvider,
    private services: ServicesProvider
  ) {
    this.nameUser = this.services._persona.nombre;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  goToHome(){
    this.navCtrl.push(HomePage)
  }

}
