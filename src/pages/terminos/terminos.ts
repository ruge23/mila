import { ServicesProvider } from './../../providers/services/services';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TerminosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-terminos',
  templateUrl: 'terminos.html',
})
export class TerminosPage {
  terminos:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServicesProvider) {
    this.service.getTerminos().subscribe(x=>{
      this.terminos = JSON.parse(JSON.parse(x['_body'])['data']);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminosPage');
  }

}
