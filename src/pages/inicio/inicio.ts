import { Component } from '@angular/core';
import { IonicPage,NavController,NavParams,MenuController} from 'ionic-angular';
import { Storage } from '@ionic/storage';//Manejo de cache
//imports pages
import { RegistrarBPage}  from  '../registrar-b/registrar-b';
import { ReservacionBPage}from '../reservacion-b/reservacion-b';
import { BoletoVPage}     from '../boleto-v/boleto-v';
import { RegistroUPage}   from '../registro-u/registro-u';
import { PromocionesPage} from '../promociones/promociones';
import { PedirTPage}      from '../pedir-t/pedir-t';
@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  btnShow:boolean;
  brnHidden:boolean;
  constructor(private storage:Storage,private menu:MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.menu.enable(true);
    storage.get('first_t').then((res_first) => {
      if(res_first!=null&&res_first.leght!=0){
        if(res_first==true){
          this.btnShow=false;
          this.brnHidden=true;
        }
        else if(res_first==false){
          this.btnShow=true;
          this.brnHidden=false;
        }
      }
    });
  }

  //Metodos
  ionViewCanEnter(){
  }
  rBoleto(){
    //let currentIndex = this.navCtrl.getActive().index;
    this.navCtrl.push(RegistrarBPage).then(() => {
        //this.navCtrl.remove(currentIndex);
    });
  }
  reserv(){
    this.navCtrl.push(ReservacionBPage).then(() => {
      //this.navCtrl.remove(currentIndex);
    });
  }
  boletoV(){
    //let currentIndex = this.navCtrl.getActive().index;
    this.navCtrl.push(BoletoVPage).then(() => {
        //this.navCtrl.remove(currentIndex);
    });
  }
  UpdaR(){
    this.navCtrl.push(RegistroUPage).then(() => {
      //this.navCtrl.remove(currentIndex);
    });
  }
  promo(){
    this.navCtrl.push(PromocionesPage).then(() => {
      //this.navCtrl.remove(currentIndex);
    });
  }
  pedirT(){
    this.navCtrl.push(PedirTPage).then(() => {
      //this.navCtrl.remove(currentIndex);
    });
  }

}
