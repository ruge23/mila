import { PerfilPage } from './../../pages/perfil/perfil';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  constructor(public navCtrl: NavController) {
    /* console.log('Hello PopoverComponent Component');
    this.text = 'Hello World'; */
  }

  goToPerfil(name){
    this.navCtrl.push(PerfilPage, name);
  }

}
