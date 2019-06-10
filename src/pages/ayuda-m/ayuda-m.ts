import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-ayuda-m',
  templateUrl: 'ayuda-m.html',
})
export class AyudaMPage {
  data:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data.mensaje = '';
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AyudaMPage');
  }
  enviar(){}

}
