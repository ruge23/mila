import { Storage } from '@ionic/storage';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { CallNumber } from '@ionic-native/call-number';


@IonicPage()
@Component({
  selector: 'page-juiciable',
  templateUrl: 'juiciable.html',
})
export class JuiciablePage {

  private estudio: string;
  private nombre: string;
  numeroEstudio:any;
  imgSrc:any;
  fbid:boolean =false;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public serviceProvider: ServicesProvider,
    private callnumber: CallNumber,
    private storage: Storage,
  ) {
    this.estudio = serviceProvider._prestamo.EstudioAsignado;
    this.numeroEstudio = this.estudio['Telefono']
    this.nombre = serviceProvider._persona.nombre;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuiciablePage');
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

  goBack(){
    this.navCtrl.setRoot(MenuPrincipalPage);
  }

  async callNumber():Promise<any>{
    //console.log(num)
    try{
      await this.callnumber.callNumber(String(this.numeroEstudio), true);
    }catch(e){
      console.log('error- callNumber', e);
    }
  }

}
