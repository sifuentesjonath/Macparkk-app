import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,LoadingController} from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Md5} from "md5-typescript";//MD5
import { HttpClient } from '@angular/common/http';//conexión
import { Storage } from '@ionic/storage';//Manejo de cache

@IonicPage()
@Component({
  selector: 'page-perfil-e',
  templateUrl: 'perfil-e.html',
})
export class PerfilEPage {
  private data: FormGroup;
  //data:any={};
  nombre:String='';
  appm:String='';
  mail:String='';
  password_o:String='';
  imgP:any='assets/imgs/perfil.png';
  constructor(private storage:Storage,private http: HttpClient,public alertCtrl:AlertController,private fb: FormBuilder,public navCtrl:NavController,public navParams: NavParams,private camara:Camera,private transfer:FileTransfer,private file:File,private loadingCtrl:LoadingController) {
    this.data = this.fb.group({
      nombre: ['', [Validators.required]],
      appm: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern(/^[a-z0-9_-]{8,18}$/)]],
    });
  }
  //Metodos
  ionViewCanEnter(){
    this.storage.get('confirmed').then((res_confirmed) => {
      this.storage.get('client_n').then((res_nombre) => {
        this.storage.get('client_sur').then((res_apellido) => {
          this.storage.get('pass_o').then((res_pass) => {
            let loading = this.loadingCtrl.create({
              content: 'Cargando...'
            });
            loading.present();
            var url = 'http://138.68.48.252:3000/Api/users/edit_profile';
            //var password=Md5.init(this.data.value.password);
            let body=JSON.stringify({nombre:res_nombre,apellido:res_apellido,correo:res_confirmed});
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
                this.nombre=res['name'];
                this.appm=res['surname'];
                this.mail=res['mail'];
                this.password_o=res_pass;
                //this.storage.set('confirmed',res['mail']);
                //this.storage.set('client_name',res['name']+' '+res['surname']);
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
              loading.dismiss();
            });
          });
        });
      });
    });
  }
  changeImg(){
    /*let loader=this.loadingCtrl.create({
      content:'Subiendo...'
    });*/
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camara.DestinationType.DATA_URL,
      sourceType: this.camara.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    this.camara.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.imgP = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
  Save(){

  }
}
