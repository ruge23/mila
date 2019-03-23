import { Storage } from '@ionic/storage';
import { ServicesProvider } from './../../providers/services/services';
import { UserPage } from './../user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { MenuPage } from '../menu/menu';


@IonicPage()
@Component({
  selector: 'page-vencimiento',
  templateUrl: 'vencimiento.html',
})
export class VencimientoPage {

  nameUser:string;
  ultimoVto:string;
  cuotas:any=[];
  saldos:any=[];
  totalCuotas:number;
  imgSrc:any;
  fbid:boolean =false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private services: ServicesProvider,
    public popoverCtrl: PopoverController,
    private storage: Storage,
  ) {
    this.avatarImg();
    this.nameUser = this.services._persona.nombre;
    this.ultimoVto = this.navParams.data.vto;
    this.cuotas = this.navParams.data.cuotas;
    this.totalCuotas = this.cuotas.length;
    //console.log('data', this.ultimoVto);
    this.calculoSaldos();
  }

  calculoSaldos(){
    this.cuotas.map(x=>{
      if(x.Saldo > 0){
        this.saldos.push(x);
      }
    })
  }

  avatarImg(){
    this.storage.get('fbid').then((result)=>{
      console.log('result', result);
      if(result){
        this.fbid = true;
        this.imgSrc = "https://graph.facebook.com/"+result+"/picture?type=square";
      }else{
        this.fbid=false;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VencimientoPage');
  }

  presentPopover(myevent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({ ev: myevent });
  }

  goBack(){
    this.navCtrl.setRoot(MenuPage);
  }

  goToPagos(){
    this.navCtrl.push(UserPage);
  }

}
