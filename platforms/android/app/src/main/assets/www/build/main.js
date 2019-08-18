webpackJsonp([19],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisoPPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aviso-p',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\aviso-p\aviso-p.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n\n\n  </ion-grid>    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\aviso-p\aviso-p.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AvisoPPage);
    return AvisoPPage;
}());

//# sourceMappingURL=aviso-p.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaMPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //conexión
var AyudaMPage = /** @class */ (function () {
    function AyudaMPage(alertCtrl, loadingCtrl, http, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.data.mensaje = '';
    }
    //Metodos
    AyudaMPage.prototype.ionViewCanEnter = function () {
    };
    AyudaMPage.prototype.enviar = function () { };
    AyudaMPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ayuda-m',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\ayuda-m\ayuda-m.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n            <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n            </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>  \n\n  <ion-grid>          \n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h1>Soporte</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h4>¿En que te podemos ayudar?</h4>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-textarea rows="5" cols="250" type="text" name="mensaje" placeholder="Cuentanos..." [(ngModel)]="data.mensaje" required></ion-textarea>\n\n          </ion-item> \n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block round  id="btn" (click)="enviar()">Enviar</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h3>Preguntas Frecuentes</h3>\n\n          <h4>Llama a soporte</h4>\n\n          <h4>01 2123 1234</h4>\n\n        </ion-col>\n\n      </ion-row>            \n\n</ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\ayuda-m\ayuda-m.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AyudaMPage);
    return AyudaMPage;
}());

//# sourceMappingURL=ayuda-m.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoletoVPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
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
var BoletoVPage = /** @class */ (function () {
    function BoletoVPage(storage, navCtrl, navParams, barcodeScanner) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.qrData = null;
        this.createdCode = null;
    }
    //Metodos
    BoletoVPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get('confirmed').then(function (res_confirmed) {
            _this.storage.get('client_n').then(function (res_nombre) {
                _this.storage.get('client_sur').then(function (res_apellido) {
                    _this.storage.get('pass_o').then(function (res_pass) {
                        _this.storage.get('id_client').then(function (res_id_client) {
                            _this.storage.get('virtual_ticket').then(function (res_token_id) {
                                if (res_confirmed.leght != 0 && res_nombre.leght != 0 && res_apellido.leght != 0 && res_pass.leght != 0 && res_id_client.leght != 0 && res_token_id.leght != 0) {
                                    if (res_confirmed != null && res_nombre != null && res_apellido != null && res_pass != null && res_id_client != null && res_token_id != null) {
                                        _this.createdCode = res_token_id;
                                    }
                                }
                            });
                        });
                    });
                });
            });
        });
    };
    BoletoVPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-boleto-v',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\boleto-v\boleto-v.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n    <ion-row align-items-center>\n\n      <ion-col col-10 push-1 col-lg-6 push-lg-3>  \n\n        <ion-card *ngIf="createdCode">\n\n          <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n\n          <ion-card-content class="txtC">\n\n            <p>Colocalo en el escaner.</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row> \n\n  </ion-grid>    \n\n</ion-content>\n\n<ion-footer no-border transparent>\n\n <p></p>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\boleto-v\boleto-v.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], BoletoVPage);
    return BoletoVPage;
}());

//# sourceMappingURL=boleto-v.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturacionMPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-facturacion-m',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\facturacion-m\facturacion-m.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n            <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n            </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>  \n\n  <ion-grid>     \n\n  <ion-list>     \n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h1>Facturación</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block round id="btn" (click)="RFC()">Registrar R.F.C</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br><br>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n            <ion-item id="caja"> \n\n              <ion-label>Seleccionar...</ion-label>\n\n              <ion-select [(ngModel)]="Seleccion">\n\n                <ion-option value="R">R.F.C</ion-option>\n\n                <ion-option value="C">CURP</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n        </ion-col>    \n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <ion-item id="caja"> \n\n            <ion-label>Concepto...</ion-label>\n\n              <ion-select [(ngModel)]="Seleccion">\n\n                <ion-option value="R">Datos1</ion-option>\n\n                <ion-option value="C">Datos2</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br><br><br>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block  id="btn" (click)="enviar()">Enviar</button>\n\n        </ion-col>\n\n      </ion-row>            \n\n  </ion-list>\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\facturacion-m\facturacion-m.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FacturacionMPage);
    return FacturacionMPage;
}());

//# sourceMappingURL=facturacion-m.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarBPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inicio_inicio__ = __webpack_require__(65);
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

 //conexión

var RegistrarBPage = /** @class */ (function () {
    function RegistrarBPage(alertCtrl, loadingCtrl, http, toastCtrl, elementRef, fb, storage, navCtrl, navParams, barcodeScanner) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.elementRef = elementRef;
        this.fb = fb;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.qrData = null;
        this.createdCode = null;
        this.date_complete = null;
        this.name = null;
        this.surname = null;
        this.mail = null;
        this.identificator = null;
        this.data = this.fb.group({
            plates: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z0-9_]{7,10}$/)]],
            model: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(25)]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^[0-9]{3,15}$/)]],
            color: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z]{3,15}$/)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^[0-9]{10}$/)]],
            identificator: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
        });
    }
    //Metodos
    RegistrarBPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get('confirmed').then(function (res_confirmed) {
            _this.storage.get('client_n').then(function (res_nombre) {
                _this.storage.get('client_sur').then(function (res_apellido) {
                    _this.storage.get('id_client').then(function (res_id_client) {
                        if (res_confirmed.leght != 0 && res_nombre.leght != 0 && res_apellido.leght != 0 && res_id_client.leght != 0) {
                            if (res_confirmed != null && res_nombre != null && res_apellido != null && res_id_client != null) {
                                _this.name = res_nombre;
                                _this.surname = res_apellido;
                                _this.mail = res_confirmed;
                            }
                        }
                    });
                });
            });
        });
    };
    RegistrarBPage.prototype.message = function (idM) {
        var _this = this;
        if (idM == 1) {
            var message = this.toastCtrl.create({
                message: 'Escriba el modelo de su carro.',
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
                message: 'Escriba sus placas sin guion.',
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
                message: 'Escriba el año YYYY.',
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
                message: 'Escriba el color de su auto máximo 15 caracteres',
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
                message: 'Escriba su número de teléfono.',
                duration: 2000,
                position: 'top',
            });
            message.present().then(function () {
                var inputElement = _this.elementRef.nativeElement.getElementsByTagName('input')[4];
                inputElement.focus();
            });
        }
    };
    RegistrarBPage.prototype.Scan = function () {
        var _this = this;
        this.options = { prompt: 'Escanea el qr de tu ticket.', disableAnimations: true };
        this.barcodeScanner.scan(this.options).then(function (data) {
            _this.identificator = data['text'];
        }).catch(function (err) {
            console.log('Error:', err);
        });
    };
    RegistrarBPage.prototype.Save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loading.present();
        var url = 'http://138.68.48.252:3000/Api/users/check_in_ticket';
        var body = JSON.stringify({ name: this.name, surname: this.surname, mail: this.mail, plates: this.data.value.plates, model: this.data.value.model, year: this.data.value.year, color: this.data.value.color, phone: this.data.value.phone, id: this.data.value.identificator });
        this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
            if (res['state'] === 'exist') {
                var error = _this.alertCtrl.create({
                    title: 'Aviso',
                    message: "Registro ya hecho.",
                    buttons: ['Entendido']
                });
                error.present();
                loading.dismiss();
            }
            else if (res['state'] === true) {
                _this.storage.set('virtual_ticket', _this.identificator);
                _this.storage.set('first_t', true);
                var perfect = _this.alertCtrl.create({
                    title: 'Perfecto',
                    message: "Exito al registrar tu boleto.",
                    buttons: ['Entendido']
                });
                perfect.present();
                loading.dismiss();
                var currentIndex_1 = _this.navCtrl.getActive().index;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__inicio_inicio__["a" /* InicioPage */]).then(function () {
                    _this.navCtrl.remove(currentIndex_1);
                });
            }
        }, function (err) {
            var error = _this.alertCtrl.create({
                title: 'Alerta',
                message: "Datos no enviados.",
                buttons: ['Entendido']
            });
            error.present();
            loading.dismiss();
        });
    };
    RegistrarBPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registrar-b',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\registrar-b\registrar-b.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n      <ion-row align-items-center>  \n\n          <button ion-button block outline round icon-left color="btnB" (click)="Scan()"><ion-icon name="barcode"></ion-icon>Escanear QR</button>   \n\n        </ion-row>\n\n      <form [formGroup]="data" (ngSubmit)="Save()" novalidate>  \n\n        <ion-list>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                  <ion-item>\n\n                    <ion-label floating>Modelo</ion-label>\n\n                    <ion-input (click)="message(1)" type="text" formControlName="model" value="{{model}}"></ion-input>\n\n                  </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label floating>Placas</ion-label>\n\n                  <ion-input (click)="message(2)" type="text" formControlName="plates" value="{{plates}}"></ion-input>        \n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label floating>Año</ion-label>\n\n                  <ion-input (click)="message(3)" type="tel" formControlName="year" value="{{year}}"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>  \n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label floating>color</ion-label>\n\n                  <ion-input (click)="message(4)" type="text" formControlName="color"  value="{{color}}"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label floating>Teléfono</ion-label>\n\n                  <ion-input (click)="message(5)" type="tel" formControlName="phone"  value="{{phone}}"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <ion-item hidden>\n\n              <ion-input type="text" formControlName="identificator" value="{{identificator}}"></ion-input>\n\n          </ion-item>                      \n\n        </ion-list>\n\n         <div padding>\n\n          <button ion-button color="primary" outline round [disabled]="data.invalid" block>Registrar boleto</button>\n\n        </div>\n\n      </form> \n\n  </ion-grid>   \n\n</ion-content>\n\n<ion-footer no-border transparent>\n\n  <p></p>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\registrar-b\registrar-b.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], RegistrarBPage);
    return RegistrarBPage;
}());

//# sourceMappingURL=registrar-b.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservacionBPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


 //Manejo de cache

 //conexión
