import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

@IonicPage()
@Component({
  selector: 'page-admin-second',
  templateUrl: 'admin-second.html',
})
export class AdminSecondPage {

  tokenhere: any;
  dataCliente: any;
  noticiasCliente: any = [];
  novedadesCliente: any = [];

  items: any = [];
  itemExpandHeight: number = 100;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController, 
    private service: ServicesProvider) {
   
    this.service.getNoticias().subscribe(x=>{
      this.items = JSON.parse(JSON.parse(x['_body'])['data']);
    });

  }

  expandItem(item) {
    this.items.map((x)=>{
      x.expanded = false;
    })
    item.expanded = !item.expanded;
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad AdminSecondPage');
  }

}