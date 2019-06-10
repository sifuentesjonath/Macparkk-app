import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reservacion-b',
  templateUrl: 'reservacion-b.html',
})
export class ReservacionBPage {
  data:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data.fechE = '';
    this.data.hrE='';
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ReservacionBPage');
  }

}
