import { Component, ViewChild } from '@angular/core';
import {Nav,NavController,Platform, App} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';//Manejo de cache
//imports pages
import { HomePage  } from '../pages/home/home';
import { ListPage  } from '../pages/list/list';
//import { LoginPage } from '../pages/login/login';
import { PerfilEPage}from '../pages/perfil-e/perfil-e';
import { InicioPage} from '../pages/inicio/inicio';
import { RecibosMPage     }from '../pages/recibos-m/recibos-m';
import { FacturacionMPage } from '../pages/facturacion-m/facturacion-m';
import { AyudaMPage} from '../pages/ayuda-m/ayuda-m';
import { TerminosCPage}   from '../pages/terminos-c/terminos-c';
import { AvisoPPage}      from '../pages/aviso-p/aviso-p';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any;

  pages: Array<{title: string, component: any}>;
  constructor(private storage:Storage,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    //this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Perfil', component:PerfilEPage},
      { title: 'Inicio', component:InicioPage },
      { title: 'Recibos', component: RecibosMPage },
      { title: 'Facturación', component:FacturacionMPage },
      { title: 'Ayuda', component: AyudaMPage },
      { title: 'Terminos y Condiciones', component:TerminosCPage },
      { title: 'Aviso de Privacidad',    component:AvisoPPage }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      //splashScreen.hide();
      storage.get('confirmed').then((res_confirmed) => {
        storage.get('client_name').then((res_name) => {
        storage.get('client_privilege').then((res_privilege) => {       
          if(res_confirmed!=null){
            if(res_privilege!=null){
              if(res_privilege==0){
                this.rootPage=InicioPage;
                splashScreen.hide(); 
              }
              else if(res_privilege==1){
                this.rootPage=MainPage;
                splashScreen.hide(); 
              }  
            }
            else{
                this.rootPage=LoginPage;
                splashScreen.hide();     
              }
            }
            else{
              this.rootPage=HomePage;
              splashScreen.hide(); 
            }
          });
          }); 
        });
    });
  }

  /*initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }*/
  //Linque del Menú Toggle
  openPage(x) {
    if(x===7){
      this.storage.clear();
      this.nav.setRoot(HomePage);
    }
    else{
      this.nav.setRoot(this.pages[x].component);
    }
  }
}
