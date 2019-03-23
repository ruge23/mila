import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuiciablePage } from './juiciable';

@NgModule({
  declarations: [
    JuiciablePage,
  ],
  imports: [
    IonicPageModule.forChild(JuiciablePage),
  ],
})
export class JuiciablePageModule {}
