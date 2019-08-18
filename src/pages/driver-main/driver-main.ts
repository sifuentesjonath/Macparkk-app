import { Component,ElementRef} from '@angular/core';
import { IonicPage,NavController,NavParams,ToastController,LoadingController,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';//Manejo de cache
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';//conexión
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
@IonicPage()
@Component({
  selector: 'page-driver-main',
  templateUrl: 'driver-main.html',
})
export class DriverMainPage {
  orders:Object=[];
  data_transport:any=[{}];
  data_driver:Object=[{}];
  cantidad:any='';
  id_client:String=null;
  messages = [];
  //data_state:Boolean=false;
  constructor(private socket:Socket,private alertCtrl:AlertController,private loadingCtrl:LoadingController,private http: HttpClient,private toastCtrl:ToastController,private elementRef:ElementRef,private fb: FormBuilder,private storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    storage.get('confirmed').then((res_confirmed) => {
      storage.get('client_n').then((res_nombre) => {
        storage.get('client_sur').then((res_apellido) => {
          storage.get('order_clients').then((res_orders)=>{
            storage.get('driver-transport').then((res_transport)=>{
              if(res_confirmed.leght!=0&&res_nombre.leght!=0&&res_apellido.leght!=0){
                if(res_confirmed!=null&&res_nombre!=null&&res_apellido!=null){
                  if(res_transport==null||res_transport.leght==0){
                    this.data_driver=[{nombre:res_nombre,apellido:res_apellido,ticket:'drivers-00'}];
                    this.socket.disconnect();
                    const error = this.alertCtrl.create({
                      title: 'Advertencia',
                      message:"Registre primero su transporte.",
                      buttons: ['Entendido']
                    });
                    error.present();
                    //this.socket.emit('subscribe','drivers-00');
                    //this.getMessages(0);
                  }
                  else if(res_transport!=null||res_transport.leght!=0){
                    this.data_driver=[{nombre:res_nombre,apellido:res_apellido,ticket:'drivers-00'}];
                    const driver_transport=JSON.parse(res_transport);
                    this.data_transport=[{
                      model:driver_transport[0].model,plates:driver_transport[0].plates,
                      year:driver_transport[0].year,color:driver_transport[0].color,phone:driver_transport[0].phone
                    }];
                    if(res_orders==null||res_orders.leght==0){
                      const message = this.toastCtrl.create({
                        message: 'Espere a una nueva petición de transporte.',
                        duration: 2000,
                        position:'top',
                      });
                      message.present();
                    }
                    else{
                      const orders=JSON.parse(res_orders);
                      this.orders=orders;
                    }
                    this.socket.connect();
                    this.socket.emit('subscribe','drivers-00');
                    this.getMessages();
                  }
                }
                else{
                }
              }
              else{
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
  ionViewWillLeave() {
    this.socket.disconnect();
  }
  getFinish(){
    this.socket.on('res_finish', (data) => {
      if(data.state==="Finalizado"){
        this.orders=[];
        this.storage.set('order_clients',null);
        const correct = this.alertCtrl.create({
          title: 'Excelente',
          message:"Viaje Finalizado.",
          buttons: ['Entendido']
        });
        correct.present();
        return;
      }
      else if(data.state==="No Finalizado"){
        const error = this.alertCtrl.create({
          title: 'Aviso',
          message:"Viaje NO finalizado.",
          buttons: ['Entendido']
        });
        error.present();
        return;
      }
    });
  } 
  getMessages() {
    this.storage.get('order_clients').then((res_orders) => {
      this.socket.on('consult-ask', (data) => {
        if(data.state!="added"){
            const confirm = this.alertCtrl.create({
              title:'Nuevo cliente',
              message:data.name,
              buttons: [
                {
                  text:'Cancelar',
                  handler: () => {
                    return;
                  }
                },
                {
                  text: 'Aceptar',
                  handler: () => {
                    this.take(data.from);
                    var items;
                    var date=new Date();
                    var year=date.getFullYear().toString();
                    var month=(date.getMonth() + 1).toString();
                    var day=date.getDate().toString();
                    var hr=date.getHours().toString();
                    var min=date.getMinutes().toString();
                    if(parseInt(month)<10){
                      if(parseInt(min)<10){
                        if(!res_orders){
                          this.storage.set('order_clients',JSON.stringify([{name:data.name,id_client:data.from,date:year+'-0'+month+'-'+day+' '+hr+':0'+min}]));
                          this.orders=[{name:data.name,id_client:data.from,date:year+'-0'+month+'-'+day+' '+hr+':0'+min}];
                        }
                        else{
                          items=JSON.parse((res_orders));
                          items.push({name:data.name,id_client:data.from,date:year+'-0'+month+'-'+day+' '+hr+':0'+min});
                          this.storage.set('order_clients',JSON.stringify(items));
                          this.orders=items;
                        }
                      }
                      else{
                        if(!res_orders){
                          this.storage.set('order_clients',JSON.stringify([{name:data.name,id_client:data.from,date:year+'-0'+month+'-'+day+' '+hr+':'+min}]));
                          this.orders=[{name:data.name,id_client:data.from,date:year+'-0'+month+'-'+day+' '+hr+':'+min}];
                        }
                        else{
                          items=JSON.parse((res_orders));
                          items.push({name:data.name,id_client:data.from,date:year+'-0'+month+'-'+day+' '+hr+':'+min});
                          this.storage.set('order_clients',JSON.stringify(items));
                          this.orders=items;
                        }
                      }
                    }
                    else{
                      if(parseInt(min)<10){
                        if(!res_orders){
                          this.storage.set('order_clients',JSON.stringify([{name:data.name,id_client:data.from,date:year+'-'+month+'-'+day+' '+hr+':0'+min}]));
                          this.orders=[{name:data.name,id_client:data.from,date:year+'-'+month+'-'+day+' '+hr+':0'+min}];
                        }
                        else{
                          items=JSON.parse((res_orders));
                          items.push({name:data.name,id_client:data.from,date:year+'-'+month+'-'+day+' '+hr+':0'+min});
                          this.storage.set('order_clients',JSON.stringify(items));
                          this.orders=items;
                        }
                      }
                      else{
                        if(!res_orders){
                          this.storage.set('order_clients',JSON.stringify([{name:data.name,id_client:data.from,date:year+'-'+month+'-'+day+' '+hr+':'+min}]));
                          this.orders=[{name:data.name,id_client:data.from,date:year+'-'+month+'-'+day+' '+hr+':'+min}];
                        }
                        else{
                          items=JSON.parse((res_orders));
                          items.push({name:data.name,id_client:data.from,date:year+'-'+month+'-'+day+' '+hr+':'+min});
                          this.storage.set('order_clients',JSON.stringify(items));
                          this.orders=items;
                        }
                      }
                    }
                    return;
                  }
                }
              ]
            });
            confirm.present();
        }
        return;
      });
      return;
    }); 
  }
  take(id){
    //this.getMessages();
    this.socket.emit('driver-response',{driver:this.data_driver[0].nombre+' '+this.data_driver[0].apellido,id:id,
      plates:this.data_transport[0].plates,model:this.data_transport[0].model,year:this.data_transport[0].year,
      color:this.data_transport[0].color,tel:this.data_transport[0].phone
    });
  }
  finish_him(){
    if(this.orders!=null&&this.orders!=[]&&this.orders!=[{}],this.orders!=''){
      const loading = this.loadingCtrl.create({
        content: 'Procesando...'
      });
      loading.present();
      this.getFinish();
      this.socket.emit('driver-finish-response',{driver:this.data_driver[0].nombre+' '+this.data_driver[0].apellido});
      loading.dismiss();
    }
    else{
      const error = this.alertCtrl.create({
        title: 'Aviso',
        message:"No hay viajes que finalizar.",
        buttons: ['Entendido']
      });
      error.present();
    }
  }

}
