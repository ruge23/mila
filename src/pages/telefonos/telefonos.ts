import { ServicesProvider } from './../../providers/services/services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-telefonos',
  templateUrl: 'telefonos.html',
})
export class TelefonosPage {

  telefonos:any=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private service: ServicesProvider,
    private callnumber: CallNumber
  ) {
  }

  ionViewWillEnter(){
    console.log(this.service._prestamo['Contactos']);
    this.service.getTelefonos().subscribe(x=>{
      this.telefonos = JSON.parse(JSON.parse(x['_body'])['data']);
      this.service._prestamo['Contactos'].map((tel)=>{
        this.telefonos.push(tel);    
      })
      console.log('telefonos', this.telefonos);
    })
  }

  async callNumber(num):Promise<any>{
    //console.log(num)
    try{
      await this.callnumber.callNumber(String(num), true);
    }catch(e){
      console.log('error- callNumber', e);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelefonosPage');
  }

}
