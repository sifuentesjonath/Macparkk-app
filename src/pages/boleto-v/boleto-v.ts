import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';//Manejo de cache

@IonicPage()
@Component({
  selector: 'page-boleto-v',
  templateUrl: 'boleto-v.html',
})
export class BoletoVPage {
  qrData      = null;
  createdCode = null;
  constructor(private storage:Storage,public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
  }

  //Metodos
  ionViewCanEnter(){
    this.storage.get('confirmed').then((res_confirmed) => {
      this.storage.get('client_n').then((res_nombre) => {
        this.storage.get('client_sur').then((res_apellido) => {
          this.storage.get('pass_o').then((res_pass) => {
            this.storage.get('id_client').then((res_id_client) => {
              this.storage.get('virtual_ticket').then((res_token_id) => {
                if(res_confirmed.leght!=0&&res_nombre.leght!=0&&res_apellido.leght!=0&&res_pass.leght!=0&&res_id_client.leght!=0&&res_token_id.leght!=0){
                  if(res_confirmed!=null&&res_nombre!=null&&res_apellido!=null&&res_pass!=null&&res_id_client!=null&&res_token_id!=null){
                    this.createdCode=res_token_id;
                  }
                }
              });
            });
          });
        });    
      });
    });
  } 
  /*scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }*/

}
