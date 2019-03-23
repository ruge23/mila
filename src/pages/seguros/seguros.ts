import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PopoverComponent } from '../../components/popover/popover';
import { MenuPage } from '../menu/menu';
import { ServicesProvider } from '../../providers/services/services';

export interface Config {
	technologies: string;
}

@IonicPage()
@Component({
  selector: 'page-seguros',
  templateUrl: 'seguros.html',
})
export class SegurosPage {
  nameUser:string;
  automovil:any=[];
  poliza:any=[];
  public config : Config;
  public columns : any;
  public rows : any;
  imgSrc:any;
  fbid:boolean =false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private storage: Storage,
    /* private file: FileOriginal,
    private document: DocumentViewerOriginal,
    private transfer : FileTransfer,  */
    private platform: Platform,
    public serviceProvider: ServicesProvider
  ) {
    this.avatarImg();
    this.nameUser = this.serviceProvider._persona.nombre;
    this.automovil = this.serviceProvider._prestamo.Automovil;
    this.poliza = this.serviceProvider._prestamo.PolizaVigente;
    console.log('poliza',this.poliza);
    console.log('auto', this.automovil);
    this.columns = [
      { prop: 'name' },
      { name: 'Company' }
    ];
  }

  ionViewDidLoad() : void
   {
    this.rows = [
      {
        "name" : "Poliza",
        "company" : this.poliza['Numero']
     },
     {
        "name" : "Asegurado",
        "company" : this.nameUser
     },
     {
        "name" : "Vehiculo",
        "company" : this.automovil['Marca']+" "+this.automovil['Modelo']
     },
     {
        "name" : "Patente",
        "company" : this.automovil['Dominio']
     },
     {
        "name" : "Vigencia",
        "company" : this.getDate(this.poliza['FechaVigenciaDesde'])+' al '+this.getDate(this.poliza['FechaVigenciaHasta'])
     }
    ]

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

  getDate(fec){
    let fecha = new Date(fec);
    let mes = fecha.getMonth() < 12 ? fecha.getMonth()+1 : fecha.getMonth();  
    return fecha.getDate()+'/'+mes+'/'+fecha.getFullYear();
  }

  presentPopover(myevent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({ ev: myevent });
  }

  goBack(){
    this.navCtrl.setRoot(MenuPage);
  }

  imagenSeguro(){
    let nameSegu = this.poliza['Compania']['Nombre'].split(' ')[0];
    let img = "";
    switch(nameSegu){
      case "Mapfre":
        img = '../../assets/imgs/seguros/mapfre.svg';
        break;
      case "Allianz":
        img = '../../assets/imgs/seguros/allianz.svg';
        break;
      case "San":
        img = '../../assets/imgs/seguros/san-cristobal.svg';
        break;
      case "Seguro":
        img = '../../assets/imgs/seguros/seg-rivadavia.svg';
        break;
      case "Sura":
        img = '../../assets/imgs/seguros/sura.svg';
        break;
      case "Rivadavia":
        img = '../../assets/imgs/seguros/seg-rivadavia.svg';
        break;
    }
    return img;
  }

  /* downloadAndOpenPdf(){
    const options : DocumentViewerOptions = {
      title: 'My PDF'
    };

    let path = null;

    if(this.platform.is('ios')){
      path = this.file.documentsDirectory;
    }else{
      path = this.file.dataDirectory;
    }

    const transfer = this.transfer.create();
    transfer.download(this.poliza['DocumentosPoliza'][0]['URL'], path + 'myfile.pdf').then(entry=>{
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', options)
    })
  } */

}
