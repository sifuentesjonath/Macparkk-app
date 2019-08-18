import { Component,ElementRef } from '@angular/core';
import { IonicPage, NavController,NavParams,ToastController,LoadingController,AlertController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';//Manejo de cache
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';//conexión
import { InicioPage } from '../inicio/inicio';

@IonicPage()
@Component({
  selector: 'page-driver-transport',
  templateUrl: 'driver-transport.html',
})
export class DriverTransportPage {
  private data: FormGroup;
  date_complete:any=null;
  driver:String=null;
  mail:String=null;
  identificator:String=null;
  options:BarcodeScannerOptions;
  data_transport:Object=[{}];
  constructor(private alertCtrl:AlertController,private loadingCtrl:LoadingController,private http: HttpClient,private toastCtrl:ToastController,private elementRef:ElementRef,private fb: FormBuilder,private storage:Storage,public navCtrl: NavController, public navParams: NavParams,private barcodeScanner:BarcodeScanner) {
    this.data = this.fb.group({
      plates: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9_]{7,10}$/)]],
      model: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      year: ['', [Validators.required, Validators.pattern(/^[0-9]{3,15}$/)]],
      color: ['', [Validators.required,Validators.pattern(/^[a-z A-Z ]{3,20}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
    storage.get('confirmed').then((res_confirmed) => {
      storage.get('client_n').then((res_nombre) => {
        storage.get('client_sur').then((res_apellido) => {
          storage.get('driver-transport').then((res_transport)=>{
            storage.get('id_client').then((res_id_client) => {
              if(res_confirmed.leght!=0&&res_nombre.leght!=0&&res_apellido.leght!=0&&res_id_client.leght!=0){
                if(res_confirmed!=null&&res_nombre!=null&&res_apellido!=null&&res_id_client!=null){
                  this.driver=res_nombre+' '+res_apellido;
                  this.mail=res_confirmed;
                  this.identificator=res_id_client;
                  if(res_transport==null||res_transport.leght==0){}
                  else{
                    const driver_transport=JSON.parse(res_transport);
                    this.data_transport=[{
                      model:driver_transport[0].model,plates:driver_transport[0].plates,
                      year:driver_transport[0].year,color:driver_transport[0].color,phone:driver_transport[0].phone
                    }];
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
  ionViewCanEnter(){}
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
        message: 'Escriba sus placas sin guion.',
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
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loading.present();
    var url = 'http://138.68.48.252:3000/Api/users/driver_check_transport';
    let body=JSON.stringify({driver:this.driver,id:this.identificator,mail:this.mail,plates:this.data.value.plates,model:this.data.value.model,year:this.data.value.year,color:this.data.value.color,phone:this.data.value.phone});
    this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
      if(res['state']===true){
        this.storage.set('driver-transport',JSON.stringify([{chofer:this.driver,id:this.identificator,plates:this.data.value.plates,model:this.data.value.model,year:this.data.value.year,color:this.data.value.color,phone:this.data.value.phone}]));
        var perfect = this.alertCtrl.create({
          title: 'Perfecto',
          message:"Exito al subir la información.",
          buttons: ['Entendido']
        });
        perfect.present();
        loading.dismiss();
      }
      if(res['state']===false){
        var error = this.alertCtrl.create({
          title: 'Advertencia',
          message:"Falló al subir la información.",
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
