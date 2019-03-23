import { Storage } from '@ionic/storage';
import { ServicesProvider } from './../../providers/services/services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-user-second',
  templateUrl: 'user-second.html',
})
export class UserSecondPage {

  detalleCuota: any;
  nameUser:string;
  imgSrc:any;
  fbid:boolean =false;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private services : ServicesProvider, 
    public popoverCtrl: PopoverController,
    private storage: Storage,
  ) {
    this.avatarImg();
    this.detalleCuota = this.navParams.data;
    this.nameUser = this.services._persona.nombre;
    console.log(this.detalleCuota);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSecondPage');
  }

  presentPopover(myevent){
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({ ev: myevent });
  }

  goBack(){
    this.navCtrl.setRoot(MenuPage);
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

}