var ReservacionBPage = /** @class */ (function () {
    function ReservacionBPage(alertCtrl, loadingCtrl, http, toastCtrl, elementRef, fb, storage, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.elementRef = elementRef;
        this.fb = fb;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //private secureKey:string=null;
        //private secureIV:string=null;
        this.date_e = [];
        this.checkin = null;
        this.checkout = null;
        this.one_day = 86400000;
        this.one_hour = 3600000;
        this.spanTotal = null;
        this.inTotal = null;
        this.spanRestante = null;
        this.reserva = '109.00';
        this.estancia = [];
        this.data_client = [];
        this.data_car = [];
        this.conten = false;
        this.data = this.fb.group({
            fechE: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            hrE: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            fechS: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            hrS: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            check_y: [true],
            check_no: [false],
        });
        storage.get('confirmed').then(function (res_confirmed) {
            storage.get('client_n').then(function (res_nombre) {
                storage.get('client_sur').then(function (res_apellido) {
                    storage.get('virtual_ticket').then(function (res_token_id) {
                        storage.get('car_data').then(function (res_car_data) {
                            if (res_confirmed.leght != 0 && res_nombre.leght != 0 && res_apellido.leght != 0 && res_token_id.leght != 0) {
                                if (res_confirmed != null && res_nombre != null && res_apellido != null && res_token_id != null) {
                                    if (res_car_data == null || res_car_data.leght == 0) {
                                        var loading_1 = _this.loadingCtrl.create({
                                            content: 'Cargando...'
                                        });
                                        loading_1.present();
                                        var url = 'http://138.68.48.252:3000/Api/users/consult_ticket';
                                        var body = JSON.stringify({ nombre: res_nombre, correo: res_confirmed, id: res_confirmed });
                                        _this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
                                            if (res['state'] === false) {
                                                var error = _this.alertCtrl.create({
                                                    title: 'Aviso',
                                                    message: "Datos no validos vuelva a iniciar sesión.",
                                                    buttons: ['Entendido']
                                                });
                                                error.present();
                                                loading_1.dismiss();
                                            }
                                            else if (res['state'] === true) {
                                                _this.data_car = [res['placas'], res['modelo'], res['año'], res['color'], res['tel']];
                                                _this.data_client = [res_confirmed, res_nombre, res_apellido, res_token_id];
                                                loading_1.dismiss();
                                            }
                                        }, function (err) {
                                            var error = _this.alertCtrl.create({
                                                title: 'Alerta',
                                                message: "Datos no enviados.",
                                                buttons: ['Entendido']
                                            });
                                            error.present();
                                            loading_1.dismiss();
                                        });
                                    }
                                    else {
                                        var car_data = JSON.parse(res_car_data);
                                        _this.data_car = [car_data[0].placas, car_data[0].modelo, car_data[0].año, car_data[0].color, car_data[0].tel];
                                        _this.data_client = [res_confirmed, res_nombre, res_apellido, res_token_id];
                                    }
                                }
                                else {
                                    _this.conten = true;
                                }
                            }
                            else {
                                _this.conten = true;
                            }
                        });
                    });
                });
            });
        });
    }
    //Metodos
    ReservacionBPage.prototype.ionViewCanEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ReservacionBPage.prototype.calculate = function () {
        var date = this.data.value.fechE.split("-");
        var date_hr = this.data.value.hrE.split(":");
        var date_s = this.data.value.fechS.split("-");
        var date_hr_s = this.data.value.hrS.split(":");
        this.date_e = [date_hr[0], date_hr[1]];
        //List of prices.
        var prices = [
            0, 109, 218, 327, 436, 545, 600,
            600, 709, 818, 927, 1036, 1150
        ];
        //List of the cost for extra hours.
        var extra = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];
        this.checkin = new Date(date + ' ' + date_hr[0] + ':' + date_hr[1]);
        this.checkout = new Date(date_s + ' ' + date_hr_s[0] + ':' + date_hr_s[1]);
        var difference_ms = this.checkout - this.checkin;
        var estancia = Math.round(difference_ms / this.one_day);
        var estanciaHoras = Math.ceil(difference_ms / this.one_hour);
        var horasExtra = estanciaHoras - (estancia * 24);
        var month = 12;
        var diferencia = estancia - 28;
        var estanciaProlongada = (prices[month] + prices[diferencia]);
        var estanciaProlHoras = (estanciaProlongada + extra[horasExtra]);
        if (estancia > 11) {
            this.spanTotal = (prices[12]) + ".00";
            this.inTotal = (prices[12]) + ".00";
            this.spanRestante = (prices[12] - prices[1]) + ".00";
        }
        else {
            if (horasExtra > 0 && horasExtra < 10) {
                this.spanTotal = (prices[estancia] + extra[horasExtra]) + ".00";
                this.inTotal = (prices[estancia] + extra[horasExtra]) + ".00";
                this.spanRestante = (prices[estancia] - prices[1]) + ".00";
            }
            if (horasExtra >= 5 && estancia == 5 || estancia == 6 || estancia == 7 && horasExtra < 1) {
                this.spanTotal = "600" + ".00";
                this.inTotal = "600" + ".00";
                this.spanRestante = (prices[estancia] - prices[1]) + ".00";
            }
            if (horasExtra > 9) {
                this.spanTotal = (prices[estancia + 1]) + ".00";
                this.inTotal = (prices[estancia + 1]) + ".00";
                this.spanRestante = (prices[estancia] - prices[1]) + ".00";
            }
            if (horasExtra < 1) {
                this.spanTotal = (prices[estancia]) + ".00";
                this.inTotal = (prices[estancia]) + ".00";
                this.spanRestante = (prices[estancia] - prices[1]) + ".00";
            }
        }
        if (estancia > 11 && estancia <= 28) {
            this.spanTotal = (prices[12]) + ".00";
            this.inTotal = (prices[12]) + ".00";
            this.spanRestante = (prices[12] - prices[1]) + ".00";
        }
        else {
            if (horasExtra > 0 && horasExtra < 10) {
                this.spanTotal = (prices[estancia] + extra[horasExtra]) + ".00";
                this.inTotal = (prices[estancia] + extra[horasExtra]) + ".00";
                this.spanRestante = (prices[estancia] - prices[1]) + ".00";
            }
            if (horasExtra >= 5 && estancia == 5 || estancia == 6 || estancia == 7 && horasExtra < 1) {
                this.spanTotal = "600" + ".00";
                this.inTotal = "600" + ".00";
                this.spanRestante = (prices[estancia] - prices[1]) + ".00";
            }
            if (horasExtra > 9) {
                this.spanTotal = (prices[estancia + 1]) + ".00";
                this.inTotal = (prices[estancia + 1]) + ".00";
                this.spanRestante = (prices[estancia] - prices[1]) + ".00";
            }
            if (horasExtra < 1) {
                this.spanTotal = (prices[estancia]) + ".00";
                this.inTotal = (prices[estancia]) + ".00";
                this.spanRestante = (prices[estancia] - prices[1]) + ".00";
            }
            // What to do in case of estancia<28
            if (estancia > 39 && estancia <= 56) {
                this.spanTotal = (prices[month] * 2) + ".00";
                this.inTotal = (prices[month] * 2) + ".00";
                this.spanRestante = (prices[month] * 2 - prices[1]) + ".00";
            }
            if (estancia >= 29 && estancia <= 39) {
                this.spanTotal = (estanciaProlongada) + ".00";
                this.inTotal = (estanciaProlongada) + ".00";
                this.spanRestante = (estanciaProlongada - prices[1]) + ".00";
                if (horasExtra > 0 && horasExtra < 10) {
                    this.spanTotal = (estanciaProlHoras) + ".00";
                    this.inTotal = (estanciaProlHoras) + ".00";
                    this.spanRestante = (estanciaProlHoras - prices[1]) + ".00";
                }
                if (horasExtra >= 5 && diferencia == 5 || diferencia == 6 || diferencia == 7 && horasExtra < 1) {
                    this.spanTotal = (prices[12] + 600) + ".00";
                    this.inTotal = (prices[12] + 600) + ".00";
                    this.spanRestante = (prices[12] + 600 - prices[1]) + ".00";
                }
                if (horasExtra > 9) {
                    this.spanTotal = (prices[month] + prices[diferencia + 1]) + ".00";
                    this.inTotal = (prices[month] + prices[diferencia + 1]) + ".00";
                    this.spanRestante = (prices[month] + prices[diferencia] - prices[1]) + ".00";
                }
                if (horasExtra < 1) {
                    this.spanTotal = (estanciaProlongada) + ".00";
                    this.inTotal = (estanciaProlongada) + ".00";
                    this.spanRestante = (estanciaProlongada - prices[1]) + ".00";
                }
            }
            else {
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
        this.estancia = [estancia, estanciaHoras, horasExtra];
        if (this.spanRestante < 0) {
            this.spanRestante = "0.00";
        }
        return true;
    };
    ReservacionBPage.prototype.Save = function () {
        var _this = this;
        if (this.inTotal >= 109.00) {
            if (this.data.value.check_y == true && this.data.value.check_no == false || this.data.value.check_y == false && this.data.value.check_no == true) {
                this.storage.get('info_card').then(function (res_card) {
                    if (res_card == null || res_card == '' || res_card.leght == 0) {
                        var prompt_1 = _this.alertCtrl.create({
                            title: 'Pago por Tarjeta',
                            message: 'Ingrese su información:',
                            inputs: [
                                {
                                    name: 'holderName',
                                    placeholder: 'Nombre completo',
                                    type: "text"
                                },
                                {
                                    name: 'NoT',
                                    placeholder: 'No.Tarjeta',
                                    type: "tel"
                                },
                                {
                                    name: 'exyear',
                                    placeholder: 'año de vencimiento AA',
                                    type: "tel"
                                },
                                {
                                    name: 'exmonth',
                                    placeholder: 'mes de vencimiento MM',
                                    type: "tel"
                                },
                                {
                                    name: 'cvv2',
                                    placeholder: 'CVV',
                                    type: "tel"
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        //console.log(data);
                                    }
                                },
                                {
                                    text: 'Guardar y continuar',
                                    handler: function (data) {
                                        OpenPay.setId('mxr5cuiz4h15togw5xyw');
                                        OpenPay.setApiKey('pk_04b526e095b44b06b8c817939ab78bf6');
                                        OpenPay.setSandboxMode(true);
                                        var deviceSessionId = OpenPay.deviceData.setup("formId", "deviceIdHiddenFieldName");
                                        if (OpenPay.card.validateCardNumber(data.NoT) == true) {
                                            if (OpenPay.card.validateCVC(data.cvv2, data.NoT) == true) {
                                                if (OpenPay.card.validateExpiry(data.exmonth, data.exyear)) {
                                                    var loading_2 = _this.loadingCtrl.create({
                                                        spinner: 'hide',
                                                        content: '<img src="assets/imgs/logo_openpay.png"/><br><br><br><div><h5>Pagando <img  width="50" height="13" src="assets/imgs/load.gif"/></h5></div>'
                                                    });
                                                    loading_2.present();
                                                    OpenPay.token.create({
                                                        "card_number": data.NoT,
                                                        "holder_name": data.holderName,
                                                        "expiration_year": data.exyear,
                                                        "expiration_month": data.exmonth,
                                                        "cvv2": data.cvv2,
                                                    }, function (sucess_callbak) {
                                                        console.log(sucess_callbak);
                                                        var url = 'http://138.68.48.252:3000/Api/users/reservations';
                                                        var body = JSON.stringify({ mail: _this.data_client[0], nombre: data.holderName, ticket: _this.data_client[3],
                                                            fecha: _this.data.value.fechE, fecha_h: _this.data.value.hrE, fecha_s: _this.data.value.fechS, fecha_sh: _this.data.value.hrS,
                                                            costo: _this.inTotal, reservar: _this.reserva, token_id: sucess_callbak.data.id, restante: _this.spanRestante, limpiar: _this.data.value.check_y,
                                                            session_id: deviceSessionId, estancia: _this.estancia[0], estanciaHoras: _this.estancia[1], horasExtra: _this.estancia[2],
                                                            placas: _this.data_car[0], modelo: _this.data_car[1], año: _this.data_car[2], color: _this.data_car[3], tel: _this.data_car[4] });
                                                        _this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
                                                            if (res['state'] === false) {
                                                                var error = _this.alertCtrl.create({
                                                                    title: 'Aviso',
                                                                    message: "Ocurrió un problema al intentar hacer el pago.",
                                                                    buttons: ['Entendido']
                                                                });
                                                                error.present();
                                                                loading_2.dismiss();
                                                            }
                                                            else if (res['state'] === true) {
                                                                _this.storage.set('info_card', JSON.stringify([{
                                                                        card_number: data.NoT,
                                                                        holder_name: data.holderName,
                                                                        expiration_year: data.exyear,
                                                                        expiration_month: data.exmonth,
                                                                        cvv2: data.cvv2,
                                                                    }]));
                                                                var correct = _this.alertCtrl.create({
                                                                    title: 'Perfecto',
                                                                    message: "Se le enviará un correo con los datos de la reservación.",
                                                                    buttons: ['Entendido']
                                                                });
                                                                correct.present();
                                                                loading_2.dismiss();
                                                            }
                                                            else if (res['state'] === 'exist') {
                                                                var correct = _this.alertCtrl.create({
                                                                    title: 'Avertencia',
                                                                    message: "Reservación ya hecha.",
                                                                    buttons: ['Entendido']
                                                                });
                                                                correct.present();
                                                                loading_2.dismiss();
                                                            }
                                                        }, function (err) {
                                                            var error = _this.alertCtrl.create({
                                                                title: 'Alerta',
                                                                message: "Datos no enviados.",
                                                                buttons: ['Entendido']
                                                            });
                                                            error.present();
                                                            loading_2.dismiss();
                                                        });
                                                    }, function (error_callbak) {
                                                        var error = _this.alertCtrl.create({
                                                            title: 'Alerta',
                                                            message: "Datos erroneos.",
                                                            buttons: ['Entendido']
                                                        });
                                                        error.present();
                                                        loading_2.dismiss();
                                                    });
                                                }
                                                else {
                                                    var error = _this.alertCtrl.create({
                                                        title: 'Error',
                                                        message: 'Fecha no valida.',
                                                        buttons: ['Entendido']
                                                    });
                                                    error.present();
                                                }
                                            }
                                            else {
                                                var error = _this.alertCtrl.create({
                                                    title: 'Error',
                                                    message: 'Tu número de seguridad no es valido.',
                                                    buttons: ['Entendido']
                                                });
                                                error.present();
                                            }
                                        }
                                        else {
                                            var error = _this.alertCtrl.create({
                                                title: 'Error',
                                                message: 'El número de tarjeta no valida.',
                                                buttons: ['Entendido']
                                            });
                                            error.present();
                                        }
                                    }
                                }
                            ]
                        });
                        prompt_1.present();
                    }
                    else {
                        var card_1 = JSON.parse(res_card);
                        OpenPay.setId('mxr5cuiz4h15togw5xyw');
                        OpenPay.setApiKey('pk_04b526e095b44b06b8c817939ab78bf6');
                        OpenPay.setSandboxMode(true);
                        var deviceSessionId = OpenPay.deviceData.setup("formId", "deviceIdHiddenFieldName");
                        if (OpenPay.card.validateCardNumber(card_1[0].card_number) == true) {
                            if (OpenPay.card.validateCVC(card_1[0].cvv2, card_1[0].card_number) == true) {
                                if (OpenPay.card.validateExpiry(card_1[0].exmonth, card_1[0].exyear)) {
                                    var loading_3 = _this.loadingCtrl.create({
                                        spinner: 'hide',
                                        content: '<img src="assets/imgs/logo_openpay.png"/><br><br><br><div><h5>Pagando <img  width="50" height="13" src="assets/imgs/load.gif"/></h5></div>'
                                    });
                                    loading_3.present();
                                    OpenPay.token.create({
                                        "card_number": card_1[0].card_number,
                                        "holder_name": card_1[0].holderName,
                                        "expiration_year": card_1[0].exyear,
                                        "expiration_month": card_1[0].exmonth,
                                        "cvv2": card_1[0].cvv2,
                                    }, function (sucess_callbak) {
                                        var url = 'http://138.68.48.252:3000/Api/users/reservations';
                                        var body = JSON.stringify({ mail: _this.data_client[0], nombre: card_1[0].holderName, ticket: _this.data_client[3],
                                            fecha: _this.data.value.fechE, fecha_h: _this.data.value.hrE, fecha_s: _this.data.value.fechS, fecha_sh: _this.data.value.hrS,
                                            costo: _this.inTotal, reservar: _this.reserva, token_id: sucess_callbak.data.id, restante: _this.spanRestante, limpiar: _this.data.value.check_y,
                                            session_id: deviceSessionId, estancia: _this.estancia[0], estanciaHoras: _this.estancia[1], horasExtra: _this.estancia[2],
                                            placas: _this.data_car[0], modelo: _this.data_car[1], año: _this.data_car[2], color: _this.data_car[3], tel: _this.data_car[4] });
                                        _this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
                                            if (res['state'] === false) {
                                                var error = _this.alertCtrl.create({
                                                    title: 'Aviso',
                                                    message: "Ocurrió un problema al intentar hacer el pago.",
                                                    buttons: ['Entendido']
                                                });
                                                error.present();
                                                loading_3.dismiss();
                                            }
                                            else if (res['state'] === true) {
                                                var correct = _this.alertCtrl.create({
                                                    title: 'Perfecto',
                                                    message: "Se le enviará un correo con los datos de la reservación.",
                                                    buttons: ['Entendido']
                                                });
                                                correct.present();
                                                loading_3.dismiss();
                                            }
                                            else if (res['state'] === 'exist') {
                                                var correct = _this.alertCtrl.create({
                                                    title: 'Avertencia',
                                                    message: "Reservación ya hecha.",
                                                    buttons: ['Entendido']
                                                });
                                                correct.present();
                                                loading_3.dismiss();
                                            }
                                        }, function (err) {
                                            var error = _this.alertCtrl.create({
                                                title: 'Alerta',
                                                message: "Datos no enviados.",
                                                buttons: ['Entendido']
                                            });
                                            error.present();
                                            loading_3.dismiss();
                                        });
                                    }, function (error_callbak) {
                                        var error = _this.alertCtrl.create({
                                            title: 'Alerta',
                                            message: "Datos erroneos.",
                                            buttons: ['Entendido']
                                        });
                                        error.present();
                                        loading_3.dismiss();
                                    });
                                }
                                else {
                                    var error = _this.alertCtrl.create({
                                        title: 'Error',
                                        message: 'Fecha no valida.',
                                        buttons: ['Entendido']
                                    });
                                    error.present();
                                }
                            }
                            else {
                                var error = _this.alertCtrl.create({
                                    title: 'Error',
                                    message: 'Tu número de seguridad no es valido.',
                                    buttons: ['Entendido']
                                });
                                error.present();
                            }
                        }
                        else {
                            var error = _this.alertCtrl.create({
                                title: 'Error',
                                message: 'El número de tarjeta no valida.',
                                buttons: ['Entendido']
                            });
                            error.present();
                        }
                    }
                });
            }
            else if (this.data.value.check_y == false && this.data.value.check_no == false) {
                var error = this.alertCtrl.create({
                    title: 'Alerta',
                    message: "Seleccione Si o No para el lavado de su auto.",
                    buttons: ['Entendido']
                });
                error.present();
            }
            else {
                var error = this.alertCtrl.create({
                    title: 'Alerta',
                    message: "Solo puede seleccionar uno.",
                    buttons: ['Entendido']
                });
                error.present();
            }
        }
        else {
            var error = this.alertCtrl.create({
                title: 'Alerta',
                message: "Estancia mínima de 10 hrs",
                buttons: ['Entendido']
            });
            error.present();
        }
    };
    ReservacionBPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reservacion-b',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\reservacion-b\reservacion-b.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo">\n\n  <ion-list>\n\n    <ion-grid>\n\n      <form [formGroup]="data" (ngSubmit)="Save()" [hidden]="conten" novalidate>  \n\n        <ion-row align-items-center>\n\n          <ion-col id="btnL">\n\n            <h4>Entrada a MAC-PARKK</h4>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <ion-item id="tam">\n\n              <ion-label id="btnL" floating>Fecha de Entrada</ion-label>\n\n              <!---<ion-input type="text" name="fechE" [(ngModel)]="data.fechE"></ion-input>-->\n\n              <ion-datetime cancelText="Cancelar" doneText="Aceptar" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" formControlName="fechE"></ion-datetime>                \n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <ion-item id="tamB">   \n\n              <ion-label id="btnL" floating>Hora de Entrada</ion-label>\n\n              <!---<ion-input type="text" name="hrE" [(ngModel)]="data.hrE"></ion-input>-->\n\n              <ion-datetime cancelText="Cancelar" doneText="Aceptar" displayFormat="HH:mm A" pickerFormat="HH:mm A" formControlName="hrE"></ion-datetime>                \n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row align-items-center>\n\n          <ion-col id="btnL">\n\n            <h4>Arrivo a GDL</h4>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row align-items-center>\n\n          <ion-col col-6>\n\n            <ion-item id="tam">\n\n              <ion-label id="btnL" floating>Fecha de llegada</ion-label>\n\n              <!----<ion-input type="text" name="fechE" [(ngModel)]="data.fechE"></ion-input>-->\n\n              <ion-datetime cancelText="Cancelar" doneText="Aceptar" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" formControlName="fechS"></ion-datetime>        \n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <ion-item id="tamB">   \n\n              <ion-label id="btnL" floating>Hora de llegada</ion-label>\n\n              <ion-datetime cancelText="Cancelar" doneText="Aceptar" displayFormat="HH:mm A" pickerFormat="HH:mm A" formControlName="hrS"></ion-datetime>                \n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row align-items-center>\n\n          <ion-col id="btnL">\n\n            <h5>Precio Estimado</h5>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n              <p id="txtT">El precio puede variar conforme a la hora exacta de entrada y salida.</p>\n\n          </ion-col>\n\n          <ion-col *ngIf="data.invalid==false" class="item-A">\n\n              <ion-col *ngIf="calculate()==true" class="item-A">\n\n                <ion-item>   \n\n                  <p id="txtT">TOTAL APARTADO AL RESERVAR:</p><h6 id="txtT">${{reserva}}</h6>\n\n                </ion-item>\n\n                <ion-item>   \n\n                  <p id="txtT">TOTAL ESTIMADO:</p><h6 id="txtT">${{inTotal}}</h6>\n\n                </ion-item>\n\n                <ion-item>  \n\n                  <p id="txtT">TOTAL RESTANTE A TU SALIDA:</p><h6 id="txtT">${{spanRestante}}</h6> \n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-col>\n\n          <ion-col col-12 id="btnL">\n\n            <p>¿Lavado de auto?</p>  \n\n          </ion-col>\n\n          <ion-col id="btnL"> \n\n            <ion-checkbox color="btnB" formControlName="check_y" checked="true"></ion-checkbox>\n\n            <ion-label>Si</ion-label>\n\n          </ion-col>\n\n          <ion-col id="btnL">\n\n            <ion-checkbox color="btnB" formControlName="check_no" checked="false"></ion-checkbox> \n\n            <ion-label>No</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <div padding>\n\n            <button ion-button color="primary" outline round [disabled]="data.invalid" block>Reservar</button>\n\n        </div>\n\n      </form>\n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer no-border transparent>\n\n  <p></p>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\reservacion-b\reservacion-b.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ReservacionBPage);
    return ReservacionBPage;
}());

