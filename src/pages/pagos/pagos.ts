import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { MenuPage } from '../menu/menu';
import { ServicesProvider } from '../../providers/services/services';


@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html',
})
export class PagosPage {
  info:boolean;
  debito:boolean;
  sinDebito:boolean;
  imgSrc:any;
  fbid:boolean =false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    private storage: Storage, 
    public serviceProvider: ServicesProvider
  ) {
    //console.log('llega',this.navParams.data);
    if(!this.navParams.data){
      this.sinDebito=true;
      this.debito=false;
    }else{
      this.debito = true;
      this.sinDebito = false; 
    } 
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

  ionViewWillEnter(){
    this.avatarImg();
  }

  presentPopover(myevent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({ ev: myevent });
  }

  goBack(){
    this.navCtrl.setRoot(MenuPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagosPage');
  }

}
