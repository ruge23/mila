import { Storage } from '@ionic/storage';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { PrendaPage } from './../prenda/prenda';
import { CancelacionPage } from './../cancelacion/cancelacion';
import { TelefonosPage } from './../telefonos/telefonos';
import { PerfilPage } from './../perfil/perfil';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App, PopoverController, ToastController } from 'ionic-angular';

import { LoginPage } from './../login/login';
import { UserPage } from './../user/user';
import { AdminPage } from './../admin/admin';
import { UserSecondPage } from './../user-second/user-second';
import { AdminSecondPage } from './../admin-second/admin-second';
import { SegurosPage } from './../seguros/seguros';
import { AyudaPage } from './../ayuda/ayuda';

import { AuthProvider } from './../../providers/auth/auth';
import { PopoverComponent } from '../../components/popover/popover';
import { JuiciablePage } from '../juiciable/juiciable';
import { ServicesProvider } from '../../providers/services/services';

@IonicPage()
@Component({
 selector: 'page-menu',
 templateUrl: 'menu.html',
})
export class MenuPage {
 rootPage: any = MenuPrincipalPage;
 pages = [];
 username = '';
  imgSrc:any;
  fbid:boolean=false;
 // Reference to the side menus root nav
 @ViewChild(Nav) nav: Nav;

 constructor(
   public navCtrl: NavController,
   private authProvider: AuthProvider,
   private appCtrl: App,
   public popoverCtrl: PopoverController,
   public toastCtrl: ToastController,
   private storage: Storage,    
   public serviceProvider: ServicesProvider
 ) {
   /* this.pages = [
     { title: 'Menu principal', page: MenuPrincipalPage, iconName: 'mila-3sol', sub:'Menu - Opciones' },
     { title: 'Estado de Cuentas', page: AdminPage, iconName: 'mila-2est', sub:'Estado - informar pago' },
     { title: 'Solicitud de pre cancelación', page: CancelacionPage, iconName: 'mila-3sol', sub:'Funcionalidad - flujo' },
     { title: 'Solicitud de prenda', page: PrendaPage, iconName: 'mila-4pren', sub:'Funcionalidad - flujo' },
     { title: 'Seguros', page: SegurosPage, iconName: 'mila-5seg', sub:'Auto - Vida - Hogar' },
     { title: 'Teléfonos', page: TelefonosPage , iconName: 'mila-6phone', sub: 'Listados de utilidad' },
     { title: 'Novedades & tips', page: AdminSecondPage , iconName: 'mila-7news', sub: 'Notificaciones - tips' },
     { title: 'Preguntas', page: AyudaPage , iconName: 'mila-8preg', sub:'Preguntas frecuentes' }
   ]; */

 }

 ionViewWillEnter() {
   this.avatarImg();
  console.log(this.serviceProvider._prestamo);

  this.pages = [];
  this.pages.push({ title: 'Menu principal', page: MenuPrincipalPage, iconName: 'mila-3sol', sub:'Menu - Opciones' });   
  this.pages.push({ title: 'Estado de Cuentas', page:this.serviceProvider._prestamo.Judicializado? JuiciablePage : AdminPage, iconName: 'mila-2est', sub:'Estado - Forma de pago' });
  /* if (this.serviceProvider._prestamo.HabilitadoPedidoPrecancelacion) {
    this.pages.push({ title: 'Solicitud de pre cancelación', page: CancelacionPage, iconName: 'mila-3sol', sub:'Funcionalidad - flujo' });
  }
  if (this.serviceProvider._prestamo.HabilitadoPedidoPrenda) {
    this.pages.push({ title: 'Solicitud de prenda', page: PrendaPage, iconName: 'mila-4pren', sub:'Funcionalidad - flujo' });
  } */
  if(this.serviceProvider._prestamo.PolizaVigente){
    this.pages.push({ title: 'Seguros', page: SegurosPage, iconName: 'mila-5seg', sub: 'Auto - Vida - Hogar' });
  }
  this.pages.push({ title: 'Teléfonos', page: TelefonosPage, iconName: 'mila-6phone', sub: 'Listados de utilidad' });
  this.pages.push({ title: 'Novedades & tips', page: AdminSecondPage, iconName: 'mila-7news', sub: 'Notificaciones - tips' });
  this.pages.push({ title: 'Preguntas', page: AyudaPage, iconName: 'mila-8preg', sub:'Preguntas frecuentes' });

}

avatarImg(){
  this.storage.get('fbid').then((result)=>{
    console.log('result', result);
    if(result){
      this.fbid = true;
      this.imgSrc = "https://graph.facebook.com/"+result+"/picture?type=large";
    }else{
      this.fbid=false;
    }
  })
}

 logout() {
   this.authProvider.logout();
   this.appCtrl.getRootNav().setRoot(LoginPage);
 }

 openPage(page) {
  if(page.title == 'Estado de Cuentas' && this.serviceProvider._prestamo.Judicializado)
  {
    this.nav.push(JuiciablePage);
  }
  if(page === SegurosPage && this.serviceProvider._prestamo.PolizaVigente['DocumentosPoliza'].length === 0){
    this.toastError();
    /* setTimeout(()=>{
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    },1000) */
  }else{
    this.nav.push(page);    
  }
 }

 presentPopover(myevent){
   const popover = this.popoverCtrl.create(PopoverComponent);
   popover.present({ ev: myevent });
 }

 toastError() {
  let toast = this.toastCtrl.create({
    message: 'Documentos de la Poliza vacia!',
    showCloseButton: true,
    closeButtonText: "X",
    duration: 5000,
    position: 'bottom',
    cssClass: 'toastError'
  });
  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });
  toast.present();
}

}
