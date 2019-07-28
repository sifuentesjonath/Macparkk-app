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
  img_driver:String=null;
  input_h:Boolean=true;
  btn_h:Boolean=false;
  data_transport:any=[{}];
  data_client:Object=[{}];
  constructor(private alertCtrl:AlertController,private loadingCtrl:LoadingController,private http: HttpClient,private toastCtrl:ToastController,private elementRef:ElementRef,private fb: FormBuilder,private storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    storage.get('confirmed').then((res_confirmed) => {
      storage.get('client_n').then((res_nombre) => {
        storage.get('client_sur').then((res_apellido) => {
          storage.get('virtual_ticket').then((res_token_id)=>{
            storage.get('ask_transport').then((res_transport)=>{
              if(res_confirmed.leght!=0&&res_nombre.leght!=0&&res_apellido.leght!=0&&res_token_id.leght!=0){
                if(res_confirmed!=null&&res_nombre!=null&&res_apellido!=null&&res_token_id!=null){
                  if(res_transport==null||res_transport.leght==0){
                    this.btn_h=false;
                    this.data_client=[{nombre:res_nombre,apellido:res_apellido,ticket:res_token_id}];
                  }
                  else if(res_transport!=null||res_transport.leght!=0){
                    this.data_client=[{nombre:res_nombre,apellido:res_apellido,ticket:res_token_id}];
                    const ask_transport=JSON.parse(res_transport);
                    this.data_transport=[{
                      chofer:ask_transport[0].chofer,model:ask_transport[0].modelo,plates:ask_transport[0].placas,
                      year:ask_transport[0].año,color:ask_transport[0].color,phone:ask_transport[0].tel,state:ask_transport[0].state
                    }];
                    this.img_driver='assets/imgs/logo.png';
                    this.input_h=false;
                    this.btn_h=true;
                  }
                }
                else{
                  this.btn_h=true;
                }
              }
              else{
                this.btn_h=true;
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
    this.img_driver='assets/imgs/perfil.png';
  }
  ask(){
    const loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loading.present();
    const url = 'http://138.68.48.252:3000/Api/users/new_ask_transport';
    const body=JSON.stringify({nombre:this.data_client[0].nombre+''+this.data_client[0].apellido,id:this.data_client[0].ticket});
    this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
      if(res['state']===false){
        const error = this.alertCtrl.create({
          title: 'Aviso',
          message:"Petición de transporte no admitida,reservación previamente no hecha.",
          buttons: ['Entendido']
        });
        error.present();
        loading.dismiss();
      }
      else if(res['state']===true){
        //this.storage.set('car_data',JSON.stringify([{placas:this.data.value.plates,modelo:this.data.value.model,año:this.data.value.year,color:this.data.value.color,tel:this.data.value.phone}]));
        this.input_h=false;
        this.btn_h=true;
        this.img_driver='assets/imgs/logo.png';
        var correct = this.alertCtrl.create({
          title: 'Perfecto',
          message:"Petición de transporte hecha.",
          buttons: ['Entendido']
        });
        correct.present();
        loading.dismiss();
      }
      else if(res['state']==='exist'){
        const error = this.alertCtrl.create({
          title: 'Advertencia',
          message:"Petición de transporte ya en curso.",
          buttons: ['Entendido']
        });
        error.present();
        loading.dismiss();
      }
    },err => {
      const error = this.alertCtrl.create({
        title: 'Alerta',
        message:"Datos no enviados.",
        buttons: ['Entendido']
      });
      error.present();
      loading.dismiss();
    });
  }

}