//# sourceMappingURL=reservacion-b.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroUPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(14);
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

 //conexión
var RegistroUPage = /** @class */ (function () {
    function RegistroUPage(alertCtrl, loadingCtrl, http, toastCtrl, elementRef, fb, storage, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.elementRef = elementRef;
        this.fb = fb;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrData = null;
        this.createdCode = null;
        this.car_data = [];
        this.identificator = null;
        this.name = null;
        this.mail = null;
        this.model = null;
        this.plates = null;
        this.year = null;
        this.color = null;
        this.phone = null;
        this.data = this.fb.group({
            plates: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z0-9_]{7,10}$/)]],
            model: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(25)]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(/^[0-9]{3,15}$/)]],
            color: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z]{3,15}$/)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(/^[0-9]{10}$/)]],
        });
        storage.get('confirmed').then(function (res_confirmed) {
            storage.get('client_n').then(function (res_nombre) {
                storage.get('client_sur').then(function (res_apellido) {
                    storage.get('virtual_ticket').then(function (res_token_id) {
                        storage.get('car_data').then(function (res_car_data) {
                            var loading = _this.loadingCtrl.create({
                                content: 'Cargando...'
                            });
                            loading.present();
                            if (res_car_data != null) {
                                if (res_car_data.leght != 0) {
                                    _this.car_data = JSON.parse(res_car_data);
                                    _this.plates = _this.car_data[0].placas;
                                    _this.model = _this.car_data[0].modelo;
                                    _this.year = _this.car_data[0].año;
                                    _this.color = _this.car_data[0].color;
                                    _this.phone = _this.car_data[0].tel;
                                    loading.dismiss();
                                }
                                else {
                                    var error = _this.alertCtrl.create({
                                        title: 'Alerta',
                                        message: "Vuelva a iniciar sesión.",
                                        buttons: ['Entendido']
                                    });
                                    error.present();
                                    loading.dismiss();
                                }
                            }
                            else {
                                if (res_confirmed.leght != 0 && res_nombre.leght != 0 && res_apellido.leght != 0 && res_token_id.leght != 0) {
                                    if (res_confirmed != null && res_nombre != null && res_apellido != null && res_token_id != null) {
                                        _this.identificator = res_token_id;
                                        _this.mail = res_confirmed;
                                        _this.name = res_nombre;
                                        var url = 'http://138.68.48.252:3000/Api/users/consult_ticket';
                                        var body = JSON.stringify({ nombre: res_nombre, correo: res_confirmed, id: _this.identificator });
                                        _this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
                                            if (res['state'] === false) {
                                                var error = _this.alertCtrl.create({
                                                    title: 'Aviso',
                                                    message: "Datos no validos vuelva a iniciar sesión.",
                                                    buttons: ['Entendido']
                                                });
                                                error.present();
                                                loading.dismiss();
                                            }
                                            else if (res['state'] === true) {
                                                _this.plates = res['placas'];
                                                _this.model = res['modelo'];
                                                _this.year = res['año'];
                                                _this.color = res['color'];
                                                _this.phone = res['tel'];
                                                loading.dismiss();
                                            }
                                        }, function (err) {
                                            var error = _this.alertCtrl.create({
                                                title: 'Alerta',
                                                message: "Datos no enviados.",
                                                buttons: ['Entendido']
                                            });
                                            error.present();
                                            loading.dismiss();
                                        });
                                    }
                                    else {
                                        var error = _this.alertCtrl.create({
                                            title: 'Alerta',
                                            message: "Vuelva a iniciar sesión.",
                                            buttons: ['Entendido']
                                        });
                                        error.present();
                                        loading.dismiss();
                                    }
                                }
                                else {
                                    loading.dismiss();
                                }
                            }
                        });
                    });
                });
            });
        });
    }
    //Metodos
    RegistroUPage.prototype.ionViewCanEnter = function () {
    };
    RegistroUPage.prototype.message = function (idM) {
        var _this = this;
        if (idM == 1) {
            var message = this.toastCtrl.create({
                message: 'Escriba el modelo de su carro.',
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
                message: 'Escriba sus placas.',
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
                message: 'Escriba el año YYYY.',
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
                message: 'Escriba el color de su auto máximo 15 caracteres',
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
                message: 'Escriba su número de teléfono.',
                duration: 2000,
                position: 'top',
            });
            message.present().then(function () {
                var inputElement = _this.elementRef.nativeElement.getElementsByTagName('input')[4];
                inputElement.focus();
            });
        }
    };
    RegistroUPage.prototype.Save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loading.present();
        var url = 'http://138.68.48.252:3000/Api/users/edit_ticket';
        var body = JSON.stringify({ nombre: this.name, correo: this.mail, id: this.identificator, placas: this.data.value.plates, modelo: this.data.value.model, año: this.data.value.year, color: this.data.value.color, tel: this.data.value.phone });
        this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
            if (res['state'] === false) {
                var error = _this.alertCtrl.create({
                    title: 'Aviso',
                    message: "Datos no validos vuelva a iniciar sesión.",
                    buttons: ['Entendido']
                });
                error.present();
                loading.dismiss();
            }
            else if (res['state'] === true) {
                _this.storage.set('car_data', JSON.stringify([{ placas: _this.data.value.plates, modelo: _this.data.value.model, año: _this.data.value.year, color: _this.data.value.color, tel: _this.data.value.phone }]));
                var correct = _this.alertCtrl.create({
                    title: 'Perfecto',
                    message: "Exito al actualizar tu boleto.",
                    buttons: ['Entendido']
                });
                correct.present();
                loading.dismiss();
            }
        }, function (err) {
            var error = _this.alertCtrl.create({
                title: 'Alerta',
                message: "Datos no enviados.",
                buttons: ['Entendido']
            });
            error.present();
            loading.dismiss();
        });
    };
    RegistroUPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registro-u',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\registro-u\registro-u.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n            <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n            </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n  </ion-header>\n\n  <ion-content id="Fondo" padding>\n\n    <ion-grid>\n\n        <form [formGroup]="data" (ngSubmit)="Save()" novalidate>  \n\n            <ion-list>\n\n              <ion-grid>\n\n                <ion-row>\n\n                  <ion-col>\n\n                      <ion-item>\n\n                        <ion-label floating>Modelo</ion-label>\n\n                        <ion-input (click)="message(1)" type="text" formControlName="model" value="{{model}}"></ion-input>\n\n                      </ion-item>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-label floating>Placas</ion-label>\n\n                      <ion-input (click)="message(2)" type="text" formControlName="plates" value="{{plates}}"></ion-input>        \n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-label floating>Año</ion-label>\n\n                      <ion-input (click)="message(3)" type="tel" formControlName="year" value="{{year}}"></ion-input>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>  \n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-label floating>color</ion-label>\n\n                      <ion-input (click)="message(4)" type="text" formControlName="color"  value="{{color}}"></ion-input>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                    <ion-item>\n\n                      <ion-label floating>Teléfono</ion-label>\n\n                      <ion-input (click)="message(5)" type="tel" formControlName="phone"  value="{{phone}}"></ion-input>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>                    \n\n            </ion-list>\n\n             <div padding>\n\n              <button ion-button color="primary" outline round [disabled]="data.invalid" block>Actualizar boleto</button>\n\n            </div>\n\n          </form> \n\n    </ion-grid>   \n\n  </ion-content>\n\n  <ion-footer no-border transparent>\n\n    <p></p>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\registro-u\registro-u.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegistroUPage);
    return RegistroUPage;
}());

