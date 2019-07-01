webpackJsonp([17],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisoPPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AvisoPPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvisoPPage = /** @class */ (function () {
    function AvisoPPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AvisoPPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvisoPPage');
    };
    AvisoPPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aviso-p',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\aviso-p\aviso-p.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n\n\n  </ion-grid>    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\aviso-p\aviso-p.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AvisoPPage);
    return AvisoPPage;
}());

//# sourceMappingURL=aviso-p.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaMPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AyudaMPage = /** @class */ (function () {
    function AyudaMPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.data.mensaje = '';
    }
    AyudaMPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad AyudaMPage');
    };
    AyudaMPage.prototype.enviar = function () { };
    AyudaMPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ayuda-m',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\ayuda-m\ayuda-m.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n            <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n            </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>  \n\n  <ion-grid>          \n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h1>Soporte</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h4>¿En que te podemos ayudar?</h4>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-textarea rows="5" cols="250" type="text" name="mensaje" placeholder="Cuentanos..." [(ngModel)]="data.mensaje" required></ion-textarea>\n\n          </ion-item> \n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block round  id="btn" (click)="enviar()">Enviar</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h3>Preguntas Frecuentes</h3>\n\n          <h4>Llama a soporte</h4>\n\n          <h4>01 2123 1234</h4>\n\n        </ion-col>\n\n      </ion-row>            \n\n</ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\ayuda-m\ayuda-m.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AyudaMPage);
    return AyudaMPage;
}());

//# sourceMappingURL=ayuda-m.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoletoVPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoletoVPage = /** @class */ (function () {
    //scannedCode = null;
    function BoletoVPage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.qrData = null;
        this.createdCode = null;
    }
    BoletoVPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad BoletoVPage');
    };
    BoletoVPage.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    BoletoVPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-boleto-v',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\boleto-v\boleto-v.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n            <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n            </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n      <ion-row align-items-center>  \n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Información QR" [(ngModel)]="qrData" required></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row align-items-center>  \n\n        <button ion-button full icon-left color="btnB" (click)="createCode()"><ion-icon name="barcode"></ion-icon>Crear QR</button>   \n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col col-10 push-1 col-lg-6 push-lg-3>  \n\n          <ion-card *ngIf="createdCode">\n\n            <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n\n            <ion-card-content>\n\n              <p>Equivalencia en texto: {{ createdCode }}</p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row> \n\n  </ion-grid>    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\boleto-v\boleto-v.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], BoletoVPage);
    return BoletoVPage;
}());

//# sourceMappingURL=boleto-v.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturacionMPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacturacionMPage = /** @class */ (function () {
    function FacturacionMPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FacturacionMPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad FacturacionMPage');
    };
    FacturacionMPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-facturacion-m',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\facturacion-m\facturacion-m.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n            <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n            </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>  \n\n  <ion-grid>     \n\n  <ion-list>     \n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h1>Facturación</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block round id="btn" (click)="RFC()">Registrar R.F.C</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br><br>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n            <ion-item id="caja"> \n\n              <ion-label>Seleccionar...</ion-label>\n\n              <ion-select [(ngModel)]="Seleccion">\n\n                <ion-option value="R">R.F.C</ion-option>\n\n                <ion-option value="C">CURP</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n        </ion-col>    \n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <ion-item id="caja"> \n\n            <ion-label>Concepto...</ion-label>\n\n              <ion-select [(ngModel)]="Seleccion">\n\n                <ion-option value="R">Datos1</ion-option>\n\n                <ion-option value="C">Datos2</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br><br><br>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block  id="btn" (click)="enviar()">Enviar</button>\n\n        </ion-col>\n\n      </ion-row>            \n\n  </ion-list>\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\facturacion-m\facturacion-m.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FacturacionMPage);
    return FacturacionMPage;
}());

//# sourceMappingURL=facturacion-m.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarBPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrarBPage = /** @class */ (function () {
    function RegistrarBPage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.qrData = 'Hola Mundo';
        this.createdCode = null;
    }
    RegistrarBPage.prototype.ionViewDidLoad = function () {
        this.createdCode = this.qrData;
        //console.log('ionViewDidLoad RegistrarBPage');
    };
    RegistrarBPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrar-b',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\registrar-b\registrar-b.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n    <ion-row align-items-center>\n\n      <ion-col id="btnL">\n\n        <h4>Escanea el codigo QR de tu boleto</h4>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row align-items-center>\n\n      <ion-col col-10 push-1 col-lg-6 push-lg-3>  \n\n        <ion-card *ngIf="createdCode">\n\n          <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n\n          <ion-card-content>\n\n            <p>Equivalencia en texto: {{ createdCode }}</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row> \n\n  </ion-grid>    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\registrar-b\registrar-b.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], RegistrarBPage);
    return RegistrarBPage;
}());

