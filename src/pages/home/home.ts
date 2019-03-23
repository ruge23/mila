import { Storage } from '@ionic/storage';
import { ServicesProvider } from './../../providers/services/services';
import { PerfilPage } from './../perfil/perfil';
import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nameUser:string;
  imgSrc:any;

  constructor(
    public navCtrl: NavController,
    private services: ServicesProvider,
    private storage: Storage,
  ) {
  }

  ionViewWillEnter(){
    this.imgPerfil();
    this.nameUser = this.services._persona.nombre;
    console.log('persona', this.services._persona);
  }

  actualizarPerfil(){
    this.navCtrl.push(PerfilPage);
  }

  goToMenu(){
    this.navCtrl.setRoot(MenuPage);
  }

  imgPerfil(){
    this.storage.get('fbid').then((result)=>{
      console.log('result', result);
      if(result){
        this.imgSrc = "https://graph.facebook.com/"+result+"/picture?type=large";
      }else{
        this.imgSrc = "../../assets/imgs/1us-blanco.svg";
      }
    })
  }
}
