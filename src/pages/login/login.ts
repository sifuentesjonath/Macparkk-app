//imports
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegistrarsePage } from '../registrarse/registrarse';
import { Storage } from '@ionic/storage';//Manejo de cache
import { HttpClient } from '@angular/common/http';//conexión
//import {Md5} from "md5-typescript";//MD5
import { Injectable } from '@angular/core';
import { ResPasswordPage } from '../res-password/res-password';//página para restablecer contraseña.
import { InicioPage} from '../../pages/inicio/inicio';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
@Injectable()
export class LoginPage {
  data:any = {};
  nick:any = {};
  pass:any = {};
  //constructor y declaración de uso de biblotecas
  constructor(public navCtrl: NavController,public navParams: NavParams,private http: HttpClient,public alertCtrl:AlertController) {
    this.data.nickname = '';
    this.data.password = '';
  }
  //metodos
  ionViewDidLoad() {
    //this.storage.clear();
    /*this.storage.get('confirmador').then((res) => {
      if(res!=null){
        let currentIndex = this.navCtrl.getActive().index;
        this.navCtrl.push(HomePage).then(() => {
            this.navCtrl.remove(currentIndex);
        });
      }                     
    });*/
  }
  ingresar(){
    //let currentIndex = this.navCtrl.getActive().index;
    this.navCtrl.push(InicioPage).then(() => {
        //this.navCtrl.remove(currentIndex);
    });
    //this.provedor.submit(this.data.nickname,this.data.password);
    /*var url = 'http://citcar.relatibyte.com.mx//connectApi.php';
    let password=Md5.init(this.data.password);
    let body=JSON.stringify({nickname:this.data.nickname,password:password});
    this.http.post(url,body).subscribe(res => {
      if(res===0){
        let error = this.alertCtrl.create({
          title: 'Error',
          message:"Usuario o contraseña incorrecta,por favor intentelo de nuevo",
          buttons: ['Entendido']
        });
        error.present();
      }
      else{ 
        this.nick=res[0].cliente_nick;
        this.pass=res[0].cliente_pass;
        this.storage.set('Apodo',this.nick);
        this.storage.set('confirmador',this.nick+this.pass);
        //console.dir(nick+','+pass);
        let currentIndex = this.navCtrl.getActive().index;
        this.navCtrl.push(HomePage).then(() => {
            this.navCtrl.remove(currentIndex);
        });

      }
    },err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });*/
  }
  passwordR(){
    //let currentIndex = this.navCtrl.getActive().index;
    this.navCtrl.push(ResPasswordPage).then(() => {
        //this.navCtrl.remove(currentIndex);
    });
  }
  registrarse(){
    let currentIndex = this.navCtrl.getActive().index;
    this.navCtrl.push(RegistrarsePage).then(() => {
        this.navCtrl.remove(currentIndex);
    });
    // set a key/value
    //this.storage.set('name', 'Max');
    // Or to get a key/value pair
    /*this.storage.get('name').then((val) => {
      let storag = this.alertCtrl.create({
        title: 'Prueba',
        message:val,
        buttons: ['Entendido']
      });
      storag.present();*/
      //console.log('Your age is', val);
    //});
  }
}