//# sourceMappingURL=registro-u.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromocionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //conexión
var PromocionesPage = /** @class */ (function () {
    function PromocionesPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    //Metodos
    PromocionesPage.prototype.ionViewCanEnter = function () {
        /*var url = 'http://138.68.48.252:3000/payouts';
        let body=JSON.stringify({mensaje:'hola'});
        this.http.post(url,body,{headers: { 'Content-Type': 'application/json'}}).subscribe(res => {
          console.log(res);
        },err => {
          console.log(err);
        });*/
    };
    PromocionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-promociones',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\promociones\promociones.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n\n\n  </ion-grid>    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\promociones\promociones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PromocionesPage);
    return PromocionesPage;
}());

//# sourceMappingURL=promociones.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedirTPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
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

 //conexión

var PedirTPage = /** @class */ (function () {
    function PedirTPage(socket, alertCtrl, loadingCtrl, http, toastCtrl, elementRef, fb, storage, navCtrl, navParams) {
        var _this = this;
        this.socket = socket;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.elementRef = elementRef;
        this.fb = fb;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.img_driver = null;
        this.input_h = true;
        this.btn_h = false;
        this.data_transport = [{}];
        this.data_client = [{}];
        this.messages = [];
        this.message = '';
        this.min = 15;
        this.seg = '00';
        this.progress = 100;
        this.data_state = false;
        storage.get('confirmed').then(function (res_confirmed) {
            storage.get('client_n').then(function (res_nombre) {
                storage.get('client_sur').then(function (res_apellido) {
                    storage.get('virtual_ticket').then(function (res_token_id) {
                        storage.get('ask_transport').then(function (res_transport) {
                            storage.get('timer').then(function (res_timer) {
                                if (res_confirmed.leght != 0 && res_nombre.leght != 0 && res_apellido.leght != 0 && res_token_id.leght != 0) {
                                    if (res_confirmed != null && res_nombre != null && res_apellido != null && res_token_id != null) {
                                        if (res_transport == null || res_transport.leght == 0) {
                                            _this.btn_h = false;
                                            _this.data_client = [{ nombre: res_nombre, apellido: res_apellido, ticket: res_token_id }];
                                            _this.socket.connect();
                                            _this.socket.emit('subscribe', res_token_id);
                                            _this.getMessages(0);
                                            /*this.getMessages(0).subscribe(message => {
                                              this.messages.push(message);
                                            });*/
                                        }
                                        else if (res_transport != null || res_transport.leght != 0) {
                                            _this.data_client = [{ nombre: res_nombre, apellido: res_apellido, ticket: res_token_id }];
                                            var ask_transport = JSON.parse(res_transport);
                                            _this.data_transport = [{
                                                    chofer: ask_transport[0].chofer, model: ask_transport[0].model, plates: ask_transport[0].plates,
                                                    year: ask_transport[0].year, color: ask_transport[0].color, phone: ask_transport[0].tel, state: ask_transport[0].state
                                                }];
                                            _this.get_ask(res_token_id, res_timer);
                                        }
                                    }
                                    else {
                                        _this.btn_h = true;
                                    }
                                }
                                else {
                                    _this.btn_h = true;
                                }
                            });
                        });
                    });
                });
            });
        });
    }
    //Metodos
    PedirTPage.prototype.ionViewCanEnter = function () {
    };
    PedirTPage.prototype.en = function () {
        var key = 'aserrt12345';
        var plaintext = 'Hola probando encriptado.';
        var encrypted = aes256.encrypt(key, plaintext);
        var decrypted = aes256.decrypt(key, encrypted);
        console.log(encrypted);
        console.log(decrypted);
    };
    PedirTPage.prototype.Timer = function (s) {
        var _this = this;
        setTimeout(function () {
            if (parseInt(_this.min) === 0 && parseInt(_this.seg) === 0) {
                _this.min = '00';
                _this.seg = '00';
                return;
            }
            else if (parseInt(_this.min) <= 10 && parseInt(_this.min) > 0) {
                if (parseInt(_this.seg) <= 10 && parseInt(_this.seg) > 0) {
                    s = parseInt(s) - 1;
                    _this.seg = "0" + JSON.stringify(parseInt(_this.seg) - 1);
                    _this.progress_cal();
                    _this.Timer(s);
                }
                else {
                    s = parseInt(s) - 1;
                    if (parseInt(_this.seg) == 0) {
                        _this.min = "0" + JSON.stringify(parseInt(_this.min) - 1);
                        _this.seg = 59;
                        _this.progress_cal();
                        _this.Timer(s);
                    }
                    else {
                        _this.seg = parseInt(_this.seg) - 1;
                        _this.progress_cal();
                        _this.Timer(s);
                    }
                }
            }
            else {
                if (parseInt(_this.seg) <= 10 && parseInt(_this.seg) > 0) {
                    s = parseInt(s) - 1;
                    _this.seg = '0' + JSON.stringify(parseInt(_this.seg) - 1);
                    _this.progress_cal();
                    _this.Timer(s);
                }
                else {
                    s = parseInt(s) - 1;
                    if (parseInt(_this.seg) == 0) {
                        _this.min = parseInt(_this.min) - 1;
                        _this.seg = 59;
                        _this.progress_cal();
                        _this.Timer(s);
                    }
                    else {
                        _this.seg = parseInt(_this.seg) - 1;
                        _this.progress_cal();
                        _this.Timer(s);
                    }
                }
            }
        }, 1000);
    };
    PedirTPage.prototype.progress_cal = function () {
        var val = parseFloat(JSON.stringify(((parseFloat(this.min + '.' + this.seg) * 60) * 100) / 900));
        if (val <= 1 && val > 0) {
            this.progress = 1;
        }
        else if (val === 0) {
            this.progress = 0;
        }
        else {
            this.progress = parseInt(JSON.stringify(((parseFloat(this.min + '.' + this.seg) * 60) * 100) / 900));
        }
        return;
    };
    PedirTPage.prototype.change_img = function () {
        this.img_driver = 'assets/imgs/perfil.png';
    };
    PedirTPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
        this.storage.set('timer', [this.min, this.seg]);
    };
    PedirTPage.prototype.getMessages = function (x) {
        var _this = this;
        if (x === 0) {
            this.socket.on('consult-ask', function (data) {
                //console.log(data);
            });
            return 0;
        }
        if (x === 1) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Buscando...'
            });
            loading_1.present();
            this.socket.on('message', function (data) {
                if (data.state === false) {
                    _this.data_state = true;
                    var error = _this.alertCtrl.create({
                        title: 'Aviso',
                        message: "Petición de transporte no admitida,reservación previamente no hecha.",
                        buttons: ['Entendido']
                    });
                    error.present();
                    loading_1.dismiss();
                }
                else if (data.state === true) {
                    _this.storage.set('ask_transport', JSON.stringify([{ chofer: data.chofer, plates: data.placas, model: data.modelo, year: data.año, color: data.color, tel: data.tel }]));
                    _this.data_transport = [{ chofer: data.chofer, plates: data.placas, model: data.modelo, year: data.año, color: data.color, tel: data.tel }];
                    _this.input_h = false;
                    _this.btn_h = true;
                    _this.data_state = true;
                    _this.img_driver = 'assets/imgs/logo.png';
                    var correct = _this.alertCtrl.create({
                        title: 'Perfecto',
                        message: "Petición de transporte hecha.",
                        buttons: ['Entendido']
                    });
                    correct.present();
                    loading_1.dismiss();
                    _this.Timer(60);
                }
                else if (data.state === 'exist') {
                    _this.data_state = true;
                    var error = _this.alertCtrl.create({
                        title: 'Advertencia',
                        message: "Petición de transporte ya en curso.",
                        buttons: ['Entendido']
                    });
                    error.present();
                    loading_1.dismiss();
                }
            });
            if (this.data_state === false) {
                return 0;
            }
            else {
                this.data_state = false;
                loading_1.dismiss();
                return 0;
            }
        }
    };
    /*showToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    }*/
    PedirTPage.prototype.ask = function () {
        this.getMessages(1);
        this.socket.emit('ask', { nombre: this.data_client[0].nombre + ' ' + this.data_client[0].apellido, id: this.data_client[0].ticket });
        this.message = '';
    };
    PedirTPage.prototype.get_ask = function (res_token_id, res_timer) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Comprobando disponibildad...'
        });
        loading.present();
        var url = 'http://138.68.48.252:3000/Api/users/consult_ask_transport';
        var body = JSON.stringify({ id: res_token_id });
        this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
            if (res['state'] === false) {
                _this.storage.set('ask_transport', null);
                _this.data_transport = [{}];
                loading.dismiss();
                _this.socket.connect();
                _this.socket.emit('subscribe', res_token_id);
            }
            else if (res['state'] === true) {
                var correct = _this.alertCtrl.create({
                    title: 'Perfecto',
                    message: "Petición de transporte ya en curso.",
                    buttons: ['Entendido']
                });
                correct.present();
                _this.img_driver = 'assets/imgs/logo.png';
                _this.input_h = false;
                _this.btn_h = true;
                loading.dismiss();
                _this.socket.connect();
                _this.socket.emit('subscribe', res_token_id);
                _this.getMessages(0);
                if (res_timer == null) {
                    _this.Timer(60);
                }
                else {
                    _this.min = res_timer[0];
                    _this.seg = res_timer[1];
                    _this.progress = parseInt(JSON.stringify(((parseFloat(_this.min + '.' + _this.seg) * 60) * 100) / 900));
                    _this.Timer(_this.seg);
                }
            }
        }, function (err) {
            var error = _this.alertCtrl.create({
                title: 'Alerta',
                message: "Datos no enviados.",
                buttons: ['Entendido']
            });
            error.present();
            loading.dismiss();
        });
    };
    PedirTPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pedir-t',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\pedir-t\pedir-t.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n    <br>\n\n    <ion-row align-items-center>\n\n      <ion-col class="profile_img_col"><img id="imgR" src="{{img_driver}}" (error)="change_img()"/></ion-col>\n\n    </ion-row>\n\n    <br>\n\n    <ion-row align-items-center>\n\n        <ion-col><h5 class="txtC">{{min}}:{{seg}}</h5></ion-col>\n\n    </ion-row>\n\n    <progress-bar [progress]="progress" [color-degraded]="{\'0\': \'#00cbcb\',  \'15\': \'#f9c3d3\', \'25\': \'#fd8c8e\'}"></progress-bar>\n\n    <ion-row align-items-center [hidden]="input_h">\n\n        <ion-col class="txtC"><ion-label>Por favor espere en la sección de taxis.</ion-label></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid [hidden]="input_h">\n\n    <ion-row align-items-center [hidden]="input_h">\n\n      <ion-col>\n\n        <ion-item>\n\n          <ion-label floating>Chofer</ion-label>\n\n          <ion-input type="text" [disabled]="true" value="{{data_transport[0].chofer}}"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>  \n\n        <ion-row>\n\n          <ion-col>\n\n              <ion-item>\n\n                <ion-label floating>Modelo</ion-label>\n\n                <ion-input type="text" [disabled]="true" value="{{data_transport[0].model}}"></ion-input>\n\n              </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label floating>Placas</ion-label>\n\n              <ion-input type="text" [disabled]="true" value="{{data_transport[0].plates}}"></ion-input>        \n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label floating>Año</ion-label>\n\n              <ion-input type="tel"  [disabled]="true" value="{{data_transport[0].year}}"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>  \n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label floating>color</ion-label>\n\n              <ion-input type="text" [disabled]="true" value="{{data_transport[0].color}}"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label floating>Teléfono</ion-label>\n\n              <ion-input type="tel" [disabled]="true" value="{{data_transport[0].phone}}"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n  </ion-grid>\n\n  <ion-grid>\n\n      <div [hidden]="btn_h" padding>\n\n          <button ion-button color="primary" outline round  block (click)="ask()">Pedir</button>\n\n      </div>\n\n  </ion-grid>\n\n  <div [hidden]="btn_h" padding>\n\n      <button ion-button color="primary" outline round  block (click)="en()">Encriptar</button>\n\n  </div>\n\n</ion-content>\n\n<ion-footer no-border transparent>\n\n  <p></p>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\pedir-t\pedir-t.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PedirTPage);
    return PedirTPage;
}());

