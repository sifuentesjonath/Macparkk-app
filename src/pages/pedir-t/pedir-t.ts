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
    storage.get('confirmed').then((res_confirmed) => {
      storage.get('client_n').then((res_nombre) => {
        storage.get('client_sur').then((res_apellido) => {
          storage.get('virtual_ticket').then((res_token_id)=>{
            storage.get('car_data').then((res_car_data)=>{
              if(res_confirmed.leght!=0&&res_nombre.leght!=0&&res_apellido.leght!=0&&res_token_id.leght!=0){
                if(res_confirmed!=null&&res_nombre!=null&&res_apellido!=null&&res_token_id!=null){
                  if(res_car_data==null||res_car_data.leght==0){
                  }
                }
              }
            });
          });
        });
      });
    });

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
