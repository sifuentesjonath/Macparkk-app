import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad InicioPage');
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