//# sourceMappingURL=pedir-t.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverMainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
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

 //conexión

var DriverMainPage = /** @class */ (function () {
    //data_state:Boolean=false;
    function DriverMainPage(socket, alertCtrl, loadingCtrl, http, toastCtrl, elementRef, fb, storage, navCtrl, navParams) {
        var _this = this;
        this.socket = socket;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.elementRef = elementRef;
        this.fb = fb;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orders = [];
        this.data_transport = [{}];
        this.data_driver = [{}];
        this.cantidad = '';
        this.id_client = null;
        this.messages = [];
        storage.get('confirmed').then(function (res_confirmed) {
            storage.get('client_n').then(function (res_nombre) {
                storage.get('client_sur').then(function (res_apellido) {
                    storage.get('order_clients').then(function (res_orders) {
                        storage.get('driver-transport').then(function (res_transport) {
                            if (res_confirmed.leght != 0 && res_nombre.leght != 0 && res_apellido.leght != 0) {
                                if (res_confirmed != null && res_nombre != null && res_apellido != null) {
                                    if (res_transport == null || res_transport.leght == 0) {
                                        _this.data_driver = [{ nombre: res_nombre, apellido: res_apellido, ticket: 'drivers-00' }];
                                        _this.socket.disconnect();
                                        var error = _this.alertCtrl.create({
                                            title: 'Advertencia',
                                            message: "Registre primero su transporte.",
                                            buttons: ['Entendido']
                                        });
                                        error.present();
                                        //this.socket.emit('subscribe','drivers-00');
                                        //this.getMessages(0);
                                    }
                                    else if (res_transport != null || res_transport.leght != 0) {
                                        _this.data_driver = [{ nombre: res_nombre, apellido: res_apellido, ticket: 'drivers-00' }];
                                        var driver_transport = JSON.parse(res_transport);
                                        _this.data_transport = [{
                                                model: driver_transport[0].model, plates: driver_transport[0].plates,
                                                year: driver_transport[0].year, color: driver_transport[0].color, phone: driver_transport[0].phone
                                            }];
                                        if (res_orders == null || res_orders.leght == 0) {
                                            var message = _this.toastCtrl.create({
                                                message: 'Espere a una nueva petición de transporte.',
                                                duration: 2000,
                                                position: 'top',
                                            });
                                            message.present();
                                        }
                                        else {
                                            var orders = JSON.parse(res_orders);
                                            _this.orders = orders;
                                        }
                                        _this.socket.connect();
                                        _this.socket.emit('subscribe', 'drivers-00');
                                        _this.getMessages();
                                    }
                                }
                                else {
                                }
                            }
                            else {
                            }
                        });
                    });
                });
            });
        });
    }
    //Metodos
    DriverMainPage.prototype.ionViewCanEnter = function () {
    };
    DriverMainPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    DriverMainPage.prototype.getFinish = function () {
        var _this = this;
        this.socket.on('res_finish', function (data) {
            if (data.state === "Finalizado") {
                _this.orders = [];
                _this.storage.set('order_clients', null);
                var correct = _this.alertCtrl.create({
                    title: 'Excelente',
                    message: "Viaje Finalizado.",
                    buttons: ['Entendido']
                });
                correct.present();
                return;
            }
            else if (data.state === "No Finalizado") {
                var error = _this.alertCtrl.create({
                    title: 'Aviso',
                    message: "Viaje NO finalizado.",
                    buttons: ['Entendido']
                });
                error.present();
                return;
            }
        });
    };
    DriverMainPage.prototype.getMessages = function () {
        var _this = this;
        this.storage.get('order_clients').then(function (res_orders) {
            _this.socket.on('consult-ask', function (data) {
                if (data.state != "added") {
                    var confirm_1 = _this.alertCtrl.create({
                        title: 'Nuevo cliente',
                        message: data.name,
                        buttons: [
                            {
                                text: 'Cancelar',
                                handler: function () {
                                    return;
                                }
                            },
                            {
                                text: 'Aceptar',
                                handler: function () {
                                    _this.take(data.from);
                                    var items;
                                    var date = new Date();
                                    var year = date.getFullYear().toString();
                                    var month = (date.getMonth() + 1).toString();
                                    var day = date.getDate().toString();
                                    var hr = date.getHours().toString();
                                    var min = date.getMinutes().toString();
                                    if (parseInt(month) < 10) {
                                        if (parseInt(min) < 10) {
                                            if (!res_orders) {
                                                _this.storage.set('order_clients', JSON.stringify([{ name: data.name, id_client: data.from, date: year + '-0' + month + '-' + day + ' ' + hr + ':0' + min }]));
                                                _this.orders = [{ name: data.name, id_client: data.from, date: year + '-0' + month + '-' + day + ' ' + hr + ':0' + min }];
                                            }
                                            else {
                                                items = JSON.parse((res_orders));
                                                items.push({ name: data.name, id_client: data.from, date: year + '-0' + month + '-' + day + ' ' + hr + ':0' + min });
                                                _this.storage.set('order_clients', JSON.stringify(items));
                                                _this.orders = items;
                                            }
                                        }
                                        else {
                                            if (!res_orders) {
                                                _this.storage.set('order_clients', JSON.stringify([{ name: data.name, id_client: data.from, date: year + '-0' + month + '-' + day + ' ' + hr + ':' + min }]));
                                                _this.orders = [{ name: data.name, id_client: data.from, date: year + '-0' + month + '-' + day + ' ' + hr + ':' + min }];
                                            }
                                            else {
                                                items = JSON.parse((res_orders));
                                                items.push({ name: data.name, id_client: data.from, date: year + '-0' + month + '-' + day + ' ' + hr + ':' + min });
                                                _this.storage.set('order_clients', JSON.stringify(items));
                                                _this.orders = items;
                                            }
                                        }
                                    }
                                    else {
                                        if (parseInt(min) < 10) {
                                            if (!res_orders) {
                                                _this.storage.set('order_clients', JSON.stringify([{ name: data.name, id_client: data.from, date: year + '-' + month + '-' + day + ' ' + hr + ':0' + min }]));
                                                _this.orders = [{ name: data.name, id_client: data.from, date: year + '-' + month + '-' + day + ' ' + hr + ':0' + min }];
                                            }
                                            else {
                                                items = JSON.parse((res_orders));
                                                items.push({ name: data.name, id_client: data.from, date: year + '-' + month + '-' + day + ' ' + hr + ':0' + min });
                                                _this.storage.set('order_clients', JSON.stringify(items));
                                                _this.orders = items;
                                            }
                                        }
                                        else {
                                            if (!res_orders) {
                                                _this.storage.set('order_clients', JSON.stringify([{ name: data.name, id_client: data.from, date: year + '-' + month + '-' + day + ' ' + hr + ':' + min }]));
                                                _this.orders = [{ name: data.name, id_client: data.from, date: year + '-' + month + '-' + day + ' ' + hr + ':' + min }];
                                            }
                                            else {
                                                items = JSON.parse((res_orders));
                                                items.push({ name: data.name, id_client: data.from, date: year + '-' + month + '-' + day + ' ' + hr + ':' + min });
                                                _this.storage.set('order_clients', JSON.stringify(items));
                                                _this.orders = items;
                                            }
                                        }
                                    }
                                    return;
                                }
                            }
                        ]
                    });
                    confirm_1.present();
                }
                return;
            });
            return;
        });
    };
    DriverMainPage.prototype.take = function (id) {
        //this.getMessages();
        this.socket.emit('driver-response', { driver: this.data_driver[0].nombre + ' ' + this.data_driver[0].apellido, id: id,
            plates: this.data_transport[0].plates, model: this.data_transport[0].model, year: this.data_transport[0].year,
            color: this.data_transport[0].color, tel: this.data_transport[0].phone
        });
    };
    DriverMainPage.prototype.finish_him = function () {
        if (this.orders != null && this.orders != [] && this.orders != [{}], this.orders != '') {
            var loading = this.loadingCtrl.create({
                content: 'Procesando...'
            });
            loading.present();
            this.getFinish();
            this.socket.emit('driver-finish-response', { driver: this.data_driver[0].nombre + ' ' + this.data_driver[0].apellido });
            loading.dismiss();
        }
        else {
            var error = this.alertCtrl.create({
                title: 'Aviso',
                message: "No hay viajes que finalizar.",
                buttons: ['Entendido']
            });
            error.present();
        }
    };
    DriverMainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-driver-main',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\driver-main\driver-main.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n      </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n    <h4 class="txtC">Transportar a:</h4> \n\n    <ion-list *ngFor="let order of orders;let in=index">\n\n      <h6 class="txtC" *ngIf="in!=null&&in.leght!=0">{{in+1}} persona(s)</h6>\n\n      <ion-card>\n\n        <ion-card-header>\n\n        </ion-card-header>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/imgs/perfil.png">\n\n          </ion-avatar>\n\n          <h2>{{order.name}}</h2>\n\n          <p>{{order.date}}</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n          <p></p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button icon-start clear small round>\n\n              <ion-icon name="bus"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n    </ion-list>\n\n    <ion-row class="txtC">\n\n      <ion-col>\n\n        <button ion-button icon-start outline block round (click)="finish_him()">\n\n          <ion-icon name="bus"></ion-icon>\n\n          <div>Terminar viaje</div>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer no-border transparent>\n\n <p></p>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\driver-main\driver-main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DriverMainPage);
    return DriverMainPage;
}());

//# sourceMappingURL=driver-main.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverTransportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(14);
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

 //conexión
var DriverTransportPage = /** @class */ (function () {
    function DriverTransportPage(alertCtrl, loadingCtrl, http, toastCtrl, elementRef, fb, storage, navCtrl, navParams, barcodeScanner) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.elementRef = elementRef;
        this.fb = fb;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.date_complete = null;
        this.driver = null;
        this.mail = null;
        this.identificator = null;
        this.data_transport = [{}];
        this.data = this.fb.group({
            plates: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z0-9_]{7,10}$/)]],
            model: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(25)]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^[0-9]{3,15}$/)]],
            color: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^[a-z A-Z ]{3,20}$/)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^[0-9]{10}$/)]],
        });
        storage.get('confirmed').then(function (res_confirmed) {
            storage.get('client_n').then(function (res_nombre) {
                storage.get('client_sur').then(function (res_apellido) {
                    storage.get('driver-transport').then(function (res_transport) {
                        storage.get('id_client').then(function (res_id_client) {
                            if (res_confirmed.leght != 0 && res_nombre.leght != 0 && res_apellido.leght != 0 && res_id_client.leght != 0) {
                                if (res_confirmed != null && res_nombre != null && res_apellido != null && res_id_client != null) {
                                    _this.driver = res_nombre + ' ' + res_apellido;
                                    _this.mail = res_confirmed;
                                    _this.identificator = res_id_client;
                                    if (res_transport == null || res_transport.leght == 0) { }
                                    else {
                                        var driver_transport = JSON.parse(res_transport);
                                        _this.data_transport = [{
                                                model: driver_transport[0].model, plates: driver_transport[0].plates,
                                                year: driver_transport[0].year, color: driver_transport[0].color, phone: driver_transport[0].phone
                                            }];
                                    }
                                }
                            }
                        });
                    });
                });
            });
        });
    }
    //Metodos
    DriverTransportPage.prototype.ionViewCanEnter = function () { };
    DriverTransportPage.prototype.message = function (idM) {
        var _this = this;
        if (idM == 1) {
            var message = this.toastCtrl.create({
                message: 'Escriba el modelo de su carro.',
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
                message: 'Escriba sus placas sin guion.',
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
                message: 'Escriba el año YYYY.',
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
                message: 'Escriba el color de su auto máximo 15 caracteres',
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
                message: 'Escriba su número de teléfono.',
                duration: 2000,
                position: 'top',
            });
            message.present().then(function () {
                var inputElement = _this.elementRef.nativeElement.getElementsByTagName('input')[4];
                inputElement.focus();
            });
        }
    };
    DriverTransportPage.prototype.Save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loading.present();
        var url = 'http://138.68.48.252:3000/Api/users/driver_check_transport';
        var body = JSON.stringify({ driver: this.driver, id: this.identificator, mail: this.mail, plates: this.data.value.plates, model: this.data.value.model, year: this.data.value.year, color: this.data.value.color, phone: this.data.value.phone });
        this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
            if (res['state'] === true) {
                _this.storage.set('driver-transport', JSON.stringify([{ chofer: _this.driver, id: _this.identificator, plates: _this.data.value.plates, model: _this.data.value.model, year: _this.data.value.year, color: _this.data.value.color, phone: _this.data.value.phone }]));
                var perfect = _this.alertCtrl.create({
                    title: 'Perfecto',
                    message: "Exito al subir la información.",
                    buttons: ['Entendido']
                });
                perfect.present();
                loading.dismiss();
            }
            if (res['state'] === false) {
                var error = _this.alertCtrl.create({
                    title: 'Advertencia',
                    message: "Falló al subir la información.",
                    buttons: ['Entendido']
                });
                error.present();
                loading.dismiss();
            }
        }, function (err) {
            var error = _this.alertCtrl.create({
                title: 'Alerta',
                message: "Datos no enviados.",
                buttons: ['Entendido']
            });
            error.present();
            loading.dismiss();
        });
    };
    DriverTransportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-driver-transport',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\driver-transport\driver-transport.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n            <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n            </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n  </ion-header>\n\n  <ion-content id="Fondo" padding>\n\n    <ion-grid>\n\n        <form [formGroup]="data" (ngSubmit)="Save()" novalidate>  \n\n          <ion-list>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col>\n\n                    <ion-item>\n\n                      <ion-label floating>Modelo</ion-label>\n\n                      <ion-input (click)="message(1)" type="text" formControlName="model" value="{{data_transport[0].model}}"></ion-input>\n\n                    </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <ion-item>\n\n                    <ion-label floating>Placas</ion-label>\n\n                    <ion-input (click)="message(2)" type="text" formControlName="plates" value="{{data_transport[0].plates}}"></ion-input>        \n\n                  </ion-item>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <ion-item>\n\n                    <ion-label floating>Año</ion-label>\n\n                    <ion-input (click)="message(3)" type="tel" formControlName="year" value="{{data_transport[0].year}}"></ion-input>\n\n                  </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>  \n\n                <ion-col>\n\n                  <ion-item>\n\n                    <ion-label floating>color</ion-label>\n\n                    <ion-input (click)="message(4)" type="text" formControlName="color"  value="{{data_transport[0].color}}"></ion-input>\n\n                  </ion-item>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <ion-item>\n\n                    <ion-label floating>Teléfono</ion-label>\n\n                    <ion-input (click)="message(5)" type="tel" formControlName="phone"  value="{{data_transport[0].phone}}"></ion-input>\n\n                  </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>                 \n\n          </ion-list>\n\n          <div padding>\n\n            <button ion-button color="primary" outline round [disabled]="data.invalid" block>Registrar Autómovil</button>\n\n          </div>\n\n        </form> \n\n    </ion-grid>   \n\n  </ion-content>\n\n  <ion-footer no-border transparent>\n\n    <p></p>\n\n  </ion-footer>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\driver-transport\driver-transport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], DriverTransportPage);
    return DriverTransportPage;
}());

