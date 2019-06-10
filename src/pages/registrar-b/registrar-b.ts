import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-registrar-b',
  templateUrl: 'registrar-b.html',
})
export class RegistrarBPage {
  qrData      = 'Hola Mundo';
  createdCode = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    this.createdCode = this.qrData;
    //console.log('ionViewDidLoad RegistrarBPage');
  }

}
