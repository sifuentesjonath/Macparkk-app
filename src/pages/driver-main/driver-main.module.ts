import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverMainPage } from './driver-main';

@NgModule({
  declarations: [
    DriverMainPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverMainPage),
  ],
})
export class DriverMainPageModule {}