//# sourceMappingURL=driver-transport.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\main\main.html"*/'<!--\n\n  Generated template for the MainPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>main</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecibosMPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recibos-m',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\recibos-m\recibos-m.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n            <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n            </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>  \n\n  <ion-grid>     \n\n  <ion-list>     \n\n      <ion-row align-items-center>\n\n        <ion-col id="btnL">\n\n          <h1>Recibos</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br><br>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n        </ion-col>\n\n      </ion-row>             \n\n  </ion-list>\n\n</ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\recibos-m\recibos-m.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecibosMPage);
    return RecibosMPage;
}());

//# sourceMappingURL=recibos-m.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilEPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_md5_typescript__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(15);
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
 //Manejo de cache
var PerfilEPage = /** @class */ (function () {
    function PerfilEPage(storage, http, alertCtrl, fb, navCtrl, navParams, camara, transfer, file, loadingCtrl) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camara = camara;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        //data:any={};
        this.nombre = '';
        this.appm = '';
        this.mail = '';
        this.password_o = '';
        this.pass_f = null;
        this.imgP = 'assets/imgs/perfil.png';
        this.level = null;
        this.data = this.fb.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            appm: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(25)]],
            mail: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{7,18}$/)]],
        });
        storage.get('confirmed').then(function (res_confirmed) {
            storage.get('client_n').then(function (res_nombre) {
                storage.get('client_sur').then(function (res_apellido) {
                    storage.get('pass_o').then(function (res_pass) {
                        storage.get('client_privilege').then(function (res_privilege) {
                            _this.level = res_privilege;
                            if (parseInt(res_privilege) == 2) {
                                var loading_1 = _this.loadingCtrl.create({
                                    content: 'Cargando...'
                                });
                                loading_1.present();
                                var url = 'http://138.68.48.252:3000/Api/drivers/consult_profile';
                                //var password=Md5.init(this.data.value.password);
                                var body = JSON.stringify({ nombre: res_nombre, apellido: res_apellido, correo: res_confirmed });
                                _this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
                                    if (res['state'] === false) {
                                        var error = _this.alertCtrl.create({
                                            title: 'Aviso',
                                            message: "Datos incorrectos,porfavor inicie su perfil de nuevo.",
                                            buttons: ['Entendido']
                                        });
                                        error.present();
                                        loading_1.dismiss();
                                    }
                                    else if (res['state'] === true) {
                                        loading_1.dismiss();
                                        _this.nombre = res['name'];
                                        _this.appm = res['surname'];
                                        _this.mail = res['mail'];
                                        _this.password_o = res_pass;
                                        _this.pass_f = '--------';
                                        //this.storage.set('confirmed',res['mail']);
                                        //this.storage.set('client_name',res['name']+' '+res['surname']);
                                    }
                                    else if (res['verificado'] == false) {
                                        var error = _this.alertCtrl.create({
                                            title: 'Aviso',
                                            message: "Antes de ingresar porfavor verifique su correo.",
                                            buttons: ['Entendido']
                                        });
                                        error.present();
                                        loading_1.dismiss();
                                    }
                                    else {
                                        loading_1.dismiss();
                                    }
                                }, function (err) {
                                    var error = _this.alertCtrl.create({
                                        title: 'Alerta',
                                        message: "Datos no obtenidos.",
                                        buttons: ['Entendido']
                                    });
                                    error.present();
                                    loading_1.dismiss();
                                });
                            }
                            else {
                                var loading_2 = _this.loadingCtrl.create({
                                    content: 'Cargando...'
                                });
                                loading_2.present();
                                var url = 'http://138.68.48.252:3000/Api/users/consult_profile';
                                //var password=Md5.init(this.data.value.password);
                                var body = JSON.stringify({ nombre: res_nombre, apellido: res_apellido, correo: res_confirmed });
                                _this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
                                    if (res['state'] === false) {
                                        var error = _this.alertCtrl.create({
                                            title: 'Aviso',
                                            message: "Datos incorrectos,porfavor inicie su perfil de nuevo.",
                                            buttons: ['Entendido']
                                        });
                                        error.present();
                                        loading_2.dismiss();
                                    }
                                    else if (res['state'] === true) {
                                        loading_2.dismiss();
                                        _this.nombre = res['name'];
                                        _this.appm = res['surname'];
                                        _this.mail = res['mail'];
                                        _this.password_o = res_pass;
                                        _this.pass_f = '--------';
                                        //this.storage.set('confirmed',res['mail']);
                                        //this.storage.set('client_name',res['name']+' '+res['surname']);
                                    }
                                    else if (res['verificado'] == false) {
                                        var error = _this.alertCtrl.create({
                                            title: 'Aviso',
                                            message: "Antes de ingresar porfavor verifique su correo.",
                                            buttons: ['Entendido']
                                        });
                                        error.present();
                                        loading_2.dismiss();
                                    }
                                    else {
                                        loading_2.dismiss();
                                    }
                                }, function (err) {
                                    var error = _this.alertCtrl.create({
                                        title: 'Alerta',
                                        message: "Datos no obtenidos.",
                                        buttons: ['Entendido']
                                    });
                                    error.present();
                                    loading_2.dismiss();
                                });
                            }
                        });
                    });
                });
            });
        });
    }
    //Metodos
    PerfilEPage.prototype.ionViewCanEnter = function () {
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
    PerfilEPage.prototype.save_info = function () {
        var _this = this;
        this.storage.get('confirmed').then(function (res_confirmed) {
            _this.storage.get('pass_o').then(function (res_pass) {
                var loading = _this.loadingCtrl.create({
                    content: 'Cargando...'
                });
                loading.present();
                var pass_new = __WEBPACK_IMPORTED_MODULE_6_md5_typescript__["a" /* Md5 */].init(_this.data.value.password);
                if (parseInt(_this.level) == 2) {
                    if (_this.data.value.password.length != 0 && _this.data.value.password != '' && _this.data.value.password != ' ' && _this.data.value.password != null) {
                        if (pass_new.length == 0 || _this.data.value.password.length == 0 || _this.data.value.password === '--------') {
                            var url = 'http://138.68.48.252:3000/Api/drivers/edit_profile';
                            //var password=Md5.init(this.data.value.password);
                            var body = JSON.stringify({ nombre: _this.data.value.nombre, apellido: _this.data.value.appm, correo_o: res_confirmed, correo: _this.data.value.mail });
                            _this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
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
                                    _this.nombre = res['name'];
                                    _this.appm = res['surname'];
                                    _this.mail = res['mail'];
                                    _this.password_o = res_pass;
                                    _this.storage.set('confirmed', res['mail']);
                                    _this.storage.set('client_n', res['name']);
                                    _this.storage.set('client_sur', res['surname']);
                                    _this.storage.set('client_name', res['name'] + ' ' + res['surname']);
                                    var correct = _this.alertCtrl.create({
                                        title: 'Aviso',
                                        message: "Exito al actualizar.",
                                        buttons: ['Entendido']
                                    });
                                    correct.present();
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
                                loading.dismiss();
                            });
                        }
                        else if (pass_new != _this.password_o) {
                            var url = 'http://138.68.48.252:3000/Api/drivers/edit_profile_pass';
                            //var password=Md5.init();
                            var body = JSON.stringify({ nombre: _this.data.value.nombre, apellido: _this.data.value.appm, correo_o: res_confirmed, correo: _this.data.value.mail, password: pass_new });
                            _this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
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
                                    _this.nombre = res['name'];
                                    _this.appm = res['surname'];
                                    _this.mail = res['mail'];
                                    _this.password_o = res['pass'];
                                    _this.storage.set('confirmed', res['mail']);
                                    _this.storage.set('client_n', res['name']);
                                    _this.storage.set('client_sur', res['surname']);
                                    _this.storage.set('pass_o', res['pass']);
                                    _this.storage.set('client_name', res['name'] + ' ' + res['surname']);
                                    var correct = _this.alertCtrl.create({
                                        title: 'Aviso',
                                        message: "Exito al actualizar.",
                                        buttons: ['Entendido']
                                    });
                                    correct.present();
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
                                loading.dismiss();
                            });
                        }
                    }
                    else {
                        var error = _this.alertCtrl.create({
                            title: 'Alerta',
                            message: "Llene el campo de la contraseña.",
                            buttons: ['Entendido']
                        });
                        error.present();
                        loading.dismiss();
                    }
                }
                else {
                    if (_this.data.value.password.length != 0 && _this.data.value.password != '' && _this.data.value.password != ' ' && _this.data.value.password != null) {
                        if (pass_new.length == 0 || _this.data.value.password.length == 0 || _this.data.value.password === '--------') {
                            var url = 'http://138.68.48.252:3000/Api/users/edit_profile';
                            //var password=Md5.init(this.data.value.password);
                            var body = JSON.stringify({ nombre: _this.data.value.nombre, apellido: _this.data.value.appm, correo_o: res_confirmed, correo: _this.data.value.mail });
                            _this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
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
                                    _this.nombre = res['name'];
                                    _this.appm = res['surname'];
                                    _this.mail = res['mail'];
                                    _this.password_o = res_pass;
                                    _this.storage.set('confirmed', res['mail']);
                                    _this.storage.set('client_n', res['name']);
                                    _this.storage.set('client_sur', res['surname']);
                                    _this.storage.set('client_name', res['name'] + ' ' + res['surname']);
                                    var correct = _this.alertCtrl.create({
                                        title: 'Aviso',
                                        message: "Exito al actualizar.",
                                        buttons: ['Entendido']
                                    });
                                    correct.present();
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
                                loading.dismiss();
                            });
                        }
                        else if (pass_new != _this.password_o) {
                            var url = 'http://138.68.48.252:3000/Api/users/edit_profile_pass';
                            //var password=Md5.init();
                            var body = JSON.stringify({ nombre: _this.data.value.nombre, apellido: _this.data.value.appm, correo_o: res_confirmed, correo: _this.data.value.mail, password: pass_new });
                            _this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function (res) {
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
                                    _this.nombre = res['name'];
                                    _this.appm = res['surname'];
                                    _this.mail = res['mail'];
                                    _this.password_o = res['pass'];
                                    _this.storage.set('confirmed', res['mail']);
                                    _this.storage.set('client_n', res['name']);
                                    _this.storage.set('client_sur', res['surname']);
                                    _this.storage.set('pass_o', res['pass']);
                                    _this.storage.set('client_name', res['name'] + ' ' + res['surname']);
                                    var correct = _this.alertCtrl.create({
                                        title: 'Aviso',
                                        message: "Exito al actualizar.",
                                        buttons: ['Entendido']
                                    });
                                    correct.present();
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
                                loading.dismiss();
                            });
                        }
                    }
                    else {
                        var error = _this.alertCtrl.create({
                            title: 'Alerta',
                            message: "Llene el campo de la contraseña.",
                            buttons: ['Entendido']
                        });
                        error.present();
                        loading.dismiss();
                    }
                }
            });
        });
    };
    PerfilEPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil-e',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\perfil-e\perfil-e.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n            <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n            </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo">\n\n  <ion-list> \n\n      <ion-grid> \n\n          <ion-row align-items-center>\n\n            <ion-col col-3 id="imgP">\n\n              <button ion-button icon-only clear id="iconS" (click)="changeImg()">\n\n                <img  id="imgP" src="{{imgP}}"/>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n          <form [formGroup]="data" (ngSubmit)="save_info()" novalidate>   \n\n            <ion-row  align-items-center>\n\n              <ion-col col-9 id="alinacion">  \n\n                <ion-item id="usu">\n\n                  <ion-label floating>Nombre(s)</ion-label>\n\n                  <ion-input type="text" name="nombre" formControlName="nombre" value="{{nombre}}" required></ion-input>\n\n                </ion-item>\n\n                <ion-item id="usu">\n\n                  <ion-label floating>Apellidos</ion-label>\n\n                  <ion-input type="text" name="appm" formControlName="appm" value="{{appm}}" required></ion-input>\n\n                </ion-item>\n\n                <ion-item id="usu">\n\n                  <ion-label floating>Mail</ion-label>\n\n                  <ion-input type="text" name="mail" formControlName="mail" value="{{mail}}" required></ion-input>\n\n                </ion-item>\n\n                <ion-item id="usu">\n\n                  <ion-label floating>Contraseña</ion-label>\n\n                  <ion-input type="password" name="password"value="{{pass_f}}" formControlName="password"></ion-input>\n\n                </ion-item>                               \n\n              </ion-col>  \n\n            </ion-row>\n\n            <ion-row align-items-center>\n\n                <ion-col>\n\n                  <button ion-button color="btnB" block round id="btn" [disabled]="data.invalid">Guardar</button>\n\n                </ion-col>\n\n              </ion-row> \n\n          </form>                        \n\n      </ion-grid>\n\n  </ion-list>     \n\n</ion-content>\n\n<ion-footer no-border transparent>\n\n <p></p>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\perfil-e\perfil-e.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PerfilEPage);
    return PerfilEPage;
}());

