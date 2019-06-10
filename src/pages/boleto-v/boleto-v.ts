import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@IonicPage()
@Component({
  selector: 'page-boleto-v',
  templateUrl: 'boleto-v.html',
})
export class BoletoVPage {
  qrData      = null;
  createdCode = null;
  //scannedCode = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BoletoVPage');
  }
  createCode() {
    this.createdCode = this.qrData;
  }
 
  /*scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }*/

}
