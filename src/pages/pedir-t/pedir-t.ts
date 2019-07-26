import { Component,ElementRef} from '@angular/core';
import { IonicPage, NavController,NavParams,ToastController,LoadingController,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';//Manejo de cache
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';//conexión

@IonicPage()
@Component({
  selector: 'page-pedir-t',
  templateUrl: 'pedir-t.html',
})
export class PedirTPage {
  img_correct:String=null;
  input_h:Boolean=true;
  btn_h:Boolean=false;
  name:String=null;
  model:String=null;
  plates:String=null;
  year:String=null;
  color:String=null;
  phone:String=null;
  constructor(private alertCtrl:AlertController,private loadingCtrl:LoadingController,private http: HttpClient,private toastCtrl:ToastController,private elementRef:ElementRef,private fb: FormBuilder,private storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
  }

  //Metodos
  ionViewCanEnter(){
  }
  change_img(){
    this.img_correct='assets/imgs/perfil.png';
  }
  ask(){
    this.img_correct='assets/imgs/logo.png';
    this.input_h=false;
    this.btn_h=true; 
  }

}