//# sourceMappingURL=perfil-e.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-res-password',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\res-password\res-password.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content  id="Fondo" padding>\n\n  <ion-grid>\n\n    <p></p>\n\n    <ion-row>\n\n      <ion-col col-6 push-3><div><img src="assets/imgs/logo.png"/></div></ion-col>\n\n    </ion-row>\n\n    <p></p>\n\n    <ion-row>\n\n      <ion-col id="btnL"><div><h6>¿Olvidaste tu contraseña?</h6></div></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col id="btnL"><div><p>Introduce tu dirección correo:</p></div></ion-col>\n\n      </ion-row>       \n\n  </ion-grid>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Correo</ion-label>\n\n      <ion-input type="email" name="correo" [(ngModel)]="data.correo"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n\n    <button ion-button color="primary" block (click)="enviarR()">Enviar</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\res-password\res-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResPasswordPage);
    return ResPasswordPage;
}());

//# sourceMappingURL=res-password.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosCPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terminos-c',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\terminos-c\terminos-c.html"*/'<ion-header no-border>\n\n  <ion-grid> \n\n    <ion-row>    \n\n      <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n      <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n    </ion-row>      \n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n  <ion-grid>\n\n\n\n  </ion-grid>    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\terminos-c\terminos-c.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TerminosCPage);
    return TerminosCPage;
}());

