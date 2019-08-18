//imports
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import {Validators,FormBuilder,FormGroup} from '@angular/forms';
import { HomePage } from '../home/home';
import { RegistrarsePage } from '../registrarse/registrarse';
import { Storage } from '@ionic/storage';//Manejo de cache
import { HttpClient } from '@angular/common/http';//conexión
import {Md5} from "md5-typescript";//MD5
import { Injectable } from '@angular/core';
import { ResPasswordPage } from '../res-password/res-password';//página para restablecer contraseña.
import { InicioPage} from '../../pages/inicio/inicio';
import { MainPage } from '../main/main';
import { DriverMainPage } from '../driver-main/driver-main';
import { MyApp } from '../../app/app.component';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
@Injectable()
export class LoginPage {
  private data: FormGroup;
  //constructor y declaración de uso de biblotecas
  constructor(private fb:FormBuilder,private loadingCtrl:LoadingController,private storage:Storage,public navCtrl: NavController,public navParams: NavParams,private http: HttpClient,public alertCtrl:AlertController) {
    this.data = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    });
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
    //this.navCtrl.push(InicioPage).then(() => {
        //this.navCtrl.remove(currentIndex);
    //});
    //this.provedor.submit(this.data.nickname,this.data.password);
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loading.present();
    var url = 'http://138.68.48.252:3000/Api/users/login';
    var password=Md5.init(this.data.value.password);
    let body=JSON.stringify({nickname:this.data.value.mail,password:password});
    this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
      if(res['state']===false){
        let error = this.alertCtrl.create({
          title: 'Aviso',
          message:"Usuario o contraseña incorrecta,por favor intentelo de nuevo",
          buttons: ['Entendido']
        });
        error.present();
        loading.dismiss();
      }
      else if(res['state']===true){ 
        loading.dismiss();
        if(res['level']==0){
          this.storage.set('confirmed',res['mail']);
          this.storage.set('client_n',res['name']);
          this.storage.set('client_sur',res['surname']);
          this.storage.set('id_client',res[".ID"]);
          this.storage.set('pass_o',res['clave']);
          this.storage.set('first_t',res['ft']);
          this.storage.set('virtual_ticket',res['ticket']);
          this.storage.set('client_name',res['name']+' '+res['surname']);
          this.storage.set('client_privilege',res['level']);
          let currentIndex = this.navCtrl.getActive().index;
          this.navCtrl.push(MyApp).then(() => {
              this.navCtrl.remove(currentIndex);
          });
        }
        else if(res['level']==1){
          this.storage.set('confirmed',res['mail']);
          this.storage.set('client_n',res['name']);
          this.storage.set('client_sur',res['surname']);
          this.storage.set('id_client',res[".ID"]);
          this.storage.set('pass_o',res['clave']);
          this.storage.set('first_t',res['ft']);
          this.storage.set('virtual_ticket',res['ticket']);
          this.storage.set('client_name',res['name']+' '+res['surname']);
          this.storage.set('client_privilege',res['level']);
          let currentIndex = this.navCtrl.getActive().index;
          this.navCtrl.push(MyApp).then(() => {
              this.navCtrl.remove(currentIndex);
          });
        }
        else if(res['level']==2){
          this.storage.set('confirmed',res['mail']);
          this.storage.set('client_n',res['name']);
          this.storage.set('client_sur',res['surname']);
          this.storage.set('id_client',res[".ID"]);
          this.storage.set('pass_o',res['clave']);
          this.storage.set('client_name',res['name']+' '+res['surname']);
          this.storage.set('client_privilege',res['level']);
          const driver=JSON.stringify([{model:res['modelo'],plates:res['placas'],year:res['año'],color:res['color'],phone:res['tel']}]);
          if(driver=='[{}]'){
            this.storage.set('driver-transport',null);
          }
          else{
            this.storage.set('driver-transport',driver); 
          }
          let currentIndex = this.navCtrl.getActive().index;
          this.navCtrl.push(MyApp).then(() => {
              this.navCtrl.remove(currentIndex);
          });
        }
      }
      else if(res['verificado']==false){
        let error = this.alertCtrl.create({
          title: 'Aviso',
          message:"Antes de ingresar porfavor verifique su correo.",
          buttons: ['Entendido']
        });
        error.present();
        loading.dismiss();
      }
      else{
        loading.dismiss();
      }
    },err => {
      const error = this.alertCtrl.create({
        title: 'Alerta',
        message:"Datos no obtenidos.",
        buttons: ['Entendido']
      });
      error.present();
      /*console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);*/
      loading.dismiss();
    });
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
