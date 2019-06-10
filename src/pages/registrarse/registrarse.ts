import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

@IonicPage()
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {
  /*data:any = {};
  nick:any = {};
  pass:any = {};*/
  constructor(public navCtrl: NavController, public navParams: NavParams,private googlePlus: GooglePlus) {
    /*this.data.nombre = '';
    this.data.apellido='';
    this.data.correo='';
    this.data.password = '';
    this.data.apodo='';
    this.data.celular='';*/
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegistrarsePage');
  }
  rMail(){
    this.googlePlus.login({})
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }
  fbL(){
    
  }

}
