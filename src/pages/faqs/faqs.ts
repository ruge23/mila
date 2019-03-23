import { Storage } from '@ionic/storage';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Scroll } from 'ionic-angular';
import { ScrollHideConfig } from '../../directives/scroll-hide/scroll-hide';


@IonicPage()
@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs.html',
})
export class FaqsPage {

  @ViewChild('Scroll') scrollElement: Scroll;

  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  imgSrc:any;
  fbid:boolean =false;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqsPage');
  }

  ionViewWillEnter(){
    this.avatarImg();
  }

  goToEstados(){
    this.navCtrl.pop();
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
