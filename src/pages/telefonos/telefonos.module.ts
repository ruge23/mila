import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelefonosPage } from './telefonos';

@NgModule({
  declarations: [
    TelefonosPage,
  ],
  imports: [
    IonicPageModule.forChild(TelefonosPage),
  ],
})
export class TelefonosPageModule {}
