import { NewPassPage } from './../pages/new-pass/new-pass';
import { CambioPassPage } from './../pages/cambio-pass/cambio-pass';
import { AuthProvider } from './../providers/auth/auth';
import { FileTransfer } from '@ionic-native/file-transfer';
import { PagosPage } from './../pages/pagos/pagos';
import { TerminosPage } from './../pages/terminos/terminos';
import { PopoverComponent } from './../components/popover/popover';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ErrorHandler, NgModule, forwardRef } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
import { CallNumber } from '@ionic-native/call-number';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from './../pages/menu/menu';
import { UserSecondPage } from './../pages/user-second/user-second';
import { UserPage } from './../pages/user/user';
import { AdminSecondPage } from './../pages/admin-second/admin-second';
import { AdminPage } from './../pages/admin/admin';
import { LoginPage } from './../pages/login/login';
import { TelefonosPage } from './../pages/telefonos/telefonos';
import { FaqsPage } from './../pages/faqs/faqs';
import { FirstPage } from './../pages/first/first';
import { PerfilPage } from './../pages/perfil/perfil';
import { SegurosPage } from './../pages/seguros/seguros';
import { AyudaPage } from './../pages/ayuda/ayuda';
import { MenuPrincipalPage } from './../pages/menu-principal/menu-principal';
import { ScrollHideDirective } from './../directives/scroll-hide/scroll-hide';
import { PrendaPage } from './../pages/prenda/prenda';
import { CancelacionPage } from './../pages/cancelacion/cancelacion';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HttpClientModule } from '@angular/common/http';
import { ServicesProvider } from '../providers/services/services';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ExpandableComponent } from '../components/expandable/expandable';
import { VencimientoPage } from '../pages/vencimiento/vencimiento';
import { JuiciablePage } from '../pages/juiciable/juiciable';
import { DocumentViewerOriginal, DocumentViewer } from '@ionic-native/document-viewer';
import { File, FileOriginal } from '@ionic-native/file';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AdminPage,
    AdminSecondPage,
    UserPage,
    UserSecondPage,
    MenuPage,
    FirstPage,
    PerfilPage,
    TelefonosPage,
    FaqsPage,
    AyudaPage,
    SegurosPage,
    CancelacionPage,
    PrendaPage,
    ExpandableComponent,
    VencimientoPage,
    ScrollHideDirective,
    MenuPrincipalPage,
    PopoverComponent,
    JuiciablePage,
    TerminosPage,
    PagosPage,
    CambioPassPage,
    NewPassPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDatatableModule,
    HttpModule,
    NgxPaginationModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      backButtonIcon: 'md-arrow-back',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AdminPage,
    AdminSecondPage,
    UserPage,
    UserSecondPage,
    MenuPage,
    FaqsPage,
    FirstPage,
    PerfilPage,
    AyudaPage,
    SegurosPage,
    TelefonosPage,
    CancelacionPage,
    PrendaPage,
    ExpandableComponent,
    VencimientoPage,
    MenuPrincipalPage,
    PopoverComponent,
    JuiciablePage,
    TerminosPage,
    PagosPage,
    CambioPassPage,
    NewPassPage,
  ],
  providers: [
    ServicesProvider,
    AuthProvider,
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Facebook,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