//# sourceMappingURL=registrar-b.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservacionBPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReservacionBPage = /** @class */ (function () {
    function ReservacionBPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.data.fechE = '';
        this.data.hrE = '';
    }
    ReservacionBPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ReservacionBPage');
    };
    ReservacionBPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservacion-b',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\reservacion-b\reservacion-b.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo">\n\n  <ion-list>\n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h4>Entrada a MAC-PARKK</h4>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-item id="tam">\n\n            <ion-label id="btnL" floating>Fecha de Entrada</ion-label>\n\n            <ion-input type="text" name="fechE" [(ngModel)]="data.fechE"></ion-input>        \n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-item id="tamB">   \n\n            <ion-label id="btnL" floating>Hora de Entrada</ion-label>\n\n            <ion-input type="text" name="hrE" [(ngModel)]="data.hrE"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h4>Arrivo a GDL</h4>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col col-6>\n\n          <ion-item id="tam">\n\n            <ion-label id="btnL" floating>Fecha de llegada</ion-label>\n\n            <ion-input type="text" name="fechE" [(ngModel)]="data.fechE"></ion-input>        \n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-item id="tamB">   \n\n            <ion-label id="btnL" floating>Hora de llegada</ion-label>\n\n            <ion-input type="text" name="hrE" [(ngModel)]="data.hrE"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h5>Precio Estimado</h5>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n            <p id="txtT">El precio puede variar conforme a la hora exacta de entrada y salida.</p>\n\n        </ion-col>\n\n        <ion-col col-12 id="btnL">\n\n          <p>¿Lavado de auto?</p>  \n\n        </ion-col>\n\n        <ion-col id="btnL"> \n\n          <ion-checkbox color="btnB" checked="true"></ion-checkbox>\n\n          <ion-label>Si</ion-label>\n\n        </ion-col>\n\n        <ion-col id="btnL">\n\n          <ion-checkbox color="btnB" checked="false"></ion-checkbox> \n\n          <ion-label>No</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>    \n\n  </ion-list>  \n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\reservacion-b\reservacion-b.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ReservacionBPage);
    return ReservacionBPage;
}());

//# sourceMappingURL=reservacion-b.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroUPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegistroUPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroUPage = /** @class */ (function () {
    function RegistroUPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegistroUPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroUPage');
    };
    RegistroUPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro-u',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\registro-u\registro-u.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n\n\n  </ion-grid>    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\registro-u\registro-u.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegistroUPage);
    return RegistroUPage;
}());

//# sourceMappingURL=registro-u.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromocionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PromocionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PromocionesPage = /** @class */ (function () {
    function PromocionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PromocionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromocionesPage');
    };
    PromocionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-promociones',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\promociones\promociones.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n\n\n  </ion-grid>    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\promociones\promociones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PromocionesPage);
    return PromocionesPage;
}());

//# sourceMappingURL=promociones.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedirTPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PedirTPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedirTPage = /** @class */ (function () {
    function PedirTPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedirTPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedirTPage');
    };
    PedirTPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedir-t',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\pedir-t\pedir-t.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n\n\n  </ion-grid>    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\pedir-t\pedir-t.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PedirTPage);
    return PedirTPage;
}());

//# sourceMappingURL=pedir-t.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Storage } from '@ionic/storage';//Manejo de cache
 //conexión
var ResPasswordPage = /** @class */ (function () {
    function ResPasswordPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.mensaje = {};
        this.data.correo = '';
    }
    ResPasswordPage.prototype.ionViewDidLoad = function () {
    };
    ResPasswordPage.prototype.enviarR = function () {
        var _this = this;
        var url = 'http://citcar.relatibyte.com.mx//resPassApi.php';
        //let password=Md5.init(this.data.password);
        var body = JSON.stringify({ correo: this.data.correo });
        this.http.post(url, body).subscribe(function (res) {
            if (res === 0) {
                var error = _this.alertCtrl.create({
                    title: 'Error',
                    message: "Email incorrecto,por favor verifique su correo",
                    buttons: ['Entendido']
                });
                error.present();
            }
            else {
                _this.mensaje = res;
                //console.log(this.mensaje);
                var mess = _this.alertCtrl.create({
                    title: 'Prueba',
                    message: _this.mensaje,
                    buttons: ['Entendido']
                });
                mess.present();
                //this.pass=res[0].cliente_pass;
                //this.storage.set('Apodo',this.nick);
                //this.storage.set('confirmador',this.nick+this.pass);
                //console.dir(nick+','+pass);
            }
        }, function (err) {
            console.log('Error: ' + err.error);
            console.log('Name: ' + err.name);
            console.log('Message: ' + err.message);
            console.log('Status: ' + err.status);
        });
    };
    ResPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-res-password',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\res-password\res-password.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content  id="Fondo" padding>\n\n  <ion-grid>\n\n    <p></p>\n\n    <ion-row>\n\n      <ion-col col-6 push-3><div><img src="assets/imgs/logo.png"/></div></ion-col>\n\n    </ion-row>\n\n    <p></p>\n\n    <ion-row>\n\n      <ion-col id="btnL"><div><h6>¿Olvidaste tu contraseña?</h6></div></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col id="btnL"><div><p>Introduce tu dirección correo:</p></div></ion-col>\n\n      </ion-row>       \n\n  </ion-grid>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Correo</ion-label>\n\n      <ion-input type="email" name="correo" [(ngModel)]="data.correo"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n\n    <button ion-button color="primary" block (click)="enviarR()">Enviar</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\res-password\res-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResPasswordPage);
    return ResPasswordPage;
}());

