import { Component,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,LoadingController} from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Md5} from "md5-typescript";//MD5
import { HttpClient } from '@angular/common/http';//conexión
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {
  private data: FormGroup;
  user:any={};
  nombre:String='';
  correo:String='';
  apellido:String='';
  type_check:any=0;
  constructor(private http: HttpClient,private loadingCtrl:LoadingController,private alertCtrl:AlertController,private elementRef:ElementRef,private toastCtrl:ToastController,private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams,private googlePlus: GooglePlus) {
    this.data = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern(/^[a-z0-9_-]{8,18}$/)]],
      passwordC: ['', [Validators.required,Validators.pattern(/^[a-z0-9_-]{8,18}$/)]],
    });
  }
  //Metodos
  ionViewDidLoad() {
  }
  check_in(){
    if(this.data.value.nombre.length!=0&&this.data.value.apellido.length!=0&&this.data.value.correo.length!=0&&this.data.value.password.length!=0&&this.data.value.passwordC.length!=0){
      if(this.data.value.passwordC===this.data.value.password){
        if(this.type_check==1){
          var url = 'http://138.68.48.252:3000/Api/users/check_in';
          let pass=Md5.init(this.data.value.password);
          let loading = this.loadingCtrl.create({
            content: 'Cargando...'
          });
          loading.present();
          let body=JSON.stringify({nombre:this.data.value.nombre,apellido:this.data.value.apellido,correo:this.data.value.correo,pass:pass,verificado:true});
          this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
            if(res['state']===true){
              var correct = this.alertCtrl.create({
                title: 'Aviso',
                message:"Exito al registrarse",
                buttons: ['Entendido']
              });
              correct.present();
              loading.dismiss();
              let currentIndex = this.navCtrl.getActive().index;
              this.navCtrl.push(LoginPage).then(() => {
                  this.navCtrl.remove(currentIndex);
              });
            }
            else if(res['state']===false){
              var error = this.alertCtrl.create({
                title: 'Aviso',
                message:"Fallo al registrarse,intentelo más tarde.",
                buttons: ['Entendido']
              });
              error.present();
              loading.dismiss();
            }
            else if(res['state']==='exist'){
              var error = this.alertCtrl.create({
                title: 'Aviso',
                message:"Mail en uso, porfavor cambie de mail e intentelo de nuevo.",
                buttons: ['Entendido']
              });
              error.present();
              loading.dismiss();
            }
            else{
              var error = this.alertCtrl.create({
                title: 'Aviso',
                message:"Registro no valido.",
                buttons: ['Entendido']
              });
              error.present();
              loading.dismiss();
            }
          });           
        }
        else{
          var url = 'http://138.68.48.252:3000/Api/users/check_in';
          let pass=Md5.init(this.data.value.password);
          let loading = this.loadingCtrl.create({
            content: 'Cargando...'
          });
          loading.present();
          let body=JSON.stringify({nombre:this.data.value.nombre,apellido:this.data.value.apellido,correo:this.data.value.correo,pass:pass,verificado:false});
          this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
            if(res['state']===true){
              var correct = this.alertCtrl.create({
                title: 'Aviso',
                message:"Exito al registrarse,porfavor vea su correo para su verificación.",
                buttons: ['Entendido']
              });
              correct.present();
              loading.dismiss();
              let currentIndex = this.navCtrl.getActive().index;
              this.navCtrl.push(LoginPage).then(() => {
                  this.navCtrl.remove(currentIndex);
              });
            }
            else if(res['state']===false){
              var error = this.alertCtrl.create({
                title: 'Aviso',
                message:"Fallo al registrarse,intentelo más tarde.",
                buttons: ['Entendido']
              });
              error.present();
              loading.dismiss();
            }
            else if(res['state']==='exist'){
              var error = this.alertCtrl.create({
                title: 'Aviso',
                message:"Mail en uso, porfavor cambie de mail e intentelo de nuevo.",
                buttons: ['Entendido']
              });
              error.present();
              loading.dismiss();
            }
            else{
              var error = this.alertCtrl.create({
                title: 'Aviso',
                message:"Registro no valido.",
                buttons: ['Entendido']
              });
              error.present();
              loading.dismiss();
            }
          });
        }
      }
      else{
        var error = this.alertCtrl.create({
          title: 'Aviso',
          message:"Las contraseñas no coinciden",
          buttons: ['Entendido']
        });
        error.present();
      }
    }
    else{
      let error = this.alertCtrl.create({
        title: 'Advertencia',
        message:" Por favor llena todo los campos",
        buttons: ['Entendido']
      });
      error.present(); 
    } 
  }
  message(idM){
    if(idM==1){
      const message = this.toastCtrl.create({
        message: 'Escriba su nombre o uno de los dos nombres solamente.',
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
        message: 'Escriba sus apellidos de máximo 25 letras',
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
        message: 'Escriba su correo el @ es olbigatorio.',
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
        message: 'Contraseña de 8 a 18 números o letras.',
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
        message: 'Escriba la misma contraseña anteriormente puesta.',
        duration: 2000,
        position:'top',
      });
      message.present().then(() => {
        const inputElement = this.elementRef.nativeElement.getElementsByTagName('input')[4];
        inputElement.focus();
      });
    } 
  }
  rMail(){
    this.googlePlus.login({}).then(res => {
      this.user=res;
      this.correo=res.email;
      this.getData();
    }).catch(err => console.error(err));
  }
  getData(){
    this.http.get('https://www.googleapis.com/plus/v1/people/me?access_token='+this.user.accessToken).subscribe((data:any)=>{
       this.nombre=data.name.givenName;
       this.apellido=data.name.familyName;
       this.type_check=1;
    });
  }
  fbL(){
    
  }

}
