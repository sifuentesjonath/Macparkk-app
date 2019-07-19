import { Component,ElementRef } from '@angular/core';
import { IonicPage, NavController,NavParams,ToastController,LoadingController,AlertController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';//Manejo de cache
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';//conexión
import { InicioPage } from '../inicio/inicio';
@IonicPage()
@Component({
  selector: 'page-registrar-b',
  templateUrl: 'registrar-b.html',
})
export class RegistrarBPage {
  private data: FormGroup;
  qrData:String=null;
  createdCode = null;
  date_complete:any=null;
  name:String=null;
  surname:String=null;
  mail:String=null;
  identificator:String=null;
  options:BarcodeScannerOptions;
  constructor(private alertCtrl:AlertController,private loadingCtrl:LoadingController,private http: HttpClient,private toastCtrl:ToastController,private elementRef:ElementRef,private fb: FormBuilder,private storage:Storage,public navCtrl: NavController, public navParams: NavParams,private barcodeScanner:BarcodeScanner) {
    this.data = this.fb.group({
      plates: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9_]{7,10}$/)]],
      model: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      year: ['', [Validators.required, Validators.pattern(/^[0-9]{3,15}$/)]],
      color: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]{3,15}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      identificator:['', [Validators.required]],
    });
  }
  //Metodos
  ionViewCanEnter(){
    this.storage.get('confirmed').then((res_confirmed) => {
      this.storage.get('client_n').then((res_nombre) => {
        this.storage.get('client_sur').then((res_apellido) => {
            this.storage.get('id_client').then((res_id_client) => {
              if(res_confirmed.leght!=0&&res_nombre.leght!=0&&res_apellido.leght!=0&&res_id_client.leght!=0){
                if(res_confirmed!=null&&res_nombre!=null&&res_apellido!=null&&res_id_client!=null){
                    this.name=res_nombre;
                    this.surname=res_apellido;
                    this.mail=res_confirmed;
                }
              }
            });
        });    
      });
    });
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
  Scan(){
    this.options={prompt:'Escanea el qr de tu ticket.',disableAnimations:true};
    this.barcodeScanner.scan(this.options).then((data)=>{
      this.identificator=data['text'];
    }).catch(err=>{
      console.log('Error:',err);
    });
  }
  Save(){
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loading.present();
    var url = 'http://138.68.48.252:3000/Api/users/check_in_ticket';
    let body=JSON.stringify({name:this.name,surname:this.surname,mail:this.mail,plates:this.data.value.plates,model:this.data.value.model,year:this.data.value.year,color:this.data.value.color,phone:this.data.value.phone,id:this.data.value.identificator});
    this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
      if(res['state']==='exist'){
        let error = this.alertCtrl.create({
          title: 'Aviso',
          message:"Registro ya hecho.",
          buttons: ['Entendido']
        });
        error.present();
        loading.dismiss();
      }
      else if(res['state']===true){
        this.storage.set('virtual_ticket',this.identificator);
        this.storage.set('first_t',true);
        var perfect = this.alertCtrl.create({
          title: 'Perfecto',
          message:"Exito al registrar tu boleto.",
          buttons: ['Entendido']
        });
        perfect.present();
        loading.dismiss();
        let currentIndex = this.navCtrl.getActive().index;
        this.navCtrl.push(InicioPage).then(() => {
          this.navCtrl.remove(currentIndex);
        });
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