//# sourceMappingURL=res-password.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilEPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerfilEPage = /** @class */ (function () {
    function PerfilEPage(navCtrl, navParams, camara, transfer, file, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camara = camara;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.imgP = 'assets/imgs/perfil.png';
        this.data.nombre = '';
        this.data.appm = '';
        this.data.mail = '';
        this.data.password = '';
    }
    PerfilEPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad PerfilEPage');
    };
    PerfilEPage.prototype.changeImg = function () {
        var _this = this;
        /*let loader=this.loadingCtrl.create({
          content:'Subiendo...'
        });*/
        var options = {
            quality: 70,
            destinationType: this.camara.DestinationType.DATA_URL,
            sourceType: this.camara.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camara.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.imgP = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    PerfilEPage.prototype.Guardar = function () { };
    PerfilEPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil-e',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\perfil-e\perfil-e.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n            <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n            </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo">\n\n  <ion-list> \n\n      <ion-grid> \n\n          <ion-row align-items-center>\n\n            <ion-col col-3 id="imgP">\n\n              <button ion-button icon-only clear id="iconS" (click)="changeImg()">\n\n                <img  id="imgP" src="{{imgP}}"/>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row> \n\n          <ion-row  align-items-center>\n\n            <ion-col col-9 id="alinacion">  \n\n              <ion-item id="usu">\n\n                <ion-label floating>Nombre(s)</ion-label>\n\n                <ion-input type="text" name="nombre" [(ngModel)]="data.nombre" required></ion-input>\n\n              </ion-item>\n\n              <ion-item id="usu">\n\n                <ion-label floating>Apellidos</ion-label>\n\n                <ion-input type="text" name="appm" [(ngModel)]="data.appm" required></ion-input>\n\n              </ion-item>\n\n              <ion-item id="usu">\n\n                <ion-label floating>E-mail</ion-label>\n\n                <ion-input type="text" name="mail" [(ngModel)]="data.mail" required></ion-input>\n\n              </ion-item>\n\n              <ion-item id="usu">\n\n                <ion-label floating>Contraseña</ion-label>\n\n                <ion-input type="password" name="password" [(ngModel)]="data.password" required></ion-input>\n\n              </ion-item>                               \n\n            </ion-col>  \n\n          </ion-row>\n\n          <ion-row align-items-center>\n\n            <ion-col>\n\n              <button ion-button color="btnB" block round id="btn" (click)="Guardar()">Guardar</button>\n\n            </ion-col>\n\n          </ion-row>                       \n\n      </ion-grid>\n\n  </ion-list>     \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\perfil-e\perfil-e.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PerfilEPage);
    return PerfilEPage;
}());

//# sourceMappingURL=perfil-e.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecibosMPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RecibosMPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecibosMPage = /** @class */ (function () {
    function RecibosMPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecibosMPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecibosMPage');
    };
    RecibosMPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recibos-m',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\recibos-m\recibos-m.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n            <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n            </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>  \n\n  <ion-grid>     \n\n  <ion-list>     \n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h1>Recibos</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br><br>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n        </ion-col>\n\n      </ion-row>             \n\n  </ion-list>\n\n</ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\recibos-m\recibos-m.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecibosMPage);
    return RecibosMPage;
}());

//# sourceMappingURL=recibos-m.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosCPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TerminosCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TerminosCPage = /** @class */ (function () {
    function TerminosCPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TerminosCPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TerminosCPage');
    };
    TerminosCPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terminos-c',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\terminos-c\terminos-c.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n\n\n  </ion-grid>    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\terminos-c\terminos-c.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TerminosCPage);
    return TerminosCPage;
}());

