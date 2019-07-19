import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';//conexión
@IonicPage()
@Component({
  selector: 'page-promociones',
  templateUrl: 'promociones.html',
})
export class PromocionesPage {

  constructor(public navCtrl: NavController,public navParams: NavParams,private http: HttpClient,public alertCtrl:AlertController) {
  }

    //Metodos
  ionViewCanEnter(){
    /*var url = 'http://138.68.48.252:3000/payouts';
    let body=JSON.stringify({mensaje:'hola'});
    this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
      console.log(res);
    },err => {
      console.log(err);
    });*/
  }
}