//# sourceMappingURL=terminos-c.js.map

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aviso-p/aviso-p.module": [
		381,
		18
	],
	"../pages/ayuda-m/ayuda-m.module": [
		382,
		17
	],
	"../pages/boleto-v/boleto-v.module": [
		383,
		16
	],
	"../pages/driver-main/driver-main.module": [
		386,
		15
	],
	"../pages/driver-transport/driver-transport.module": [
		387,
		14
	],
	"../pages/facturacion-m/facturacion-m.module": [
		384,
		13
	],
	"../pages/inicio/inicio.module": [
		385,
		12
	],
	"../pages/login/login.module": [
		399,
		11
	],
	"../pages/main/main.module": [
		388,
		10
	],
	"../pages/pedir-t/pedir-t.module": [
		389,
		9
	],
	"../pages/perfil-e/perfil-e.module": [
		391,
		8
	],
	"../pages/promociones/promociones.module": [
		393,
		7
	],
	"../pages/recibos-m/recibos-m.module": [
		390,
		6
	],
	"../pages/registrar-b/registrar-b.module": [
		394,
		5
	],
	"../pages/registrarse/registrarse.module": [
		392,
		4
	],
	"../pages/registro-u/registro-u.module": [
		397,
		3
	],
	"../pages/res-password/res-password.module": [
		396,
		2
	],
	"../pages/reservacion-b/reservacion-b.module": [
		398,
		1
	],
	"../pages/terminos-c/terminos-c.module": [
		395,
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
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_perfil_e_perfil_e__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recibos_m_recibos_m__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_facturacion_m_facturacion_m__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ayuda_m_ayuda_m__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_terminos_c_terminos_c__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aviso_p_aviso_p__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_main_main__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_driver_main_driver_main__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_driver_transport_driver_transport__ = __webpack_require__(133);
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
        this.privilege = '';
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
        this.driver_pages = [
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_6__pages_perfil_e_perfil_e__["a" /* PerfilEPage */] },
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_15__pages_driver_main_driver_main__["a" /* DriverMainPage */] },
            { title: 'Automóvil', component: __WEBPACK_IMPORTED_MODULE_16__pages_driver_transport_driver_transport__["a" /* DriverTransportPage */] },
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
                        storage.get('id_client').then(function (res_id_client) {
                            _this.privilege = res_privilege;
                            if (res_confirmed != null && res_id_client != null) {
                                if (res_privilege != null) {
                                    if (res_privilege == 0) {
                                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */];
                                        splashScreen.hide();
                                    }
                                    else if (res_privilege == 1) {
                                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_14__pages_main_main__["a" /* MainPage */];
                                        splashScreen.hide();
                                    }
                                    else if (res_privilege == 2) {
                                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_15__pages_driver_main_driver_main__["a" /* DriverMainPage */];
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
        });
    }
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
    MyApp.prototype.DriverOpenPage = function (x) {
        if (x === 5) {
            this.storage.clear();
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
        }
        else {
            this.nav.setRoot(this.driver_pages[x].component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\app\app.html"*/'<ion-menu [content]="content" *ngIf="privilege===0||privilege===1">\n\n  <ion-header no-border>\n\n    <ion-toolbar>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n      <ion-grid>\n\n        <br>\n\n        <ion-row align-items-center>\n\n          <ion-col col-6 push-3><img src="assets/imgs/perfil.png" id="imgR"/></ion-col>\n\n        </ion-row>\n\n        <ion-row align-items-center id="usu">\n\n          <button menuClose ion-button clear color="grey" (click)="openPage(x=0)">Editar perfil</button>\n\n        </ion-row>        \n\n      </ion-grid>\n\n    <ion-list> \n\n      <ion-grid>\n\n        <ion-row align-items-center>\n\n          <button menuClose ion-button clear color="grey" id="menuL" (click)="openPage(x=1)">Inicio</button>\n\n        </ion-row>\n\n        <ion-row align-items-center>\n\n          <button menuClose ion-button clear color="grey" id="menuL" (click)="openPage(x=2)">Recibos</button>\n\n        </ion-row>\n\n        <ion-row align-items-center>\n\n          <button menuClose ion-button clear color="grey" id="menuL" (click)="openPage(x=3)">Facturación</button>\n\n        </ion-row>\n\n        <ion-row align-items-center>\n\n          <button menuClose ion-button clear color="grey" id="menuL" (click)="openPage(x=4)">Ayuda</button>\n\n        </ion-row>\n\n        <ion-row align-items- id="margen">\n\n          <button menuClose ion-button clear color="grey" id="menuLS" (click)="openPage(x=5)">Terminos y Condiciones</button>\n\n        </ion-row>\n\n        <ion-row align-items- id="margen0">\n\n          <button menuClose ion-button clear color="grey" id="menuLS" (click)="openPage(x=6)">Aviso de Privacidad</button>\n\n        </ion-row>\n\n        <ion-row align-items- id="margen0">\n\n            <button menuClose ion-button clear color="grey" id="menuLS" (click)="openPage(x=7)">Cerrar Sesión</button>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-menu [content]="content" *ngIf="privilege===2">\n\n    <ion-header no-border>\n\n      <ion-toolbar>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-grid>\n\n          <br>\n\n          <ion-row align-items-center>\n\n            <ion-col col-6 push-3><img src="assets/imgs/perfil.png" id="imgR"/></ion-col>\n\n          </ion-row>\n\n          <ion-row align-items-center id="usu">\n\n            <button menuClose ion-button clear color="grey" (click)="DriverOpenPage(x=0)">Editar perfil</button>\n\n          </ion-row>        \n\n        </ion-grid>\n\n      <ion-list> \n\n        <ion-grid>\n\n          <ion-row align-items-center>\n\n            <button menuClose ion-button clear color="grey" id="menuL" (click)="DriverOpenPage(x=1)">Inicio</button>\n\n          </ion-row>\n\n          <ion-row align-items-center>\n\n            <button menuClose ion-button clear color="grey" id="menuL" (click)="DriverOpenPage(x=2)">Automóvil</button>\n\n          </ion-row>\n\n          <ion-row align-items- id="margen">\n\n            <button menuClose ion-button clear color="grey" id="menuLS" (click)="DriverOpenPage(x=3)">Terminos y Condiciones</button>\n\n          </ion-row>\n\n          <ion-row align-items- id="margen0">\n\n            <button menuClose ion-button clear color="grey" id="menuLS" (click)="DriverOpenPage(x=4)">Aviso de Privacidad</button>\n\n          </ion-row>\n\n          <ion-row align-items- id="margen0">\n\n              <button menuClose ion-button clear color="grey" id="menuLS" (click)="DriverOpenPage(x=5)">Cerrar Sesión</button>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_registrarse_registrarse__ = __webpack_require__(66);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\home\home.html"*/'<ion-content id="Fondo" padding> \n\n  <ion-grid>\n\n    <p></p><p></p>        \n\n    <ion-row>\n\n      <ion-col col-6 push-3><div><img src="assets/imgs/logo.png"/></div></ion-col>\n\n    </ion-row>\n\n    <p></p><p></p>       \n\n  </ion-grid>\n\n  <ion-list>     \n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="primary" block round (click)="iniciar()">Iniciar Sesión</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <p></p> \n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="primary" block round (click)="registrar()">Usuario Nuevo</button>\n\n        </ion-col>\n\n      </ion-row>       \n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer no-border transparent>\n\n  <p></p>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(279);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_progress_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_qrcode2__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_socket_io__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_list_list__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_registrarse_registrarse__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_res_password_res_password__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_inicio_inicio__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_recibos_m_recibos_m__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_facturacion_m_facturacion_m__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_ayuda_m_ayuda_m__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_perfil_e_perfil_e__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_terminos_c_terminos_c__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_aviso_p_aviso_p__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_main_main__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_driver_main_driver_main__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_driver_transport_driver_transport__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_registrar_b_registrar_b__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_reservacion_b_reservacion_b__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_boleto_v_boleto_v__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_registro_u_registro_u__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_promociones_promociones__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_pedir_t_pedir_t__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//imports de biblotecas especiales








var config = { url: '138.68.48.252:8080', options: {} };
//imports page













//imports pencionados

//imports drivers


//imports pages buttons menu






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_registrarse_registrarse__["a" /* RegistrarsePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_res_password_res_password__["a" /* ResPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_perfil_e_perfil_e__["a" /* PerfilEPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_recibos_m_recibos_m__["a" /* RecibosMPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_facturacion_m_facturacion_m__["a" /* FacturacionMPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_ayuda_m_ayuda_m__["a" /* AyudaMPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_registrar_b_registrar_b__["a" /* RegistrarBPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_reservacion_b_reservacion_b__["a" /* ReservacionBPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_boleto_v_boleto_v__["a" /* BoletoVPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_registro_u_registro_u__["a" /* RegistroUPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_promociones_promociones__["a" /* PromocionesPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_pedir_t_pedir_t__["a" /* PedirTPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_terminos_c_terminos_c__["a" /* TerminosCPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_aviso_p_aviso_p__["a" /* AvisoPPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_driver_main_driver_main__["a" /* DriverMainPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_driver_transport_driver_transport__["a" /* DriverTransportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/aviso-p/aviso-p.module#AvisoPPageModule', name: 'AvisoPPage', segment: 'aviso-p', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ayuda-m/ayuda-m.module#AyudaMPageModule', name: 'AyudaMPage', segment: 'ayuda-m', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/boleto-v/boleto-v.module#BoletoVPageModule', name: 'BoletoVPage', segment: 'boleto-v', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/facturacion-m/facturacion-m.module#FacturacionMPageModule', name: 'FacturacionMPage', segment: 'facturacion-m', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-main/driver-main.module#DriverMainPageModule', name: 'DriverMainPage', segment: 'driver-main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-transport/driver-transport.module#DriverTransportPageModule', name: 'DriverTransportPage', segment: 'driver-transport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedir-t/pedir-t.module#PedirTPageModule', name: 'PedirTPage', segment: 'pedir-t', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recibos-m/recibos-m.module#RecibosMPageModule', name: 'RecibosMPage', segment: 'recibos-m', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-e/perfil-e.module#PerfilEPageModule', name: 'PerfilEPage', segment: 'perfil-e', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrarse/registrarse.module#RegistrarsePageModule', name: 'RegistrarsePage', segment: 'registrarse', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promociones/promociones.module#PromocionesPageModule', name: 'PromocionesPage', segment: 'promociones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrar-b/registrar-b.module#RegistrarBPageModule', name: 'RegistrarBPage', segment: 'registrar-b', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terminos-c/terminos-c.module#TerminosCPageModule', name: 'TerminosCPage', segment: 'terminos-c', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/res-password/res-password.module#ResPasswordPageModule', name: 'ResPasswordPage', segment: 'res-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro-u/registro-u.module#RegistroUPageModule', name: 'RegistroUPage', segment: 'registro-u', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservacion-b/reservacion-b.module#ReservacionBPageModule', name: 'ReservacionBPage', segment: 'reservacion-b', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_progress_bar__["a" /* ProgressBarModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_res_password_res_password__["a" /* ResPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_registrarse_registrarse__["a" /* RegistrarsePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_perfil_e_perfil_e__["a" /* PerfilEPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_recibos_m_recibos_m__["a" /* RecibosMPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_facturacion_m_facturacion_m__["a" /* FacturacionMPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_ayuda_m_ayuda_m__["a" /* AyudaMPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_registrar_b_registrar_b__["a" /* RegistrarBPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_reservacion_b_reservacion_b__["a" /* ReservacionBPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_boleto_v_boleto_v__["a" /* BoletoVPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_registro_u_registro_u__["a" /* RegistroUPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_promociones_promociones__["a" /* PromocionesPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_pedir_t_pedir_t__["a" /* PedirTPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_terminos_c_terminos_c__["a" /* TerminosCPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_aviso_p_aviso_p__["a" /* AvisoPPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_driver_main_driver_main__["a" /* DriverMainPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_driver_transport_driver_transport__["a" /* DriverTransportPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\list\list.html"*/'<ion-header no-border>\n\n    <div>\n\n      <ion-grid> \n\n        <ion-row>    \n\n          <ion-col col-8 id="iconLH">\n\n              <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n              </ion-col>     \n\n          <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n        </ion-row>      \n\n      </ion-grid>\n\n    </div>\n\n</ion-header>\n\n<ion-content id="Fondo">\n\n  <br><br><br>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrarse_registrarse__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_md5_typescript__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__res_password_res_password__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_component__ = __webpack_require__(212);
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
                if (res['level'] == 0) {
                    _this.storage.set('confirmed', res['mail']);
                    _this.storage.set('client_n', res['name']);
                    _this.storage.set('client_sur', res['surname']);
                    _this.storage.set('id_client', res[".ID"]);
                    _this.storage.set('pass_o', res['clave']);
                    _this.storage.set('first_t', res['ft']);
                    _this.storage.set('virtual_ticket', res['ticket']);
                    _this.storage.set('client_name', res['name'] + ' ' + res['surname']);
                    _this.storage.set('client_privilege', res['level']);
                    var currentIndex_1 = _this.navCtrl.getActive().index;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */]).then(function () {
                        _this.navCtrl.remove(currentIndex_1);
                    });
                }
                else if (res['level'] == 1) {
                    _this.storage.set('confirmed', res['mail']);
                    _this.storage.set('client_n', res['name']);
                    _this.storage.set('client_sur', res['surname']);
                    _this.storage.set('id_client', res[".ID"]);
                    _this.storage.set('pass_o', res['clave']);
                    _this.storage.set('first_t', res['ft']);
                    _this.storage.set('virtual_ticket', res['ticket']);
                    _this.storage.set('client_name', res['name'] + ' ' + res['surname']);
                    _this.storage.set('client_privilege', res['level']);
                    var currentIndex_2 = _this.navCtrl.getActive().index;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */]).then(function () {
                        _this.navCtrl.remove(currentIndex_2);
                    });
                }
                else if (res['level'] == 2) {
                    _this.storage.set('confirmed', res['mail']);
                    _this.storage.set('client_n', res['name']);
                    _this.storage.set('client_sur', res['surname']);
                    _this.storage.set('id_client', res[".ID"]);
                    _this.storage.set('pass_o', res['clave']);
                    _this.storage.set('client_name', res['name'] + ' ' + res['surname']);
                    _this.storage.set('client_privilege', res['level']);
                    var driver = JSON.stringify([{ model: res['modelo'], plates: res['placas'], year: res['año'], color: res['color'], phone: res['tel'] }]);
                    if (driver == '[{}]') {
                        _this.storage.set('driver-transport', null);
                    }
                    else {
                        _this.storage.set('driver-transport', driver);
                    }
                    var currentIndex_3 = _this.navCtrl.getActive().index;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */]).then(function () {
                        _this.navCtrl.remove(currentIndex_3);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\login\login.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n  </ion-navbar>  \n\n</ion-header>\n\n<!--Contenido-->\n\n<ion-content id="Fondo" padding>\n\n      <ion-grid>\n\n        <p></p>\n\n        <ion-row>\n\n              <ion-col col-6 push-3><div><img src="assets/imgs/logo.png"/></div></ion-col>\n\n        </ion-row>      \n\n      </ion-grid>\n\n    <ion-list>\n\n      <ion-grid>\n\n        <form [formGroup]="data" (ngSubmit)="ingresar()" novalidate> \n\n          <ion-row align-items-center>\n\n            <ion-col col-9 id="alinacion">  \n\n              <ion-item id="usu">\n\n                <ion-label id="usu" floating>mail</ion-label>\n\n                <ion-input type="mail" formControlName="mail" required></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row align-items-center> \n\n            <ion-col col-9 id="alinacion">\n\n              <ion-item id="usu">\n\n                  <ion-label id="usu" floating>Contraseña</ion-label>\n\n                  <ion-input type="password"  formControlName="password" required></ion-input>\n\n              </ion-item> \n\n            </ion-col>  \n\n          </ion-row>\n\n        </form>    \n\n      </ion-grid>      \n\n    </ion-list>\n\n    <ion-grid>\n\n        <ion-row align-items-center>\n\n            <ion-col col-6 push-3 id="btnL">\n\n              <button ion-button color="primary" outline round [disabled]="data.invalid" (click)="ingresar()">Ingresar</button>\n\n            </ion-col>\n\n        </ion-row>\n\n      <ion-row align-items-center>    \n\n        <ion-col col-6 push-0>\n\n          <div><button ion-button color="grey" clear (click)="passwordR()"><p>¿Olvidaste tu usuario o contraseña?</p></button></div>\n\n        </ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-content>\n\n<ion-footer no-border transparent>\n\n  <p></p>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\login\login.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrar_b_registrar_b__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reservacion_b_reservacion_b__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boleto_v_boleto_v__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registro_u_registro_u__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__promociones_promociones__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pedir_t_pedir_t__ = __webpack_require__(131);
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






var InicioPage = /** @class */ (function () {
    function InicioPage(storage, menu, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu.enable(true);
        storage.get('first_t').then(function (res_first) {
            if (res_first != null && res_first.leght != 0) {
                if (res_first == true) {
                    _this.btnShow = false;
                    _this.brnHidden = true;
                }
                else if (res_first == false) {
                    _this.btnShow = true;
                    _this.brnHidden = false;
                }
            }
        });
    }
    //Metodos
    InicioPage.prototype.ionViewCanEnter = function () {
    };
    InicioPage.prototype.rBoleto = function () {
        //let currentIndex = this.navCtrl.getActive().index;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registrar_b_registrar_b__["a" /* RegistrarBPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    InicioPage.prototype.reserv = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reservacion_b_reservacion_b__["a" /* ReservacionBPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    InicioPage.prototype.boletoV = function () {
        //let currentIndex = this.navCtrl.getActive().index;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__boleto_v_boleto_v__["a" /* BoletoVPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    InicioPage.prototype.UpdaR = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__registro_u_registro_u__["a" /* RegistroUPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    InicioPage.prototype.promo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__promociones_promociones__["a" /* PromocionesPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    InicioPage.prototype.pedirT = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pedir_t_pedir_t__["a" /* PedirTPage */]).then(function () {
            //this.navCtrl.remove(currentIndex);
        });
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\inicio\inicio.html"*/'<ion-header no-border>\n\n    <ion-grid> \n\n      <ion-row>    \n\n        <ion-col col-8 id="iconLH">\n\n          <button ion-button clear show menuToggle><ion-icon name="menu" id="iconMenu"></ion-icon></button>\n\n          </ion-col>     \n\n        <ion-col col-3 id="iconRH"><div><img src="assets/imgs/logo.png" id="iconMLogo"/></div></ion-col>\n\n      </ion-row>      \n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>  \n\n  <ion-grid>          \n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block id="btn" [hidden]="brnHidden" (click)="rBoleto()">Registrar Boleto</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block id="btn" [hidden]="btnShow" (click)="boletoV()">Boleto Virtual</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block id="btn" (click)="reserv()">Reservación</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block id="btn" [hidden]="btnShow" (click)="UpdaR()">Actualizar Registro</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnB" block id="btn" (click)="promo()">Promociones</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br><br>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button color="btnY" block id="btnP" (click)="pedirT()">Pedir Transporte</button>\n\n        </ion-col>\n\n      </ion-row>             \n\n</ion-grid>\n\n</ion-content>\n\n<ion-footer no-border transparent>\n\n  <p></p>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_md5_typescript__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(52);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registrarse',template:/*ion-inline-start:"C:\Users\Gusma\Documents\macparkk-app\src\pages\registrarse\registrarse.html"*/'<ion-header no-border> \n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content id="Fondo" padding>\n\n    <ion-grid>\n\n      <p></p><p></p>\n\n        <ion-row align-items-center>\n\n          <div id="iconMacp">\n\n            <img src="assets/imgs/logo.png"/>\n\n          </div>\n\n        </ion-row>      \n\n    </ion-grid> \n\n    <p></p> \n\n    <ion-list>      \n\n      <form [formGroup]="data" (ngSubmit)="check_in()" novalidate>  \n\n        <ion-list>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label floating>Nombre</ion-label>\n\n                  <ion-input (click)="message(1)" type="text" formControlName="nombre" value="{{nombre}}"></ion-input>        \n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label floating>Apellido</ion-label>\n\n                  <ion-input (click)="message(2)" type="text" formControlName="apellido" value="{{apellido}}"></ion-input>\n\n                 </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n            <ion-item>\n\n              <ion-label floating>Email</ion-label>\n\n              <ion-input (click)="message(3)" type="email" formControlName="correo"  value="{{correo}}"></ion-input>\n\n            </ion-item>      \n\n            <ion-item>\n\n              <ion-label floating>Contraseña</ion-label>\n\n              <ion-input (click)="message(4)" type="password" formControlName="password"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>Confirmar Contraseña</ion-label>\n\n              <ion-input (click)="message(5)" type="password" formControlName="passwordC"></ion-input>\n\n            </ion-item>                 \n\n        </ion-list>\n\n        <div padding>\n\n          <button ion-button color="primary" outline round [disabled]="data.invalid" block>Registrarse</button>\n\n        </div>\n\n      </form>      \n\n      <ion-grid>       \n\n        <ion-row align-items-center>\n\n          <ion-col col-6 push-3 id="btnL">\n\n            <h6><ion-label>registro con:</ion-label></h6>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-grid>\n\n        <ion-row align-items-center>\n\n            <ion-col col-6 id="btnL">\n\n              <button ion-button icon-only clear id="iconS" (click)="rMail()">\n\n                <ion-icon name="ios-mail-outline" color="fb" id="iconS"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n            <ion-col col-6 id="btnL">\n\n              <button ion-button icon-only clear id="iconS" (click)="fbL()">\n\n                <ion-icon ios="logo-facebook" md="logo-facebook" color="fb" id="iconS"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n        </ion-row>\n\n      </ion-grid>      \n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer no-border transparent>\n\n  <p></p>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Gusma\Documents\macparkk-app\src\pages\registrarse\registrarse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], RegistrarsePage);
    return RegistrarsePage;
}());

//# sourceMappingURL=registrarse.js.map

/***/ })

},[259]);
//# sourceMappingURL=main.js.map