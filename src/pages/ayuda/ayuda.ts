import { ServicesProvider } from './../../providers/services/services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-ayuda',
  templateUrl: 'ayuda.html',
})
export class AyudaPage {

  listafaqs: any;
  visible:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private services: ServicesProvider) {
    //this.listafaqs = [{pregunta: "pergunta1", respuesta:"Respuesta numero 1", expanded: false},{pregunta: "pergunta2", respuesta:"Respuesta numero 2", expanded: false},{pregunta: "pergunta3", respuesta:"Respuesta numero 3", expanded: false},{pregunta: "pergunta4", respuesta:"Respuesta numero 4", expanded: false},{pregunta: "pergunta5", respuesta:"Respuesta numero 5", expanded: false}];
    this.services.getPregFrecuentes().subscribe(x=>{
      this.listafaqs = JSON.parse(JSON.parse(x['_body'])['data']);
      console.log('data', JSON.parse(JSON.parse(x['_body'])['data']));
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AyudaPage');
  }

  expandItem(item) {
    this.listafaqs.map((x)=>{
      x.expanded = false;
      x.visible = false;
    })
    console.log('item', item.expanded);
    item.expanded = !item.expanded;
    item.visible = !item.visible;
  }

  

}
