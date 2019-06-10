import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 
import { HttpClientModule } from '@angular/common/http';
//imports de biblotecas especiales
import { IonicStorageModule } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { FileTransfer} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
//imports page
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { ResPasswordPage } from '../pages/res-password/res-password';
import { InicioPage} from '../pages/inicio/inicio';
import { RecibosMPage     }from '../pages/recibos-m/recibos-m';
import { FacturacionMPage } from '../pages/facturacion-m/facturacion-m';
import { AyudaMPage} from '../pages/ayuda-m/ayuda-m';
import { PerfilEPage}from '../pages/perfil-e/perfil-e';
import { TerminosCPage}   from '../pages/terminos-c/terminos-c';
import { AvisoPPage}      from '../pages/aviso-p/aviso-p';
//imports pages buttons menu
import { RegistrarBPage}  from  '../pages/registrar-b/registrar-b';
import { ReservacionBPage}from '../pages/reservacion-b/reservacion-b';
import { BoletoVPage}     from '../pages/boleto-v/boleto-v';
import { RegistroUPage}   from '../pages/registro-u/registro-u';
import { PromocionesPage} from '../pages/promociones/promociones';
import { PedirTPage}      from '../pages/pedir-t/pedir-t';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegistrarsePage,
    ResPasswordPage,
    PerfilEPage,
    InicioPage,
    RecibosMPage,
    FacturacionMPage,
    AyudaMPage,
    RegistrarBPage,
    ReservacionBPage,
    BoletoVPage,
    RegistroUPage,
    PromocionesPage,
    PedirTPage,
    TerminosCPage,
    AvisoPPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      scrollPadding: false,
      scrollAssist: false
    }),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ResPasswordPage,
    RegistrarsePage,
    PerfilEPage,
    InicioPage,
    RecibosMPage,
    FacturacionMPage,
    AyudaMPage,
    RegistrarBPage,
    ReservacionBPage,
    BoletoVPage,
    RegistroUPage,
    PromocionesPage,
    PedirTPage,
    TerminosCPage,
    AvisoPPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    BarcodeScanner,
    Camera,
    FileTransfer,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
