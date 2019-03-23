import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VencimientoPage } from './vencimiento';

@NgModule({
  declarations: [
    VencimientoPage,
  ],
  imports: [
    IonicPageModule.forChild(VencimientoPage),
  ],
})
export class VencimientoPageModule {}
