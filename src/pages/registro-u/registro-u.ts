import { Component,ElementRef } from '@angular/core';
import { IonicPage, NavController,NavParams,ToastController,LoadingController,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';//Manejo de cache
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';//conexión
@IonicPage()
@Component({
  selector: 'page-registro-u',
  templateUrl: 'registro-u.html',
})
export class RegistroUPage {
  private data: FormGroup;
  qrData:String=null;
  createdCode = null;
  car_data:any=[];
  identificator:String=null;
  name:String=null;
  mail:String=null;
  model:String=null;
  plates:String=null;
  year:String=null;
  color:String=null;
  phone:String=null;
  constructor(private alertCtrl:AlertController,private loadingCtrl:LoadingController,private http: HttpClient,private toastCtrl:ToastController,private elementRef:ElementRef,private fb: FormBuilder,private storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.fb.group({
      plates: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9_]{7,10}$/)]],
      model: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      year: ['', [Validators.required, Validators.pattern(/^[0-9]{3,15}$/)]],
      color: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]{3,15}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
    storage.get('confirmed').then((res_confirmed) => {
      storage.get('client_n').then((res_nombre) => {
        storage.get('client_sur').then((res_apellido) => {
          storage.get('virtual_ticket').then((res_token_id)=>{
            storage.get('car_data').then((res_car_data)=>{
              var loading = this.loadingCtrl.create({
                content: 'Cargando...'
              });
              loading.present();
              if(res_car_data!=null){
                if(res_car_data.leght!=0){
                  this.car_data=JSON.parse(res_car_data);
                  this.plates=this.car_data[0].placas;
                  this.model=this.car_data[0].modelo;
                  this.year=this.car_data[0].año;
                  this.color=this.car_data[0].color;
                  this.phone=this.car_data[0].tel;
                  loading.dismiss();
                }
                else{
                  const error = this.alertCtrl.create({
                    title: 'Alerta',
                    message:"Vuelva a iniciar sesión.",
                    buttons: ['Entendido']
                  });
                  error.present();
                  loading.dismiss();
                }
              }
              else{
                if(res_confirmed.leght!=0&&res_nombre.leght!=0&&res_apellido.leght!=0&&res_token_id.leght!=0){
                  if(res_confirmed!=null&&res_nombre!=null&&res_apellido!=null&&res_token_id!=null){
                    this.identificator=res_token_id;
                    this.mail=res_confirmed;
                    this.name=res_nombre;
                    var url = 'http://138.68.48.252:3000/Api/users/consult_ticket';
                    let body=JSON.stringify({nombre:res_nombre,correo:res_confirmed,id:this.identificator});
                    this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
                      if(res['state']===false){
                        let error = this.alertCtrl.create({
                          title: 'Aviso',
                          message:"Datos no validos vuelva a iniciar sesión.",
                          buttons: ['Entendido']
                        });
                        error.present();
                        loading.dismiss();
                      }
                      else if(res['state']===true){
                        this.plates=res['placas'];
                        this.model=res['modelo'];
                        this.year=res['año'];
                        this.color=res['color'];
                        this.phone=res['tel'];
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
                  else{
                    const error = this.alertCtrl.create({
                      title: 'Alerta',
                      message:"Vuelva a iniciar sesión.",
                      buttons: ['Entendido']
                    });
                    error.present();
                    loading.dismiss();
                  }
                }
                else{
                  loading.dismiss();
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
  message(idM){
    if(idM==1){
      const message = this.toastCtrl.create({
        message: 'Escriba el modelo de su carro.',
        duration: 2000,
        position:'top',
      });
      message.present().then(() => {
        const inputElement = this.elementRef.nativeElement.getElementsByTagName('input')[0];
        inputElement.focus();
      });
    }
    else if(idM==2){
      const message = this.toastCtrl.create({
        message: 'Escriba sus placas.',
        duration: 2000,
        position:'top',
      });
      message.present().then(() => {
        const inputElement = this.elementRef.nativeElement.getElementsByTagName('input')[1];
        inputElement.focus();
      });
    }
    else if(idM==3){
      const message = this.toastCtrl.create({
        message: 'Escriba el año YYYY.',
        duration: 2000,
        position:'top',
      });
      message.present().then(() => {
        const inputElement = this.elementRef.nativeElement.getElementsByTagName('input')[2];
        inputElement.focus();
      });
    }
    else if(idM==4){
      const message = this.toastCtrl.create({
        message: 'Escriba el color de su auto máximo 15 caracteres',
        duration: 2000,
        position:'top',
      });
      message.present().then(() => {
        const inputElement = this.elementRef.nativeElement.getElementsByTagName('input')[3];
        inputElement.focus();
      }); 
    }
    else if(idM==5){
      const message = this.toastCtrl.create({
        message: 'Escriba su número de teléfono.',
        duration: 2000,
        position:'top',
      });
      message.present().then(() => {
        const inputElement = this.elementRef.nativeElement.getElementsByTagName('input')[4];
        inputElement.focus();
      });
    } 
  }
  Save(){
    var loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loading.present();
    var url = 'http://138.68.48.252:3000/Api/users/edit_ticket';
    let body=JSON.stringify({nombre:this.name,correo:this.mail,id:this.identificator,placas:this.data.value.plates,modelo:this.data.value.model,año:this.data.value.year,color:this.data.value.color,tel:this.data.value.phone});
    this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
      if(res['state']===false){
        let error = this.alertCtrl.create({
          title: 'Aviso',
          message:"Datos no validos vuelva a iniciar sesión.",
          buttons: ['Entendido']
        });
        error.present();
        loading.dismiss();
      }
      else if(res['state']===true){
        this.storage.set('car_data',JSON.stringify([{placas:this.data.value.plates,modelo:this.data.value.model,año:this.data.value.year,color:this.data.value.color,tel:this.data.value.phone}]));
        var correct = this.alertCtrl.create({
          title: 'Perfecto',
          message:"Exito al actualizar tu boleto.",
          buttons: ['Entendido']
        });
        correct.present();
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