//# sourceMappingURL=terminos-c.js.map

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aviso-p/aviso-p.module": [
		330,
		16
	],
	"../pages/ayuda-m/ayuda-m.module": [
		331,
		15
	],
	"../pages/boleto-v/boleto-v.module": [
		332,
		14
	],
	"../pages/facturacion-m/facturacion-m.module": [
		333,
		13
	],
	"../pages/inicio/inicio.module": [
		334,
		12
	],
	"../pages/login/login.module": [
		335,
		11
	],
	"../pages/main/main.module": [
		336,
		10
	],
	"../pages/pedir-t/pedir-t.module": [
		337,
		9
	],
	"../pages/perfil-e/perfil-e.module": [
		338,
		8
	],
	"../pages/promociones/promociones.module": [
<<<<<<< HEAD
		336,
		7
	],
	"../pages/recibos-m/recibos-m.module": [
		337,
=======
		339,
		7
	],
	"../pages/recibos-m/recibos-m.module": [
		340,
>>>>>>> fb34aaef17721581e527b29d81dca12ea16bff25
		6
	],
	"../pages/registrar-b/registrar-b.module": [
		341,
		5
	],
	"../pages/registrarse/registrarse.module": [
<<<<<<< HEAD
		340,
		4
	],
	"../pages/registro-u/registro-u.module": [
		339,
=======
		342,
		4
	],
	"../pages/registro-u/registro-u.module": [
		343,
>>>>>>> fb34aaef17721581e527b29d81dca12ea16bff25
		3
	],
	"../pages/res-password/res-password.module": [
		344,
		2
	],
	"../pages/reservacion-b/reservacion-b.module": [
		345,
		1
	],
	"../pages/terminos-c/terminos-c.module": [
		346,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 178;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_registrarse_registrarse__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//imports pages


var HomePage = /** @class */ (function () {
    function HomePage(menu, navCtrl) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.menu.enable(false);
    }
    HomePage.prototype.iniciar = function () {
        var currentIndex = this.navCtrl.getActive().index;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    HomePage.prototype.registrar = function () {
        var currentIndex = this.navCtrl.getActive().index;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_registrarse_registrarse__["a" /* RegistrarsePage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    HomePage.prototype.iniciarE = function () {
    };
    HomePage.prototype.pensiones = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\home\home.html"*/'<ion-content id="Fondo" padding> \n\n  <ion-grid>\n\n    <p></p><p></p>        \n\n    <ion-row>\n\n      <ion-col col-6 push-3><div><img src="assets/imgs/logo.png"/></div></ion-col>\n\n    </ion-row>\n\n    <p></p><p></p>       \n\n  </ion-grid>\n\n  <ion-list>     \n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="primary" block round (click)="iniciar()">Iniciar Sesión</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <p></p> \n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="primary" block round (click)="registrar()">Usuario Nuevo</button>\n\n        </ion-col>\n\n      </ion-row>       \n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(253);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_qrcode2__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_list_list__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_registrarse_registrarse__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_res_password_res_password__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_inicio_inicio__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_recibos_m_recibos_m__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_facturacion_m_facturacion_m__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_ayuda_m_ayuda_m__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_perfil_e_perfil_e__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_terminos_c_terminos_c__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_aviso_p_aviso_p__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_main_main__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_registrar_b_registrar_b__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_reservacion_b_reservacion_b__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_boleto_v_boleto_v__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_registro_u_registro_u__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_promociones_promociones__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_pedir_t_pedir_t__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//imports de biblotecas especiales







//imports page













//imports pencinados

//imports pages buttons menu






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_registrarse_registrarse__["a" /* RegistrarsePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_res_password_res_password__["a" /* ResPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_perfil_e_perfil_e__["a" /* PerfilEPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_recibos_m_recibos_m__["a" /* RecibosMPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_facturacion_m_facturacion_m__["a" /* FacturacionMPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_ayuda_m_ayuda_m__["a" /* AyudaMPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_registrar_b_registrar_b__["a" /* RegistrarBPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_reservacion_b_reservacion_b__["a" /* ReservacionBPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_boleto_v_boleto_v__["a" /* BoletoVPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_registro_u_registro_u__["a" /* RegistroUPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_promociones_promociones__["a" /* PromocionesPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_pedir_t_pedir_t__["a" /* PedirTPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_terminos_c_terminos_c__["a" /* TerminosCPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_aviso_p_aviso_p__["a" /* AvisoPPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_main_main__["a" /* MainPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/aviso-p/aviso-p.module#AvisoPPageModule', name: 'AvisoPPage', segment: 'aviso-p', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ayuda-m/ayuda-m.module#AyudaMPageModule', name: 'AyudaMPage', segment: 'ayuda-m', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/boleto-v/boleto-v.module#BoletoVPageModule', name: 'BoletoVPage', segment: 'boleto-v', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/facturacion-m/facturacion-m.module#FacturacionMPageModule', name: 'FacturacionMPage', segment: 'facturacion-m', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedir-t/pedir-t.module#PedirTPageModule', name: 'PedirTPage', segment: 'pedir-t', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-e/perfil-e.module#PerfilEPageModule', name: 'PerfilEPage', segment: 'perfil-e', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promociones/promociones.module#PromocionesPageModule', name: 'PromocionesPage', segment: 'promociones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recibos-m/recibos-m.module#RecibosMPageModule', name: 'RecibosMPage', segment: 'recibos-m', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrar-b/registrar-b.module#RegistrarBPageModule', name: 'RegistrarBPage', segment: 'registrar-b', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro-u/registro-u.module#RegistroUPageModule', name: 'RegistroUPage', segment: 'registro-u', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrarse/registrarse.module#RegistrarsePageModule', name: 'RegistrarsePage', segment: 'registrarse', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/res-password/res-password.module#ResPasswordPageModule', name: 'ResPasswordPage', segment: 'res-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservacion-b/reservacion-b.module#ReservacionBPageModule', name: 'ReservacionBPage', segment: 'reservacion-b', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terminos-c/terminos-c.module#TerminosCPageModule', name: 'TerminosCPage', segment: 'terminos-c', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_res_password_res_password__["a" /* ResPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_registrarse_registrarse__["a" /* RegistrarsePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_perfil_e_perfil_e__["a" /* PerfilEPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_recibos_m_recibos_m__["a" /* RecibosMPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_facturacion_m_facturacion_m__["a" /* FacturacionMPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_ayuda_m_ayuda_m__["a" /* AyudaMPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_registrar_b_registrar_b__["a" /* RegistrarBPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_reservacion_b_reservacion_b__["a" /* ReservacionBPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_boleto_v_boleto_v__["a" /* BoletoVPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_registro_u_registro_u__["a" /* RegistroUPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_promociones_promociones__["a" /* PromocionesPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_pedir_t_pedir_t__["a" /* PedirTPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_terminos_c_terminos_c__["a" /* TerminosCPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_aviso_p_aviso_p__["a" /* AvisoPPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_main_main__["a" /* MainPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_perfil_e_perfil_e__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recibos_m_recibos_m__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_facturacion_m_facturacion_m__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ayuda_m_ayuda_m__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_terminos_c_terminos_c__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aviso_p_aviso_p__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_main_main__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 //Manejo de cache
//imports pages

//import { LoginPage } from '../pages/login/login';









var MyApp = /** @class */ (function () {
    function MyApp(storage, platform, statusBar, splashScreen) {
        var _this = this;
        this.storage = storage;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_6__pages_perfil_e_perfil_e__["a" /* PerfilEPage */] },
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */] },
            { title: 'Recibos', component: __WEBPACK_IMPORTED_MODULE_8__pages_recibos_m_recibos_m__["a" /* RecibosMPage */] },
            { title: 'Facturación', component: __WEBPACK_IMPORTED_MODULE_9__pages_facturacion_m_facturacion_m__["a" /* FacturacionMPage */] },
            { title: 'Ayuda', component: __WEBPACK_IMPORTED_MODULE_10__pages_ayuda_m_ayuda_m__["a" /* AyudaMPage */] },
            { title: 'Terminos y Condiciones', component: __WEBPACK_IMPORTED_MODULE_11__pages_terminos_c_terminos_c__["a" /* TerminosCPage */] },
            { title: 'Aviso de Privacidad', component: __WEBPACK_IMPORTED_MODULE_12__pages_aviso_p_aviso_p__["a" /* AvisoPPage */] }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //statusBar.styleDefault();
            //splashScreen.hide();
            storage.get('confirmed').then(function (res_confirmed) {
                storage.get('client_name').then(function (res_name) {
                    storage.get('client_privilege').then(function (res_privilege) {
                        if (res_confirmed != null) {
                            if (res_privilege != null) {
                                if (res_privilege == 0) {
                                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */];
                                    splashScreen.hide();
                                }
                                else if (res_privilege == 1) {
                                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_14__pages_main_main__["a" /* MainPage */];
                                    splashScreen.hide();
                                }
                            }
                            else {
                                _this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */];
                                splashScreen.hide();
                            }
                        }
                        else {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
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
    MyApp.prototype.openPage = function (x) {
        if (x === 7) {
            this.storage.clear();
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
        }
        else {
            this.nav.setRoot(this.pages[x].component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header no-border>\n\n    <ion-toolbar>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n      <ion-grid>\n\n        <br>\n\n        <ion-row align-items-center>\n\n          <ion-col col-6 push-3><img src="assets/imgs/perfil.png" id="imgR"/></ion-col>\n\n        </ion-row>\n\n        <ion-row align-items-center id="usu">\n\n          <button menuClose ion-button clear color="grey" (click)="openPage(x=0)">Editar perfil</button>\n\n        </ion-row>        \n\n      </ion-grid>\n\n    <ion-list> \n\n      <ion-grid>\n\n        <ion-row align-items-center>\n\n          <button menuClose ion-button clear color="grey" id="menuL" (click)="openPage(x=1)">Inicio</button>\n\n        </ion-row>\n\n        <ion-row align-items-center>\n\n          <button menuClose ion-button clear color="grey" id="menuL" (click)="openPage(x=2)">Recibos</button>\n\n        </ion-row>\n\n        <ion-row align-items-center>\n\n          <button menuClose ion-button clear color="grey" id="menuL" (click)="openPage(x=3)">Facturación</button>\n\n        </ion-row>\n\n        <ion-row align-items-center>\n\n          <button menuClose ion-button clear color="grey" id="menuL" (click)="openPage(x=4)">Ayuda</button>\n\n        </ion-row>\n\n        <ion-row align-items- id="margen">\n\n          <button menuClose ion-button clear color="grey" id="menuLS" (click)="openPage(x=5)">Terminos y Condiciones</button>\n\n        </ion-row>\n\n        <ion-row align-items- id="margen0">\n\n          <button menuClose ion-button clear color="grey" id="menuLS" (click)="openPage(x=6)">Aviso de Privacidad</button>\n\n        </ion-row>\n\n        <ion-row align-items- id="margen0">\n\n            <button menuClose ion-button clear color="grey" id="menuLS" (click)="openPage(x=7)">Cerrar Sesión</button>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\list\list.html"*/'<ion-header no-border>\n\n    <div>\n\n      <ion-grid> \n\n        <ion-row>    \n\n          <ion-col col-8 id="iconLH">\n\n              <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n              </ion-col>     \n\n          <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n        </ion-row>      \n\n      </ion-grid>\n\n    </div>\n\n</ion-header>\n\n<ion-content id="Fondo">\n\n  <br><br><br>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrarse_registrarse__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_md5_typescript__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__res_password_res_password__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_main__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//imports




 //Manejo de cache
 //conexión
 //MD5

 //página para restablecer contraseña.


var LoginPage = /** @class */ (function () {
    //constructor y declaración de uso de biblotecas
    function LoginPage(fb, loadingCtrl, storage, navCtrl, navParams, http, alertCtrl) {
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.data = this.fb.group({
            mail: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{6,18}$/)]],
        });
    }
    //metodos
    LoginPage.prototype.ionViewDidLoad = function () {
        //this.storage.clear();
        /*this.storage.get('confirmador').then((res) => {
          if(res!=null){
            let currentIndex = this.navCtrl.getActive().index;
            this.navCtrl.push(HomePage).then(() => {
                this.navCtrl.remove(currentIndex);
            });
          }
        });*/
    };
    LoginPage.prototype.ingresar = function () {
        var _this = this;
        //let currentIndex = this.navCtrl.getActive().index;
        //this.navCtrl.push(InicioPage).then(() => {
        //this.navCtrl.remove(currentIndex);
        //});
        //this.provedor.submit(this.data.nickname,this.data.password);
        var loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loading.present();
        var url = 'http://138.68.48.252:3000/Api/users/login';
        var password = __WEBPACK_IMPORTED_MODULE_6_md5_typescript__["a" /* Md5 */].init(this.data.value.password);
        var body = JSON.stringify({ nickname: this.data.value.mail, password: password });
        this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
            if (res['state'] === false) {
                var error = _this.alertCtrl.create({
                    title: 'Aviso',
                    message: "Usuario o contraseña incorrecta,por favor intentelo de nuevo",
                    buttons: ['Entendido']
                });
                error.present();
                loading.dismiss();
            }
            else if (res['state'] === true) {
                loading.dismiss();
                _this.storage.set('confirmed', res['mail']);
                _this.storage.set('client_name', res['name'] + ' ' + res['surname']);
                if (res['level'] == 0) {
                    _this.storage.set('client_privilege', res['level']);
                    var currentIndex_1 = _this.navCtrl.getActive().index;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__["a" /* InicioPage */]).then(function () {
                        _this.navCtrl.remove(currentIndex_1);
                    });
                }
                else if (res['level'] == 1) {
                    _this.storage.set('client_privilege', res['level']);
                    var currentIndex_2 = _this.navCtrl.getActive().index;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__main_main__["a" /* MainPage */]).then(function () {
                        _this.navCtrl.remove(currentIndex_2);
                    });
                }
            }
            else if (res['verificado'] == false) {
                var error = _this.alertCtrl.create({
                    title: 'Aviso',
                    message: "Antes de ingresar porfavor verifique su correo.",
                    buttons: ['Entendido']
                });
                error.present();
                loading.dismiss();
            }
            else {
                loading.dismiss();
            }
        }, function (err) {
            var error = _this.alertCtrl.create({
                title: 'Alerta',
                message: "Datos no obtenidos.",
                buttons: ['Entendido']
            });
            error.present();
            /*console.log('Error: ' + err.error);
            console.log('Name: ' + err.name);
            console.log('Message: ' + err.message);
            console.log('Status: ' + err.status);*/
            loading.dismiss();
        });
    };
    LoginPage.prototype.passwordR = function () {
        //let currentIndex = this.navCtrl.getActive().index;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__res_password_res_password__["a" /* ResPasswordPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    LoginPage.prototype.registrarse = function () {
        var _this = this;
        var currentIndex = this.navCtrl.getActive().index;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registrarse_registrarse__["a" /* RegistrarsePage */]).then(function () {
            _this.navCtrl.remove(currentIndex);
        });
        // set a key/value
        //this.storage.set('name', 'Max');
        // Or to get a key/value pair
        /*this.storage.get('name').then((val) => {
          let storag = this.alertCtrl.create({
            title: 'Prueba',
            message:val,
            buttons: ['Entendido']
          });
          storag.present();*/
        //console.log('Your age is', val);
        //});
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\login\login.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n  </ion-navbar>  \n\n</ion-header>\n\n<!--Contenido-->\n\n<ion-content id="Fondo" padding>\n\n      <ion-grid>\n\n        <p></p>\n\n        <ion-row>\n\n              <ion-col col-6 push-3><div><img src="assets/imgs/logo.png"/></div></ion-col>\n\n        </ion-row>      \n\n      </ion-grid>\n\n    <ion-list>\n\n      <ion-grid>\n\n        <form [formGroup]="data" (ngSubmit)="ingresar()" novalidate> \n\n          <ion-row align-items-center>\n\n            <ion-col col-9 id="alinacion">  \n\n              <ion-item id="usu">\n\n                <ion-label id="usu" floating>mail</ion-label>\n\n                <ion-input type="mail" formControlName="mail" required></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row align-items-center> \n\n            <ion-col col-9 id="alinacion">\n\n              <ion-item id="usu">\n\n                  <ion-label id="usu" floating>Contraseña</ion-label>\n\n                  <ion-input type="password"  formControlName="password" required></ion-input>\n\n              </ion-item> \n\n            </ion-col>  \n\n          </ion-row>\n\n        </form>    \n\n      </ion-grid>      \n\n    </ion-list>\n\n    <ion-grid>\n\n        <ion-row align-items-center>\n\n            <ion-col col-6 push-3 id="btnL">\n\n              <button ion-button color="primary" outline round [disabled]="data.invalid" (click)="ingresar()">Ingresar</button>\n\n            </ion-col>\n\n        </ion-row>\n\n      <ion-row align-items-center>    \n\n        <ion-col col-6 push-0>\n\n          <div><button ion-button color="grey" clear (click)="passwordR()"><p>¿Olvidaste tu usuario o contraseña?</p></button></div>\n\n        </ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\login\login.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrar_b_registrar_b__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reservacion_b_reservacion_b__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boleto_v_boleto_v__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registro_u_registro_u__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__promociones_promociones__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pedir_t_pedir_t__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//imports pages






var InicioPage = /** @class */ (function () {
    function InicioPage(menu, navCtrl, navParams) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu.enable(true);
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad InicioPage');
    };
    InicioPage.prototype.rBoleto = function () {
        //let currentIndex = this.navCtrl.getActive().index;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registrar_b_registrar_b__["a" /* RegistrarBPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    InicioPage.prototype.reserv = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reservacion_b_reservacion_b__["a" /* ReservacionBPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    InicioPage.prototype.boletoV = function () {
        //let currentIndex = this.navCtrl.getActive().index;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__boleto_v_boleto_v__["a" /* BoletoVPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    InicioPage.prototype.UpdaR = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__registro_u_registro_u__["a" /* RegistroUPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    InicioPage.prototype.promo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__promociones_promociones__["a" /* PromocionesPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    InicioPage.prototype.pedirT = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pedir_t_pedir_t__["a" /* PedirTPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\inicio\inicio.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>  \n\n  <ion-grid>          \n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block id="btn" (click)="rBoleto()">Registrar Boleto</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block id="btn" (click)="reserv()">Reservación</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block id="btn" (click)="boletoV()">Boleto Virtual</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block id="btn" (click)="UpdaR()">Actualizar Registro</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block id="btn" (click)="promo()">Promociones</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br><br>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnY" block id="btnP" (click)="pedirT()">Pedir Transporte</button>\n\n        </ion-col>\n\n      </ion-row>             \n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_md5_typescript__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 //MD5
 //conexión

var RegistrarsePage = /** @class */ (function () {
    function RegistrarsePage(http, loadingCtrl, alertCtrl, elementRef, toastCtrl, fb, navCtrl, navParams, googlePlus) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.elementRef = elementRef;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googlePlus = googlePlus;
        this.user = {};
        this.nombre = '';
        this.correo = '';
        this.apellido = '';
        this.type_check = 0;
        this.data = this.fb.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            apellido: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(25)]],
            correo: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{8,18}$/)]],
            passwordC: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{8,18}$/)]],
        });
    }
    //Metodos
    RegistrarsePage.prototype.ionViewDidLoad = function () {
    };
    RegistrarsePage.prototype.check_in = function () {
        var _this = this;
        if (this.data.value.nombre.length != 0 && this.data.value.apellido.length != 0 && this.data.value.correo.length != 0 && this.data.value.password.length != 0 && this.data.value.passwordC.length != 0) {
            if (this.data.value.passwordC === this.data.value.password) {
                if (this.type_check == 1) {
                    var url = 'http://138.68.48.252:3000/Api/users/check_in';
                    var pass = __WEBPACK_IMPORTED_MODULE_4_md5_typescript__["a" /* Md5 */].init(this.data.value.password);
                    var loading_1 = this.loadingCtrl.create({
                        content: 'Cargando...'
                    });
                    loading_1.present();
                    var body = JSON.stringify({ nombre: this.data.value.nombre, apellido: this.data.value.apellido, correo: this.data.value.correo, pass: pass, verificado: true });
                    this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
                        if (res['state'] === true) {
                            var correct = _this.alertCtrl.create({
                                title: 'Aviso',
                                message: "Exito al registrarse",
                                buttons: ['Entendido']
                            });
                            correct.present();
                            loading_1.dismiss();
                            var currentIndex_1 = _this.navCtrl.getActive().index;
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]).then(function () {
                                _this.navCtrl.remove(currentIndex_1);
                            });
                        }
                        else if (res['state'] === false) {
                            var error = _this.alertCtrl.create({
                                title: 'Aviso',
                                message: "Fallo al registrarse,intentelo más tarde.",
                                buttons: ['Entendido']
                            });
                            error.present();
                            loading_1.dismiss();
                        }
                        else if (res['state'] === 'exist') {
                            var error = _this.alertCtrl.create({
                                title: 'Aviso',
                                message: "Mail en uso, porfavor cambie de mail e intentelo de nuevo.",
                                buttons: ['Entendido']
                            });
                            error.present();
                            loading_1.dismiss();
                        }
                        else {
                            var error = _this.alertCtrl.create({
                                title: 'Aviso',
                                message: "Registro no valido.",
                                buttons: ['Entendido']
                            });
                            error.present();
                            loading_1.dismiss();
                        }
                    });
                }
                else {
                    var url = 'http://138.68.48.252:3000/Api/users/check_in';
                    var pass = __WEBPACK_IMPORTED_MODULE_4_md5_typescript__["a" /* Md5 */].init(this.data.value.password);
                    var loading_2 = this.loadingCtrl.create({
                        content: 'Cargando...'
                    });
                    loading_2.present();
                    var body = JSON.stringify({ nombre: this.data.value.nombre, apellido: this.data.value.apellido, correo: this.data.value.correo, pass: pass, verificado: false });
                    this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
                        if (res['state'] === true) {
                            var correct = _this.alertCtrl.create({
                                title: 'Aviso',
                                message: "Exito al registrarse,porfavor vea su correo para su verificación.",
                                buttons: ['Entendido']
                            });
                            correct.present();
                            loading_2.dismiss();
                            var currentIndex_2 = _this.navCtrl.getActive().index;
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]).then(function () {
                                _this.navCtrl.remove(currentIndex_2);
                            });
                        }
                        else if (res['state'] === false) {
                            var error = _this.alertCtrl.create({
                                title: 'Aviso',
                                message: "Fallo al registrarse,intentelo más tarde.",
                                buttons: ['Entendido']
                            });
                            error.present();
                            loading_2.dismiss();
                        }
                        else if (res['state'] === 'exist') {
                            var error = _this.alertCtrl.create({
                                title: 'Aviso',
                                message: "Mail en uso, porfavor cambie de mail e intentelo de nuevo.",
                                buttons: ['Entendido']
                            });
                            error.present();
                            loading_2.dismiss();
                        }
                        else {
                            var error = _this.alertCtrl.create({
                                title: 'Aviso',
                                message: "Registro no valido.",
                                buttons: ['Entendido']
                            });
                            error.present();
                            loading_2.dismiss();
                        }
                    });
                }
            }
            else {
                var error = this.alertCtrl.create({
                    title: 'Aviso',
                    message: "Las contraseñas no coinciden",
                    buttons: ['Entendido']
                });
                error.present();
            }
        }
        else {
            var error_1 = this.alertCtrl.create({
                title: 'Advertencia',
                message: " Por favor llena todo los campos",
                buttons: ['Entendido']
            });
            error_1.present();
        }
    };
    RegistrarsePage.prototype.message = function (idM) {
        var _this = this;
        if (idM == 1) {
            var message = this.toastCtrl.create({
                message: 'Escriba su nombre o uno de los dos nombres solamente.',
                duration: 2000,
                position: 'top',
            });
            message.present().then(function () {
                var inputElement = _this.elementRef.nativeElement.getElementsByTagName('input')[0];
                inputElement.focus();
            });
        }
        else if (idM == 2) {
            var message = this.toastCtrl.create({
                message: 'Escriba sus apellidos de máximo 25 letras',
                duration: 2000,
                position: 'top',
            });
            message.present().then(function () {
                var inputElement = _this.elementRef.nativeElement.getElementsByTagName('input')[1];
                inputElement.focus();
            });
        }
        else if (idM == 3) {
            var message = this.toastCtrl.create({
                message: 'Escriba su correo el @ es olbigatorio.',
                duration: 2000,
                position: 'top',
            });
            message.present().then(function () {
                var inputElement = _this.elementRef.nativeElement.getElementsByTagName('input')[2];
                inputElement.focus();
            });
        }
        else if (idM == 4) {
            var message = this.toastCtrl.create({
                message: 'Contraseña de 8 a 18 números o letras.',
                duration: 2000,
                position: 'top',
            });
            message.present().then(function () {
                var inputElement = _this.elementRef.nativeElement.getElementsByTagName('input')[3];
                inputElement.focus();
            });
        }
        else if (idM == 5) {
            var message = this.toastCtrl.create({
                message: 'Escriba la misma contraseña anteriormente puesta.',
                duration: 2000,
                position: 'top',
            });
            message.present().then(function () {
                var inputElement = _this.elementRef.nativeElement.getElementsByTagName('input')[4];
                inputElement.focus();
            });
        }
    };
    RegistrarsePage.prototype.rMail = function () {
        var _this = this;
        this.googlePlus.login({}).then(function (res) {
            _this.user = res;
            _this.correo = res.email;
            _this.getData();
        }).catch(function (err) { return console.error(err); });
    };
    RegistrarsePage.prototype.getData = function () {
        var _this = this;
        this.http.get('https://www.googleapis.com/plus/v1/people/me?access_token=' + this.user.accessToken).subscribe(function (data) {
            _this.nombre = data.name.givenName;
            _this.apellido = data.name.familyName;
            _this.type_check = 1;
        });
    };
    RegistrarsePage.prototype.fbL = function () {
    };
    RegistrarsePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrarse',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\registrarse\registrarse.html"*/'<ion-header no-border> \n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n    <ion-grid>\n\n      <p></p><p></p>\n\n        <ion-row align-items-center>\n\n          <div id="iconMacp">\n\n            <img src="assets/imgs/logo.png"/>\n\n          </div>\n\n        </ion-row>      \n\n    </ion-grid> \n\n    <p></p> \n\n    <ion-list>      \n\n      <form [formGroup]="data" (ngSubmit)="check_in()" novalidate>  \n\n        <ion-list>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label floating>Nombre</ion-label>\n\n                  <ion-input (click)="message(1)" type="text" formControlName="nombre" value="{{nombre}}"></ion-input>        \n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label floating>Apellido</ion-label>\n\n                  <ion-input (click)="message(2)" type="text" formControlName="apellido" value="{{apellido}}"></ion-input>\n\n                 </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n            <ion-item>\n\n              <ion-label floating>Email</ion-label>\n\n              <ion-input (click)="message(3)" type="email" formControlName="correo"  value="{{correo}}"></ion-input>\n\n            </ion-item>      \n\n            <ion-item>\n\n              <ion-label floating>Contraseña</ion-label>\n\n              <ion-input (click)="message(4)" type="password" formControlName="password"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>Confirmar Contraseña</ion-label>\n\n              <ion-input (click)="message(5)" type="password" formControlName="passwordC"></ion-input>\n\n            </ion-item>                 \n\n        </ion-list>\n\n        <div padding>\n\n          <button ion-button color="primary" outline round [disabled]="data.invalid" block>Registrarse</button>\n\n        </div>\n\n      </form>      \n\n      <ion-grid>       \n\n        <ion-row align-items-center>\n\n          <ion-col col-6 push-3 id="btnL">\n\n            <h6><ion-label>registro con:</ion-label></h6>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-grid>\n\n        <ion-row align-items-center>\n\n            <ion-col col-6 id="btnL">\n\n              <button ion-button icon-only clear id="iconS" (click)="rMail()">\n\n                <ion-icon name="ios-mail-outline" color="fb" id="iconS"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n            <ion-col col-6 id="btnL">\n\n              <button ion-button icon-only clear id="iconS" (click)="fbL()">\n\n                <ion-icon ios="logo-facebook" md="logo-facebook" color="fb" id="iconS"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n        </ion-row>\n\n      </ion-grid>      \n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\registrarse\registrarse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], RegistrarsePage);
    return RegistrarsePage;
}());

//# sourceMappingURL=registrarse.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\main\main.html"*/'<!--\n\n  Generated template for the MainPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>main</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ })

},[232]);
//# sourceMappingURL=main.js.map