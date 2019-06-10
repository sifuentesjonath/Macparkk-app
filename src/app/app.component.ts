import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

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

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  //Linque del Menú Toggle
  openPage(x) {
    this.nav.setRoot(this.pages[x].component);
  }
}
