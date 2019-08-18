import { Component,ElementRef} from '@angular/core';
import { IonicPage, NavController,NavParams,ToastController,LoadingController,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';//Manejo de cache
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';//conexión
import { Socket } from 'ng-socket-io';
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
  messages = [];
  message = '';
  min:any=15;
  seg:any='00';
  progress:any=100;
  data_state:Boolean=false;
  constructor(private socket:Socket,private alertCtrl:AlertController,private loadingCtrl:LoadingController,private http: HttpClient,private toastCtrl:ToastController,private elementRef:ElementRef,private fb: FormBuilder,private storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    storage.get('confirmed').then((res_confirmed) => {
      storage.get('client_n').then((res_nombre) => {
        storage.get('client_sur').then((res_apellido) => {
          storage.get('virtual_ticket').then((res_token_id)=>{
            storage.get('ask_transport').then((res_transport)=>{
              storage.get('timer').then((res_timer)=>{
                if(res_confirmed.leght!=0&&res_nombre.leght!=0&&res_apellido.leght!=0&&res_token_id.leght!=0){
                  if(res_confirmed!=null&&res_nombre!=null&&res_apellido!=null&&res_token_id!=null){
                    if(res_transport==null||res_transport.leght==0){
                      this.btn_h=false;
                      this.data_client=[{nombre:res_nombre,apellido:res_apellido,ticket:res_token_id}];
                      this.socket.connect();
                      this.socket.emit('subscribe',res_token_id);
                      this.getMessages(0);
                      /*this.getMessages(0).subscribe(message => {
                        this.messages.push(message);
                      });*/
                    }
                    else if(res_transport!=null||res_transport.leght!=0){
                      this.data_client=[{nombre:res_nombre,apellido:res_apellido,ticket:res_token_id}];
                      const ask_transport=JSON.parse(res_transport);
                      this.data_transport=[{
                        chofer:ask_transport[0].chofer,model:ask_transport[0].model,plates:ask_transport[0].plates,
                        year:ask_transport[0].year,color:ask_transport[0].color,phone:ask_transport[0].tel,state:ask_transport[0].state
                      }];
                      this.get_ask(res_token_id,res_timer);
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
    });
  }
  //Metodos
  ionViewCanEnter(){
  }
  Timer(s){
    setTimeout(()=>{
      if(parseInt(this.min)===0&&parseInt(this.seg)===0){
        this.min='00';
        this.seg='00';
        return;
      }
      else if(parseInt(this.min)<=10&&parseInt(this.min)>0){
        if(parseInt(this.seg)<=10&&parseInt(this.seg)>0){
          s=parseInt(s)-1;
          this.seg="0"+JSON.stringify(parseInt(this.seg)-1);
          this.progress_cal();
          this.Timer(s);
        }
        else{
          s=parseInt(s)-1;
          if(parseInt(this.seg)==0){
            this.min="0"+JSON.stringify(parseInt(this.min)-1);
            this.seg=59;
            this.progress_cal();
            this.Timer(s);
          }
          else{
            this.seg=parseInt(this.seg)-1;
            this.progress_cal();
            this.Timer(s);
          }
        }
      }
      else{
        if(parseInt(this.seg)<=10&&parseInt(this.seg)>0){
          s=parseInt(s)-1;
          this.seg='0'+JSON.stringify(parseInt(this.seg)-1);
          this.progress_cal();
          this.Timer(s);
        }
        else{
          s=parseInt(s)-1;
          if(parseInt(this.seg)==0){
            this.min=parseInt(this.min)-1;
            this.seg=59;
            this.progress_cal();
            this.Timer(s);
          }
          else{
            this.seg=parseInt(this.seg)-1;
            this.progress_cal();
            this.Timer(s);
          }
        }
      }
    },1000);
  }
  progress_cal(){
    var val=parseFloat(JSON.stringify(((parseFloat(this.min+'.'+this.seg)*60)*100)/900));
    if(val<=1&&val>0){
      this.progress=1;
    }
    else if(val===0){
      this.progress=0;
    }
    else{
      this.progress=parseInt(JSON.stringify(((parseFloat(this.min+'.'+this.seg)*60)*100)/900));
    }
    return;
  }
  change_img(){
    this.img_driver='assets/imgs/perfil.png';
  }
  ionViewWillLeave() {
    this.socket.disconnect();
    this.storage.set('timer',[this.min,this.seg]);
  } 
  getMessages(x) {
    if(x===0){
      this.socket.on('consult-ask', (data) => {
        //console.log(data);
      });
      return 0;
    }
    if(x===1){
      const loading = this.loadingCtrl.create({
        content: 'Buscando...'
      });
      loading.present();
        this.socket.on('message',(data) => {
          if(data.state===false){
            this.data_state=true;
            const error = this.alertCtrl.create({
              title: 'Aviso',
              message:"Petición de transporte no admitida,reservación previamente no hecha.",
              buttons: ['Entendido']
            });
            error.present();
            loading.dismiss();
          }
          else if(data.state===true){
            this.storage.set('ask_transport',JSON.stringify([{chofer:data.chofer,plates:data.placas,model:data.modelo,year:data.año,color:data.color,tel:data.tel}]));
            this.data_transport=[{chofer:data.chofer,plates:data.placas,model:data.modelo,year:data.año,color:data.color,tel:data.tel}];
            this.input_h=false;
            this.btn_h=true;
            this.data_state=true;
            this.img_driver='assets/imgs/logo.png';
            var correct = this.alertCtrl.create({
              title: 'Perfecto',
              message:"Petición de transporte hecha.",
              buttons: ['Entendido']
            });
            correct.present();
            loading.dismiss();
            this.Timer(60);
          }
          else if(data.state==='exist'){
            this.data_state=true;
            const error = this.alertCtrl.create({
              title: 'Advertencia',
              message:"Petición de transporte ya en curso.",
              buttons: ['Entendido']
            });
            error.present();
            loading.dismiss();
          }
        });
        if(this.data_state===false){
          return 0;
        }
        else{
          this.data_state=false;         
          loading.dismiss();
          return 0;
        }
    }   
  } 
  /*showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }*/
  ask(){
    this.getMessages(1);
    this.socket.emit('ask',{nombre:this.data_client[0].nombre+' '+this.data_client[0].apellido,id:this.data_client[0].ticket});
    this.message = '';
  }
  get_ask(res_token_id,res_timer){
    const loading = this.loadingCtrl.create({
      content: 'Comprobando disponibildad...'
    });
    loading.present();
    const url = 'http://138.68.48.252:3000/Api/users/consult_ask_transport';
    const body=JSON.stringify({id:res_token_id});
    this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
      if(res['state']===false){
        this.storage.set('ask_transport',null);
        this.data_transport=[{}];
        loading.dismiss();      
        this.socket.connect();
        this.socket.emit('subscribe',res_token_id);
      }
      else if(res['state']===true){
        var correct = this.alertCtrl.create({
          title: 'Perfecto',
          message:"Petición de transporte ya en curso.",
          buttons: ['Entendido']
        });
        correct.present();
        this.img_driver='assets/imgs/logo.png';
        this.input_h=false;
        this.btn_h=true;
        loading.dismiss();      
        this.socket.connect();
        this.socket.emit('subscribe',res_token_id);
        this.getMessages(0);
        if(res_timer==null){
          this.Timer(60);
        }
        else{
          this.min=res_timer[0];
          this.seg=res_timer[1];
          this.progress=parseInt(JSON.stringify(((parseFloat(this.min+'.'+this.seg)*60)*100)/900));
          this.Timer(this.seg);
        }
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
