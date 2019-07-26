import { Component,ElementRef } from '@angular/core';
import { IonicPage, NavController,NavParams,ToastController,LoadingController,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';//Manejo de cache
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';//conexión
import { AES256 } from '@ionic-native/aes-256';
declare var OpenPay: any;
@IonicPage()
@Component({
  selector: 'page-reservacion-b',
  templateUrl: 'reservacion-b.html',
})
export class ReservacionBPage {
  private data: FormGroup;
  //private secureKey:string=null;
  //private secureIV:string=null;
  date_e:any=[];  
  checkin:any=null;
  checkout:any=null;
  one_day:any=86400000;
  one_hour:any=3600000;
  spanTotal:any=null;
  inTotal:any=null;
  spanRestante:any=null;
  reserva:any='109.00';
  estancia:any=[];
  data_client:Object=[];
  data_car:Object=[];
  conten:Boolean=false;
  constructor(private aes256: AES256,private alertCtrl:AlertController,private loadingCtrl:LoadingController,private http: HttpClient,private toastCtrl:ToastController,private elementRef:ElementRef,private fb: FormBuilder,private storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.fb.group({
      fechE: ['', [Validators.required]],
      hrE: ['', [Validators.required]],
      fechS: ['', [Validators.required]],
      hrS: ['', [Validators.required]],
      check_y:[true],
      check_no:[false],
    });
    storage.get('confirmed').then((res_confirmed) => {
      storage.get('client_n').then((res_nombre) => {
        storage.get('client_sur').then((res_apellido) => {
          storage.get('virtual_ticket').then((res_token_id)=>{
            storage.get('car_data').then((res_car_data)=>{
              if(res_confirmed.leght!=0&&res_nombre.leght!=0&&res_apellido.leght!=0&&res_token_id.leght!=0){
                if(res_confirmed!=null&&res_nombre!=null&&res_apellido!=null&&res_token_id!=null){
                  if(res_car_data==null||res_car_data.leght==0){
                    const loading = this.loadingCtrl.create({
                      content: 'Cargando...'
                    });
                    loading.present();
                    var url = 'http://138.68.48.252:3000/Api/users/consult_ticket';
                    let body=JSON.stringify({nombre:res_nombre,correo:res_confirmed,id:res_confirmed});
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
                        this.data_car=[res['placas'],res['modelo'],res['año'],res['color'],res['tel']];
                        this.data_client=[res_confirmed,res_nombre,res_apellido,res_token_id];
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
                    var car_data=JSON.parse(res_car_data);
                    this.data_car=[car_data[0].placas,car_data[0].modelo,car_data[0].año,car_data[0].color,car_data[0].tel];
                    this.data_client=[res_confirmed,res_nombre,res_apellido,res_token_id];
                  }
                }
                else{
                  this.conten=true;
                }
              }
              else{
                this.conten=true;
              }
            });
          });
        });
      });
    });
  }

 //Metodos
 async ionViewCanEnter(){
  //this.secureKey = await this.aes256.generateSecureKey('?FIAL%AV&I°m@724Kg5tX7IZ09!542G1');
  //this.secureIV = await this.aes256.generateSecureIV('?FIAL%AV&I°m@724');
 }
 calculate(){
  var date=this.data.value.fechE.split("-");
  var date_hr=this.data.value.hrE.split(":");
  var date_s=this.data.value.fechS.split("-");
  var date_hr_s=this.data.value.hrS.split(":");
  this.date_e=[date_hr[0],date_hr[1]];
  //List of prices.
  var prices = [
    0, 109, 218, 327, 436, 545, 600, 
    600, 709, 818, 927, 1036, 1150
  ];
  //List of the cost for extra hours.
  var extra = [0, 11, 22, 33, 44, 55, 66, 77, 88,99];
  this.checkin = new Date(date+' '+date_hr[0]+':'+date_hr[1]);
  this.checkout = new Date(date_s+' '+date_hr_s[0]+':'+date_hr_s[1]);
  var difference_ms=this.checkout-this.checkin;
  var estancia = Math.round(difference_ms/this.one_day);
  var estanciaHoras = Math.ceil(difference_ms/this.one_hour);
  var horasExtra = estanciaHoras - (estancia*24);
  if(estancia > 11){
    this.spanTotal=(prices[12]) + ".00";
    this.inTotal=(prices[12]) + ".00";
    this.spanRestante=(prices[12] - prices[1]) + ".00";
  }
  else{
      if(horasExtra > 0 && horasExtra < 10){
        this.spanTotal=(prices[estancia] + extra[horasExtra]) + ".00";
        this.inTotal=(prices[estancia] + extra[horasExtra]) + ".00";
        this.spanRestante=(prices[estancia] - prices[1]) + ".00";
      }
      if(horasExtra>= 5 && estancia == 5 || estancia==6 || estancia==7 && horasExtra < 1  ){
        this.spanTotal="600" + ".00";
        this.inTotal="600" + ".00";
        this.spanRestante=(prices[estancia] - prices[1]) + ".00";
      }
      if(horasExtra > 9){
        this.spanTotal=(prices[estancia + 1]) + ".00";
        this.inTotal=(prices[estancia + 1]) + ".00";
        this.spanRestante=(prices[estancia] - prices[1]) + ".00";
      }
      if(horasExtra < 1){
        this.spanTotal=(prices[estancia]) + ".00";
        this.inTotal=(prices[estancia]) + ".00";
        this.spanRestante=(prices[estancia] - prices[1]) + ".00";
      }
  }
  /*console.log(this.date_e);
  console.log(this.checkin);
  console.log(this.checkout);
  console.log(difference_ms);
  console.log(estancia);
  console.log(estanciaHoras);
  console.log(horasExtra);
  console.log(this.spanTotal);
  console.log(this.inTotal);
  console.log(this.spanRestante);*/
  this.estancia=[estancia,estanciaHoras,horasExtra];
  if(this.spanRestante<0){
    this.spanRestante="0.00";
  }
  return true;
 }
 Save(){
    if(this.inTotal>=109.00){
      if(this.data.value.check_y==true&&this.data.value.check_no==false||this.data.value.check_y==false&&this.data.value.check_no==true){
        this.storage.get('info_card').then((res_card) => { 
          if(res_card==null||res_card==''||res_card.leght==0){
            const prompt = this.alertCtrl.create({
              title: 'Pago por Tarjeta',
              message: 'Ingrese su información:',
              inputs: [
                {
                  name: 'holderName',
                  placeholder: 'Nombre completo',
                  type:"text"
                },
                {
                  name: 'NoT',
                  placeholder: 'No.Tarjeta',
                  type:"tel"
                },
                {
                  name: 'exyear',
                  placeholder: 'año de vencimiento AA',
                  type:"tel"
        
                },
                {
                  name: 'exmonth',
                  placeholder: 'mes de vencimiento MM',
                  type:"tel"
        
                },
                {
                  name: 'cvv2',
                  placeholder: 'CVV',
                  type:"tel"
                },     
              ],
              buttons: [
                {
                  text: 'Cancel',
                  handler: data => {
                    //console.log(data);
                  }
                },
                {
                  text: 'Guardar y continuar',
                  handler: data => {
                    OpenPay.setId('mxr5cuiz4h15togw5xyw');
                    OpenPay.setApiKey('pk_04b526e095b44b06b8c817939ab78bf6');
                    OpenPay.setSandboxMode(true);
                    var deviceSessionId = OpenPay.deviceData.setup("formId","deviceIdHiddenFieldName");
                    if(OpenPay.card.validateCardNumber(data.NoT)==true){
                      if(OpenPay.card.validateCVC(data.cvv2,data.NoT)==true){
                        if(OpenPay.card.validateExpiry(data.exmonth,data.exyear)){
                          const loading = this.loadingCtrl.create({
                            spinner:'hide',
                            content: '<img src="assets/imgs/logo_openpay.png"/><br><br><br><div><h5>Pagando <img  width="50" height="13" src="assets/imgs/load.gif"/></h5></div>'
                          });
                          loading.present();
                          OpenPay.token.create({
                            "card_number":data.NoT,
                            "holder_name":data.holderName,
                            "expiration_year":data.exyear,
                            "expiration_month":data.exmonth,
                            "cvv2":data.cvv2,
                          },
                          sucess_callbak=>{
                            console.log(sucess_callbak);
                            const url = 'http://138.68.48.252:3000/Api/users/reservations';
                            const body=JSON.stringify({mail:this.data_client[0],nombre:data.holderName,ticket:this.data_client[3],
                              fecha:this.data.value.fechE,fecha_h:this.data.value.hrE,fecha_s:this.data.value.fechS,fecha_sh:this.data.value.hrS,
                              costo:this.inTotal,reservar:this.reserva,token_id:sucess_callbak.data.id,restante:this.spanRestante,limpiar:this.data.value.check_y,
                              session_id:deviceSessionId,estancia:this.estancia[0],estanciaHoras:this.estancia[1],horasExtra:this.estancia[2],
                              placas:this.data_car[0],modelo:this.data_car[1],año:this.data_car[2],color:this.data_car[3],tel:this.data_car[4]});
                            this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
                              if(res['state']===false){
                                var error = this.alertCtrl.create({
                                  title: 'Aviso',
                                  message:"Ocurrió un problema al intentar hacer el pago.",
                                  buttons: ['Entendido']
                                });
                                error.present();
                                loading.dismiss();
                              }
                              else if(res['state']===true){
                                this.storage.set('info_card',JSON.stringify([{
                                  card_number:data.NoT,
                                  holder_name:data.holderName,
                                  expiration_year:data.exyear,
                                  expiration_month:data.exmonth,
                                  cvv2:data.cvv2,
                                }]));
                                var correct = this.alertCtrl.create({
                                    title: 'Perfecto',
                                    message:"Se le enviará un correo con los datos de la reservación.",
                                    buttons: ['Entendido']
                                });
                                correct.present();
                                loading.dismiss();
                              }
                              else if(res['state']==='exist'){
                                var correct = this.alertCtrl.create({
                                    title: 'Avertencia',
                                    message:"Reservación ya hecha.",
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

                          },
                          error_callbak=>{
                            const error = this.alertCtrl.create({
                              title: 'Alerta',
                              message:"Datos erroneos.",
                              buttons: ['Entendido']
                            });
                            error.present();
                            loading.dismiss();
                          });
                        }
                        else{
                          const error = this.alertCtrl.create({
                            title: 'Error',
                            message:'Fecha no valida.',
                            buttons: ['Entendido']
                          });
                          error.present();
                        }
                      }
                      else{
                        const error = this.alertCtrl.create({
                          title: 'Error',
                          message:'Tu número de seguridad no es valido.',
                          buttons: ['Entendido']
                        });
                        error.present();
                      }
                    }
                    else{
                      const error = this.alertCtrl.create({
                        title: 'Error',
                        message:'El número de tarjeta no valida.',
                        buttons: ['Entendido']
                      });
                      error.present();
                    }
                  }
                }
              ]
            });
            prompt.present();
          }
          else{
            const card=JSON.parse(res_card);
            OpenPay.setId('mxr5cuiz4h15togw5xyw');
            OpenPay.setApiKey('pk_04b526e095b44b06b8c817939ab78bf6');
            OpenPay.setSandboxMode(true);
            var deviceSessionId = OpenPay.deviceData.setup("formId","deviceIdHiddenFieldName");
            if(OpenPay.card.validateCardNumber(card[0].card_number)==true){
              if(OpenPay.card.validateCVC(card[0].cvv2,card[0].card_number)==true){
                if(OpenPay.card.validateExpiry(card[0].exmonth,card[0].exyear)){
                  const loading = this.loadingCtrl.create({
                    spinner:'hide',
                    content: '<img src="assets/imgs/logo_openpay.png"/><br><br><br><div><h5>Pagando <img  width="50" height="13" src="assets/imgs/load.gif"/></h5></div>'
                  });
                  loading.present();
                  OpenPay.token.create({
                    "card_number":card[0].card_number,
                    "holder_name":card[0].holderName,
                    "expiration_year":card[0].exyear,
                    "expiration_month":card[0].exmonth,
                    "cvv2":card[0].cvv2,
                  },
                  sucess_callbak=>{
                    const url = 'http://138.68.48.252:3000/Api/users/reservations';
                    const body=JSON.stringify({mail:this.data_client[0],nombre:card[0].holderName,ticket:this.data_client[3],
                      fecha:this.data.value.fechE,fecha_h:this.data.value.hrE,fecha_s:this.data.value.fechS,fecha_sh:this.data.value.hrS,
                      costo:this.inTotal,reservar:this.reserva,token_id:sucess_callbak.data.id,restante:this.spanRestante,limpiar:this.data.value.check_y,
                      session_id:deviceSessionId,estancia:this.estancia[0],estanciaHoras:this.estancia[1],horasExtra:this.estancia[2],
                      placas:this.data_car[0],modelo:this.data_car[1],año:this.data_car[2],color:this.data_car[3],tel:this.data_car[4]});
                    this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
                      if(res['state']===false){
                        var error = this.alertCtrl.create({
                          title: 'Aviso',
                          message:"Ocurrió un problema al intentar hacer el pago.",
                          buttons: ['Entendido']
                        });
                        error.present();
                        loading.dismiss();
                      }
                      else if(res['state']===true){
                        var correct = this.alertCtrl.create({
                            title: 'Perfecto',
                            message:"Se le enviará un correo con los datos de la reservación.",
                            buttons: ['Entendido']
                        });
                        correct.present();
                        loading.dismiss();
                      }
                      else if(res['state']==='exist'){
                        var correct = this.alertCtrl.create({
                            title: 'Avertencia',
                            message:"Reservación ya hecha.",
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

                  },
                  error_callbak=>{
                    const error = this.alertCtrl.create({
                      title: 'Alerta',
                      message:"Datos erroneos.",
                      buttons: ['Entendido']
                    });
                    error.present();
                    loading.dismiss();
                  });
                }
                else{
                  const error = this.alertCtrl.create({
                    title: 'Error',
                    message:'Fecha no valida.',
                    buttons: ['Entendido']
                  });
                  error.present();
                }
              }
              else{
                const error = this.alertCtrl.create({
                  title: 'Error',
                  message:'Tu número de seguridad no es valido.',
                  buttons: ['Entendido']
                });
                error.present();
              }
            }
            else{
              const error = this.alertCtrl.create({
                title: 'Error',
                message:'El número de tarjeta no valida.',
                buttons: ['Entendido']
              });
              error.present();
            }
          }
        });
    }
    else if(this.data.value.check_y==false&&this.data.value.check_no==false){
      const error = this.alertCtrl.create({
        title: 'Alerta',
        message:"Seleccione Si o No para el lavado de su auto.",
        buttons: ['Entendido']
      });
      error.present();
    }
    else{
      const error = this.alertCtrl.create({
        title: 'Alerta',
        message:"Solo puede seleccionar uno.",
        buttons: ['Entendido']
      });
       error.present();
    }
  }
  else{
    const error = this.alertCtrl.create({
      title: 'Alerta',
      message:"Estancia mínima de 10 hrs",
      buttons: ['Entendido']
    });
    error.present();
  } 
 }
}
