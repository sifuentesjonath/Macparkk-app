import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//imports pages
import { LoginPage } from '../../pages/login/login';
import { RegistrarsePage } from '../../pages/registrarse/registrarse';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
  }
  iniciar(){
    let currentIndex = this.navCtrl.getActive().index;
    this.navCtrl.push(LoginPage).then(() => {
        //this.navCtrl.remove(currentIndex);
    });
  }
  registrar(){
    let currentIndex = this.navCtrl.getActive().index;
    this.navCtrl.push(RegistrarsePage).then(() => {
        //this.navCtrl.remove(currentIndex);
    });
  }
  iniciarE(){
  }
  pensiones(){
  }

}
