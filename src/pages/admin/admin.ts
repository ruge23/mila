import { Storage } from '@ionic/storage';
import { FaqsPage } from './../faqs/faqs';
import { MenuPage } from './../menu/menu';
import { PopoverComponent } from './../../components/popover/popover';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Scroll, PopoverController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { UserSecondPage } from '../user-second/user-second';

import $ from "jquery";
import { NgxPaginationModule } from 'ngx-pagination';

import { VencimientoPage } from '../vencimiento/vencimiento';
import { ScrollHideConfig } from '../../directives/scroll-hide/scroll-hide';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  @ViewChild('Scroll') scrollElement: Scroll;

  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };

  tokenhere: string;
  //prestamos: any;
  pagos:any=[];
  capitalSolicitado: any;
  cuotas: any = [];
  cuotaVencer: any;
  montoVencer: any;
  llegoData: boolean;
  loader: any;
  private prestamo: any;
  mostrarBadge:boolean = true;
  ultimoVto:string;
  imgSrc:any;
  //relationship: string = "pesos";
  dataInforme:any=[];
  fbid:boolean=false;;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private service: ServicesProvider,
    private storage: Storage,
    public popoverCtrl: PopoverController
  ) {
    //this.llegoData = false;
    this.prestamo = this.service._prestamo;
    this.pagos = this.prestamo.Pagos;
    console.log('Pagos',this.pagos);
    console.log(this.prestamo);
    this.llegoData = true;
    this.cuotas = this.prestamo.Cuotas;
    this.mostrarData(this.cuotas);
    //this.loader.present();
    this.saldoAdeudado();
    this.avatarImg();
  }

  presentPopover(myevent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({ ev: myevent });
  }

  changeNumber(number){
    let str = number.toString();
    let result = str.replace(".",",");
    return result;
  }

  goBack(){
    this.navCtrl.setRoot(MenuPage);
  }

  goToPagos(){
    this.navCtrl.push(FaqsPage);
  }

  saldoAdeudado(){
    let resultado;
    let totalPagos=0;
    let totalCuotas=0;
    
    this.cuotas.map(x=>{
      totalCuotas += x.Importe;
      if(x.Numero == 36){
        this.ultimoVto= x.Vencimiento;
        //console.log('ultimoVTO', this.ultimoVto);
      }
    })

    this.pagos.map(x=>{
      totalPagos += x.Importe;
    })

    resultado = totalCuotas - totalPagos;
    if(resultado <= 0) this.mostrarBadge = false;
    //console.log('resultado',resultado);
    return resultado;
  }


  ionViewDidLoad() {
    this.loader = this.loadingCtrl.create({
      content: "Espere por favor...",
      duration: 2000
    });
  }

  verMas(e) {
    e.preventDefault();
    if ($('#descriptions').css('height') > '150px') {
      $('#descriptions').css({ 'height': '150px' });
      $('#vermas').html('Ver Mas');
    } else {
      $('#descriptions').css({ 'height': '270px' });
      $('#vermas').html('Ver Menos');
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

  mostrarData(cuotas) {
    let hoy = new Date();
    let mesHoy = (hoy.getMonth() + 1) < 10 ?  hoy.getMonth() + 1 : hoy.getMonth() + 1 === 13 ? hoy.getMonth() : hoy.getMonth()+1;
    let mesProx = (hoy.getMonth() + 2) < 10 ? hoy.getMonth() + 2 : (hoy.getMonth() + 2 === 13 ? hoy.getMonth()+1 : hoy.getMonth() + 2);
    //console.log('mes',mesProx.toString());
    let añoHoy = hoy.getFullYear();
    let diaComparar = '0'+mesHoy+'/'+añoHoy;
    //console.log('dia',diaComparar)
    cuotas.map((x) => {
      let fecha = this.verFecha(x.Vencimiento);
      //console.log('fecha', fecha);
      if (fecha == diaComparar) {
        //console.log('fecha', fecha);
        //console.log('cuota',x);
        this.cuotaVencer = fecha;
        this.montoVencer = x.Importe;
      }
      x.habilitarDetalle = (x.Saldo != x.Importe);
    })
  }
  
  verFecha(fecha) {
    let a = fecha.slice(0, 4);
    let b = fecha.slice(5, 7);
    return b+ "/" +a;
  }

  verCapital(cap){
    let a = (String(cap)).slice(0,2);
    let b = (String(cap)).slice(2,5);

    return a+"."+b;
  }



  goToCoutaDetalle(info) {
    this.navCtrl.push(UserSecondPage, info);
  }

  goToVencimiento() {
    this.navCtrl.push(VencimientoPage,{vto:this.ultimoVto, cuotas:this.cuotas});
  }

  getInforme(){
    this.service.getInformesPrestamo(this.prestamo['Numero']).subscribe(x=>{
      this.dataInforme = JSON.parse(x['_body']);
      console.log('aqiu',this.dataInforme['Informe']['URL']);
      window.open(this.dataInforme['Informe']['URL']);
    })
  }

}
