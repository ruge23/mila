webpackJsonp([17],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__new_pass_new_pass__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cambio_pass_cambio_pass__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_perfil__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { MenuPage } from './../menu/menu';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authProvider, serviceProvider, alertCtrl, toastCtrl, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.serviceProvider = serviceProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.user = {
            name: '',
            pw: ''
        };
        this.msgError = "";
        this.showMsgError = false;
        this.videoHide = true;
        this.cambioBtn = false;
        //this.presentLoadingDefault();
    }
    /* presentLoadingDefault() {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
    
      setTimeout(() => {
        this.mostrar = true;
        loading.dismiss();
      }, 3000);
    } */
    LoginPage.prototype.ionViewWillEnter = function () {
        this.validarEmail();
        /* this.videoPlayer = this.mVideoPlayer.nativeElement;
        this.videoPlayer.type="video/mp4";
        this.videoPlayer.src= "../../assets/videos/videoLogin.mp4";
        this.videoPlayer.load();
        this.videoPlayer.play(); */
        /* setTimeout(()=>{
          this.videoHide = false;
        },1000) */
    };
    /* ionViewDidLoad(){
      this.videoPlayer = this.mVideoPlayer.nativeElement;
      this.videoPlayer.play();
    } */
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Espere por favor...'
        });
        loading.present();
        if (this.validacion()) {
            console.log('user', this.user.name + this.user.pw);
            this.serviceProvider.getTokenUsuario(this.user.name, this.user.pw).subscribe(function (data) {
                console.log('data', data);
                if (data) {
                    var ret = JSON.parse(data["status"]);
                    console.log('ret', ret);
                    if (ret === 200) {
                        _this.storage.set('userEmail', _this.user.name);
                        _this.serviceProvider.getDatosCliente().subscribe(function (x) {
                            _this.storage.get('cambioPass').then(function (val) {
                                console.log('valStorage', val);
                                if (val) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__new_pass_new_pass__["a" /* NewPassPage */]);
                                    loading.dismiss();
                                }
                                else {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                                    loading.dismiss();
                                }
                            });
                        });
                    }
                }
            }, function (error) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Error!',
                    message: 'Tu usuario no esta asociado a una cuenta.',
                    buttons: ['OK'],
                    cssClass: 'alertDanger'
                });
                _this.user.name = "";
                _this.user.pw = "";
                alert.present();
                //console.log('err',error);
            });
        }
    };
    LoginPage.prototype.validarEmail = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Espere por favor...'
        });
        loading.present();
        this.storage.get('userEmail').then(function (result) {
            loading.dismiss();
            if (result) {
                _this.user.name = result;
            }
            else {
                _this.user.name = "";
            }
        });
    };
    LoginPage.prototype.validacion = function () {
        var ret = true;
        var msg = "";
        if (this.user.name == "") {
            ret = false;
            msg += "Debe completar el email\n";
        }
        if (this.user.pw == "") {
            ret = false;
            msg += "Debe completar el password";
        }
        this.msgError = msg;
        return ret;
    };
    LoginPage.prototype.toastError = function () {
        var toast = this.toastCtrl.create({
            message: this.msgError,
            showCloseButton: true,
            duration: 3000,
            closeButtonText: "X",
            position: 'top',
            cssClass: 'toastError'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage.prototype.goToChangePw = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cambio_pass_cambio_pass__["a" /* CambioPassPage */]);
    };
    LoginPage.prototype.goToPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__perfil_perfil__["a" /* PerfilPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('video1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"])
    ], LoginPage.prototype, "mVideoPlayer", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/login/login.html"*/'<ion-header no-border no-shadow transparent>\n  <ion-navbar transparent>\n  </ion-navbar>\n</ion-header>    \n<ion-content overflow-scroll="true">\n    <!-- <video *ngIf="!videoHide" #video1 id="video" loop preload="auto" autoplay>\n      <source src="../../assets/videos/videoLogin.mp4" type="video/mp4" />\n    </video> -->\n    <ion-grid>\n        <ion-row>\n          <ion-col col-12 class="logo-cont">\n              <img src="../../assets/imgs/login/logo-completo.svg" alt="" class="m-logo">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            \n            <ion-card class="login-form">\n\n                \n              \n                <ion-card-content>\n                    <ion-list>\n                        <ion-item>\n                          \n                          <ion-label><img src="../../assets/imgs/login/user.png" alt=""></ion-label>\n                          <ion-input placeholder="Email" type="email" [(ngModel)]="user.name" style="font-size: 0.9 !important;"></ion-input>\n                        </ion-item>\n                     \n                        <ion-item>\n                          <img src="../../assets/imgs/login/pass.png" alt="">\n                          <ion-label><img src="../../assets/imgs/login/pass.png" alt=""></ion-label>\n                          <ion-input placeholder="Contraseña" type="password" [(ngModel)]="user.pw"></ion-input>\n                        </ion-item>\n    \n                        <button ion-button full (click)="loginUser()"><strong>Ingresar</strong></button>\n                      </ion-list>\n                </ion-card-content>\n              \n                \n              \n              </ion-card>\n          </ion-row>\n    </ion-grid>\n</ion-content>\n<ion-footer trasparent>\n    <ion-grid style="background: transparent !important;">\n      <ion-row style="text-align: center;">\n        <!-- <ion-col>\n          <div style="font-size: 0.8em;color: #fff;" float-left (click)="goToPerfil()">Actualizar perfil</div>\n        </ion-col> -->\n        <ion-col (click)="goToChangePw()">\n          <div style="font-size: 0.8em;color: #fff;">Olvide mi contraseña</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesProvider; });
/* unused harmony export Auth */
/* unused harmony export Persona */
/* unused harmony export Cuota */
/* unused harmony export Pagos */
/* unused harmony export Automovil */
/* unused harmony export PolizaVigente */
/* unused harmony export SolicitudPrenda */
/* unused harmony export SolicitudPrecancelacion */
/* unused harmony export Prestamo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServicesProvider = /** @class */ (function () {
    function ServicesProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.fechaPrenda = null;
        this.solicitudCancelacion = [];
        this.urlTest = "https://micuentamilatesting.microlending.com.ar/rest/v1/";
        this.urlProd = "https://micuentamila.microlending.com.ar/rest/v1/";
        this._persona = new Persona();
        this._prestamo = new Prestamo();
        //console.log('Hello ServicesProvider Provider');
    }
    ServicesProvider.prototype.setVariables = function (pre, prenda) {
        this.prenda = prenda;
        this.precancelacion = pre;
    };
    ServicesProvider.prototype.getVariables = function () {
        return { pre: this.precancelacion, prenda: this.prenda };
    };
    ServicesProvider.prototype.getToken = function () {
        //console.log("Get token");
        if (!this.isVigente()) {
            switch (this._auth.tipo) {
                case 1:
                    this.getTokenCredenciales(this._auth.usuario, this._auth.password);
                    break;
                case 4:
                    this.getTokenEmail(this._auth.usuario);
                    break;
            }
        }
        return this._auth.token;
    };
    ServicesProvider.prototype.isVigente = function () {
        return true;
        //this._auth.vigente > date.now
    };
    ServicesProvider.prototype.getTokenCredenciales = function (usuario, password) {
        var _this = this;
        var url = this.urlProd + "tokenapps";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'application/x-www-form-urlencoded');
        //let body = {grant_type:'password',username:'3654336901',password:'12345678'};
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var body = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            .set('grant_type', 'password')
            .set('username', usuario)
            .set('password', password);
        return this.http.post(url, body.toString(), options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (x) {
            _this._auth = new Auth();
            _this._auth.token = JSON.parse(x["_body"])["access_token"];
            _this._auth.vencimiento = JSON.parse(x["_body"])["expires_in"];
            _this._auth.tipo = 1;
            _this._auth.usuario = usuario;
            _this._auth.password = password;
        }));
    };
    ServicesProvider.prototype.getTokenEmail = function (email) {
        var _this = this;
        var url = this.urlProd + "tokenclientemail";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var body = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            .set('grant_type', 'password')
            .set('username', email)
            .set('password', '');
        return this.http.post(url, body.toString(), options)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (x) {
            console.log("response token: ", x);
            _this._auth = new Auth();
            _this._auth.token = JSON.parse(x["_body"])["access_token"];
            _this._auth.vencimiento = JSON.parse(x["_body"])["expires_in"];
            _this._auth.tipo = 4;
            _this._auth.usuario = email;
            _this._auth.password = '';
            console.log('auth', _this._auth);
        }))
            .catch(function (error) { return error.json(); });
    };
    ServicesProvider.prototype.getTokenUsuario = function (email, password) {
        var _this = this;
        var url = this.urlProd + "tokenclientemail";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var body = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            .set('grant_type', 'password')
            .set('username', email)
            .set('password', password);
        try {
            return this.http.post(url, body.toString(), options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (x) {
                console.log("response token: ", x);
                _this._auth = new Auth();
                _this._auth.token = JSON.parse(x["_body"])["access_token"];
                _this._auth.vencimiento = JSON.parse(x["_body"])["expires_in"];
                _this._auth.tipo = 4;
                _this._auth.usuario = email;
                _this._auth.password = '';
                console.log('auth', _this._auth);
            }));
        }
        catch (error) {
            console.log('erro', error);
        }
    };
    ServicesProvider.prototype.getChangePass = function (email) {
        var url = this.urlProd + "usuarios/solicitudes/password";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //let body = {grant_type:'password',username:'3654336901',password:'12345678'};
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var body = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            .set('Email', email);
        return this.http.post(url, body.toString(), options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (x) {
            console.log('xPass', x);
        }));
    };
    ServicesProvider.prototype.getChangeNewPass = function (email, pass) {
        var url = this.urlProd + "usuarios/solicitudes/password";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //let body = {grant_type:'password',username:'3654336901',password:'12345678'};
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var body = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            .set('Email', email)
            .set('Password', pass);
        return this.http.post(url, body.toString(), options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (x) {
            console.log('xPass', x);
        }));
    };
    ServicesProvider.prototype.getDatosCliente = function () {
        var _this = this;
        var tokeam = this.getToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", "Bearer " + tokeam);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.urlProd + "personas", requestOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (x) {
            var cliente = JSON.parse(x["_body"])["Persona"];
            //console.log("datos cliente", cliente["Persona"].Nombre);
            //this._persona = new Persona();
            _this._persona.nombre = cliente.Nombre;
            _this._persona.email = cliente.Email;
            _this._persona.documento = cliente.NroDocumento;
            _this._persona.tipoDocumento = (cliente.TipoDocumento == "DNI" ? 1 : 2);
            console.log("datos cliente", _this._persona);
            _this.getDatosPrestamo(false);
        }));
    };
    ServicesProvider.prototype.getDatosPrestamo = function (SoloVigentes) {
        var _this = this;
        var fecha = new Date();
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Espere por favor...'
        });
        loading.present();
        var tokeam = this.getToken();
        this.getPrestamoCliente(this._persona.tipoDocumento, this._persona.documento, SoloVigentes, tokeam).subscribe(function (x) {
            console.log("numero prestamo", JSON.parse(x["_body"])["Prestamos"][0].Numero);
            var numeroPrestamo = JSON.parse(x["_body"])["Prestamos"][0].Numero;
            _this.getPrestamoDetalle(numeroPrestamo, tokeam).subscribe(function (p) {
                _this._prestamo = JSON.parse(p["_body"])["Prestamo"];
                _this._prestamo.SolicitudPrenda = JSON.parse(p["_body"])["Prestamo"]["SolicitudPrenda"];
                _this._prestamo.Automovil = JSON.parse(p["_body"])["Prestamo"]["Automovil"];
                _this._prestamo.PolizaVigente = JSON.parse(p["_body"])["Prestamo"]["PolizaVigente"];
                _this._prestamo.Pagos = JSON.parse(p["_body"])["Prestamo"]["Pagos"];
                _this._prestamo.SaldoPrecancelacion = JSON.parse(p['_body'])["Prestamo"]["SolicitudPrecancelacion"];
                loading.dismiss();
                console.log("objeto detalleeee", _this._prestamo);
                //console.log("objeto detalle", JSON.parse(p["_body"])["Prestamo"]);
            });
            /* this.getSolicitudPrecancelacion(numeroPrestamo, fecha).subscribe(x=>{
              console.log('x', x);
            }) */
        });
    };
    ServicesProvider.prototype.getInformesPrestamo = function (numeroPrestamo) {
        var tokeam = this.getToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", "Bearer " + tokeam);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.urlProd + "prestamos/informes?Prestamo=" + numeroPrestamo + "&TipoInforme=1", requestOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (x) {
            console.log('informe', x);
        }));
    };
    ServicesProvider.prototype.getPrestamoCliente = function (TipoDocumento, NroDocumento, SoloVigentes, tokeam) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + tokeam);
        //console.log('enPrestamos', tokeam);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.urlProd + "prestamos?TipoDocumento=" + TipoDocumento + "&NroDocumento=" + NroDocumento + "&SoloVigentes=" + SoloVigentes, requestOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (data) {
            //console.log('All: ' + JSON.stringify(data))
        }));
    };
    ServicesProvider.prototype.getPrestamoDetalle = function (PrestamoId, tokeam) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("authorization", "Bearer " + tokeam);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.urlProd + "prestamos/" + PrestamoId, requestOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (data) {
            //console.log('All: ' + JSON.stringify(data));
        }));
    };
    ServicesProvider.prototype.getPregFrecuentes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'application/x-www-form-urlencoded');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://ctrlztest.com.ar/mila-admin/apirest/traerfaq.php", requestOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (data) {
            //console.log('All: ' + JSON.stringify(data));
        }));
    };
    ServicesProvider.prototype.getNoticias = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'application/x-www-form-urlencoded');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://ctrlztest.com.ar/mila-admin/apirest/traernoticias.php", requestOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (data) {
            //console.log('All: ' + JSON.stringify(data));
        }));
    };
    ServicesProvider.prototype.getTelefonos = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'application/x-www-form-urlencoded');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://ctrlztest.com.ar/mila-admin/apirest/traertelefonos.php", requestOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (data) {
            //console.log('All: ' + JSON.stringify(data));
        }));
    };
    ServicesProvider.prototype.getTerminos = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'application/x-www-form-urlencoded');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://ctrlztest.com.ar/mila-admin/apirest/traerterminos.php", requestOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (data) {
            //console.log('All: ' + JSON.stringify(data));
        }));
    };
    ServicesProvider.prototype.getSolicitudPreda = function (prestamo) {
        var tokeam = this.getToken();
        var url = this.urlProd + "prestamos/solicitudes/prendas";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + tokeam);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //let body = {grant_type:'password',username:'3654336901',password:'12345678'};
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var body = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            .set('Prestamo', prestamo);
        return this.http.post(url, body.toString(), options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (x) {
        }));
    };
    ServicesProvider.prototype.getSolicitudPrecancelacion = function (prestamo, fecha) {
        var tokeam = this.getToken();
        var url = this.urlProd + "prestamos/solicitudes/precancelaciones";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + tokeam);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //let body = {grant_type:'password',username:'3654336901',password:'12345678'};
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var body = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            .set('Prestamo', prestamo)
            .set('Fecha', fecha);
        return this.http.post(url, body.toString(), options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (x) {
            console.log('serviceCancelacion', x);
        }));
    };
    ServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */]])
    ], ServicesProvider);
    return ServicesProvider;
}());

var Auth = /** @class */ (function () {
    function Auth() {
    }
    return Auth;
}());

var Persona = /** @class */ (function () {
    function Persona() {
    }
    return Persona;
}());

var Cuota = /** @class */ (function () {
    function Cuota() {
        this.verDetalle = (this.saldo != this.importe);
    }
    return Cuota;
}());

var Pagos = /** @class */ (function () {
    function Pagos() {
    }
    return Pagos;
}());

var Automovil = /** @class */ (function () {
    function Automovil() {
    }
    return Automovil;
}());

var PolizaVigente = /** @class */ (function () {
    function PolizaVigente() {
    }
    return PolizaVigente;
}());

var SolicitudPrenda = /** @class */ (function () {
    function SolicitudPrenda() {
    }
    return SolicitudPrenda;
}());

var SolicitudPrecancelacion = /** @class */ (function () {
    function SolicitudPrecancelacion() {
    }
    return SolicitudPrecancelacion;
}());

var Prestamo = /** @class */ (function () {
    function Prestamo() {
    }
    return Prestamo;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqsPage = /** @class */ (function () {
    function FaqsPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.footerScrollConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
        this.fbid = false;
    }
    FaqsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqsPage');
    };
    FaqsPage.prototype.ionViewWillEnter = function () {
        this.avatarImg();
    };
    FaqsPage.prototype.goToEstados = function () {
        this.navCtrl.pop();
    };
    FaqsPage.prototype.avatarImg = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.fbid = true;
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=square";
            }
            else {
                _this.fbid = false;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('Scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Scroll */])
    ], FaqsPage.prototype, "scrollElement", void 0);
    FaqsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-faqs',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/faqs/faqs.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar hideBackButton transparent>\n    <ion-row>\n      <ion-title float-right><ion-icon style="margin-right:0px !important;color: white !important;" name="mila-logo"></ion-icon></ion-title>\n      <ion-buttons *ngIf="!fbid" float-right end (click)="presentPopover($event)">\n        <button ion-button icon-only>\n          <ion-icon style="margin-right:0px !important;font-size: 1.2em !important; color: white !important;" name="mila-avatar"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons *ngIf="fbid" float-right end (click)="presentPopover($event)">\n        <ion-avatar item-start>\n          <img [src]="imgSrc">\n        </ion-avatar>\n      </ion-buttons>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding #pageContent fullscreen>\n  <ion-row style="margin-top: 20% !important;">\n    <ion-col>\n      <h5 text-center style="color: white;"><strong>Formas de pago</strong></h5>\n      <ion-card class="redbrd">\n          <ion-card-content>\n            <ion-row style="margin-bottom: 5px;">\n              <img class="pago" src="../../assets/imgs/pago-facil.png">\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <p text-center>Busca tu sucursal más cercana con N° de DNI o código de barras.</p>\n              </ion-col>\n            </ion-row>\n            <ion-row style="height: 30px;"></ion-row>\n            <ion-row>\n              <img class="pago2" src="../../assets/imgs/rapipago.png" alt="">\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <p text-center>Busca tu sucursal más cercana Código de empresa 3064 o código de barras.</p>\n              </ion-col>\n            </ion-row>\n            <ion-row style="height: 30px;">\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <p text-center>Tenga en cuenta que los pagos realizados pueden demorar 72 hs hábiles, posteriores a su acreditación, en verse reflejados en sistema</p>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-footer style="height: 65px;" [scrollHide]="footerScrollConfig" [scrollContent]="pageContent">\n  <ion-toolbar style="height: 65px;">\n    <ion-row>\n      <ion-col (click)="goToEstados()">\n        <img class="iconFooter2" src="../../assets/imgs/botonestadodecuenta.svg" alt="">\n      </ion-col>\n      <ion-col>\n        <img class="iconFooter" src="../../assets/imgs/boton-informe-pago-inactive.svg" alt="">\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/faqs/faqs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], FaqsPage);
    return FaqsPage;
}());

//# sourceMappingURL=faqs.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagos_pagos__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_popover_popover__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CancelacionPage = /** @class */ (function () {
    function CancelacionPage(navCtrl, navParams, popoverCtrl, serviceProvider, loadingCtrl, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.expanded = false;
        this.className = "descargar";
        this.dataCancelacion = [];
        this.solicitado = false;
        this.fbid = false;
        this.saldo = serviceProvider._prestamo.SaldoPrecancelacion;
        this.vigencia = serviceProvider._prestamo.VigenciaSaldoPrecancelacion;
        this.numPrestamo = serviceProvider._prestamo.Numero;
        this.debito = serviceProvider._prestamo.DebitoAutomatico;
        this.nameUser = this.serviceProvider._persona.nombre;
    }
    CancelacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancelacionPage', this.serviceProvider._prestamo);
    };
    CancelacionPage.prototype.avatarImg = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.fbid = true;
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=square";
            }
            else {
                _this.fbid = false;
            }
        });
    };
    CancelacionPage.prototype.ionViewWillEnter = function () {
        this.avatarImg();
        if (this.navParams.data.cancelacion || this.serviceProvider.solicitudCancelacion.length !== 0) {
            console.log('datallega', this.navParams.data.cancelacion);
            this.solicitado = true;
            this.expanded = true;
            if (this.navParams.data.cancelacion) {
                this.importeCancelacion = this.navParams.data.cancelacion['Importe'];
                this.vigenciaDesde = this.navParams.data.cancelacion['VigenciaDesde'];
                this.vigenciaHasta = this.navParams.data.cancelacion['VigenciaHasta'];
            }
            else {
                this.importeCancelacion = this.dataCancelacion['Importe'];
                this.vigenciaDesde = this.dataCancelacion['VigenciaDesde'];
                this.vigenciaHasta = this.dataCancelacion['VigenciaHasta'];
            }
        }
    };
    CancelacionPage.prototype.consultarPreCancelacion = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Espere por favor...'
        });
        loading.present();
        var fecha = new Date();
        this.serviceProvider.getSolicitudPrecancelacion(this.numPrestamo, fecha).subscribe(function (x) {
            _this.solicitado = true;
            console.log('data', x);
            _this.dataCancelacion = JSON.parse(x['_body']);
            console.log('ssss', _this.dataCancelacion);
            if (_this.dataCancelacion['SolicitudProcesada']) {
                var msg = _this.dataCancelacion['Resultado'];
                _this.serviceProvider.solicitudCancelacion = _this.dataCancelacion;
                _this.importeCancelacion = _this.dataCancelacion['Importe'];
                _this.vigenciaDesde = _this.dataCancelacion['VigenciaDesde'];
                _this.vigenciaHasta = _this.dataCancelacion['VigenciaHasta'];
                _this.toastError(msg);
                _this.expanded = !_this.expanded;
                loading.dismiss();
            }
            else {
                var msg = _this.dataCancelacion['Resultado'];
                _this.toastError(msg);
                _this.expanded = !_this.expanded;
                _this.solicitado = false;
                loading.dismiss();
            }
        });
    };
    CancelacionPage.prototype.presentPopover = function (myevent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({ ev: myevent });
    };
    CancelacionPage.prototype.toastError = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            showCloseButton: true,
            duration: 3000,
            closeButtonText: "X",
            position: 'top',
            cssClass: 'toastError'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CancelacionPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */]);
    };
    CancelacionPage.prototype.expandItem = function () {
        console.log('ola');
        this.consultarPreCancelacion();
        if (this.className === "descargar") {
            this.className = "check";
        }
        else
            this.className = "descargar";
    };
    CancelacionPage.prototype.goToPago = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pagos_pagos__["a" /* PagosPage */], this.debito);
    };
    CancelacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-cancelacion',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/cancelacion/cancelacion.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar transparent>\n    <ion-row class="row-nav">\n      <ion-title style="text-align: center;"><ion-icon style="margin-right:0px !important;color: white !important;" name="mila-logo"></ion-icon></ion-title>\n      <ion-buttons *ngIf="!fbid" float-right end (click)="presentPopover($event)">\n        <button ion-button icon-only>\n          <ion-icon style="margin-right:0px !important;font-size: 1.2em !important; color: white !important;" name="mila-avatar"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons *ngIf="fbid" float-right end (click)="presentPopover($event)">\n        <ion-avatar item-start>\n          <img [src]="imgSrc">\n        </ion-avatar>\n      </ion-buttons>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row padding>\n    <ion-col>\n      <p text-center no-margin style="color: #fff; font-size: 0.8em;"><strong>Estimado (a):</strong></p><br>\n      <h2 text-center no-margin style="color: #fff; font-size: 1em;"><strong>{{nameUser}}</strong></h2><br>\n      <p text-wrap text-center no-margin style="color: #fff; font-size: 0.8em;">El siguiente saldo informado es para la pre cancelación del prestamo N°{{numPrestamo}}</p>\n    </ion-col>\n  </ion-row>\n  <div padding>\n    <button [class]="className" ion-button icon-start outline (click)="expandItem()" [disabled]="solicitado">Consultar Precancelación</button>\n  </div>\n  <div *ngIf="expanded">\n    <ion-row style="text-align: center;">\n      <ion-col>\n        <button ion-fab color="dark" style="margin: 0 auto; height: 42px; width: 42px;">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row style="text-align: center;">\n      <ion-col style="max-width: 40% !important; border-bottom: 5px solid white; margin: 0 auto;">\n        <p style="font-size: 1em; color: white;"><strong>Monto a pagar:</strong></p>\n        <p style="font-size: 1.2em; color: white;"><strong>{{importeCancelacion | currency:\'$\':true}}</strong></p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n      <p text-center style="font-size: 1em; color: white;"><strong>Monto válido</strong></p>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p style="font-size: 1em; color: white;"><strong>Desde el {{vigenciaDesde | date: \'dd-MM-yyyy\'}}</strong></p>      \n      </ion-col>\n      <ion-col>\n        <p style="font-size: 1em; color: white;"><strong>Hasta el {{vigenciaHasta | date: \'dd-MM-yyyy\'}}</strong></p>      \n      </ion-col>\n    </ion-row>\n    <div padding>\n      <button class="pagar" ion-button block (click)="goToPago()">Como pagar</button>\n    </div> \n  </div>\n</ion-content>\n\n\n\n<!-- <ion-content padding>\nEl saldo es {{saldo}} y la vigencia es {{vigencia}}\n</ion-content> -->\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/cancelacion/cancelacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */]])
    ], CancelacionPage);
    return CancelacionPage;
}());

//# sourceMappingURL=cancelacion.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_principal_menu_principal__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_popover_popover__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_services__ = __webpack_require__(13);
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
 * Generated class for the PrendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrendaPage = /** @class */ (function () {
    function PrendaPage(navCtrl, navParams, service, popoverCtrl, toastCtrl, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.solicitado = false;
        this.solicitud = [];
        this.mostrarFecha = false;
        this.fbid = false;
        this.numPrestamo = this.service._prestamo.Numero;
        this.nameUser = this.service._persona.nombre;
    }
    PrendaPage.prototype.ionViewWillEnter = function () {
        this.avatarImg();
        if (this.navParams.data.prenda || this.service.fechaPrenda !== null) {
            console.log('hola');
            this.solicitado = true;
            this.mostrarFecha = true;
            if (this.navParams.data.prenda !== null) {
                this.fechaRetiro = this.navParams.data.prenda['FechaDisponibleRetiro'];
            }
            else {
                this.fechaRetiro = this.service.fechaPrenda;
            }
        }
    };
    PrendaPage.prototype.avatarImg = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.fbid = true;
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=square";
            }
            else {
                _this.fbid = false;
            }
        });
    };
    PrendaPage.prototype.solicitarPrenda = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Espere por favor...'
        });
        loading.present();
        this.service.getSolicitudPreda(this.numPrestamo).subscribe(function (x) {
            _this.solicitado = true;
            console.log('data', x);
            _this.solicitud = JSON.parse(x["_body"]);
            if (_this.solicitud) {
                var msg = _this.solicitud['Resultado'];
                _this.toastError(msg);
                _this.mostrarFecha = true;
                _this.service.fechaPrenda = _this.fechaRetiro = _this.solicitud['FechaDisponibleRetiro'];
                loading.dismiss();
                setTimeout(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__menu_principal_menu_principal__["a" /* MenuPrincipalPage */]);
                }, 3500);
            }
            else {
                var msg = _this.solicitud['Resultado'];
                _this.toastError(msg);
                _this.solicitado = false;
            }
        });
    };
    PrendaPage.prototype.toastError = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            showCloseButton: true,
            duration: 3000,
            closeButtonText: "X",
            position: 'top',
            cssClass: 'toastError'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PrendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrendaPage');
    };
    PrendaPage.prototype.presentPopover = function (myevent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({ ev: myevent });
    };
    PrendaPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
    };
    PrendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-prenda',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/prenda/prenda.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar transparent>\n    <ion-row class="row-nav">\n      <ion-title style="text-align: center;"><ion-icon style="margin-right:0px !important;color: white !important;" name="mila-logo"></ion-icon></ion-title>\n      <ion-buttons *ngIf="!fbid" float-right end (click)="presentPopover($event)">\n        <button ion-button icon-only>\n          <ion-icon style="margin-right:0px !important;font-size: 1.2em !important; color: white !important;" name="mila-avatar"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons *ngIf="fbid" float-right end (click)="presentPopover($event)">\n        <ion-avatar item-start>\n          <img [src]="imgSrc">\n        </ion-avatar>\n      </ion-buttons>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row padding>\n    <ion-col>\n      <p text-center no-margin style="color: #fff; font-size: 0.8em;"><strong>Estimado (a):</strong></p><br>\n      <h2 text-center no-margin style="color: #fff; font-size: 1em;"><strong>{{nameUser}}</strong></h2><br>\n      <p text-wrap text-center no-margin style="color: #fff; font-size: 0.8em;">A continuación podrás solicitar prenda.</p>\n    </ion-col>\n  </ion-row>\n  <div padding>\n    <button class="descargar" ion-button icon-start outline (click)="solicitarPrenda()" [disabled]="solicitado">Solicitar prenda</button>\n  </div>\n  <ion-row style="text-align: center;">\n    <ion-col>\n      <button ion-fab color="dark" style="margin: 0 auto; height: 42px; width: 42px;">\n        <ion-icon style="color: white !important; margin-right: 0px !important; font-size: 1em;" name="mila-detalles"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="mostrarFecha" style="text-align: center;">\n    <ion-col style="max-width: 40% !important; border-bottom: 5px solid white; margin: 0 auto;">\n      <p style="font-size: 1em; color: white;"><strong>Fecha a retirar:</strong></p>\n      <p style="font-size: 1.2em; color: white;"><strong>{{ fechaRetiro | date :  "dd/MM/y" }}</strong></p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/prenda/prenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */]])
    ], PrendaPage);
    return PrendaPage;
}());

//# sourceMappingURL=prenda.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSecondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_popover_popover__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserSecondPage = /** @class */ (function () {
    function UserSecondPage(navCtrl, navParams, services, popoverCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.fbid = false;
        this.avatarImg();
        this.detalleCuota = this.navParams.data;
        this.nameUser = this.services._persona.nombre;
        console.log(this.detalleCuota);
    }
    UserSecondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserSecondPage');
    };
    UserSecondPage.prototype.presentPopover = function (myevent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({ ev: myevent });
    };
    UserSecondPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
    };
    UserSecondPage.prototype.avatarImg = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.fbid = true;
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=square";
            }
            else {
                _this.fbid = false;
            }
        });
    };
    UserSecondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-user-second',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/user-second/user-second.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar transparent>\n    <ion-row>\n      <ion-title float-right><ion-icon style="margin-right:0px !important;color: white !important;" name="mila-logo"></ion-icon></ion-title>\n      <ion-buttons *ngIf="!fbid" float-right end (click)="presentPopover($event)">\n        <button ion-button icon-only>\n          <ion-icon style="margin-right:0px !important;font-size: 1.2em !important; color: white !important;" name="mila-avatar"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons *ngIf="fbid" float-right end (click)="presentPopover($event)">\n        <ion-avatar item-start>\n          <img [src]="imgSrc">\n        </ion-avatar>\n      </ion-buttons>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row padding>\n    <ion-col>\n        <p text-center no-margin style="color: #fff;">Estimado (a):</p>\n        <h2 text-center  no-margin  style="color: #fff;">{{nameUser}}</h2>\n    </ion-col>\n  </ion-row>\n  <ion-card class="redbrd">\n      <ion-card-content>\n          <ion-list>\n\n              <ion-item>\n                <ion-row>\n                    <ion-col col-7>\n                        <p>N° de cuota:</p>\n                    </ion-col>\n                    <ion-col class="derecha" col-5>\n                        <span>{{detalleCuota.Numero}}</span>\n                    </ion-col>\n                </ion-row>\n              </ion-item>\n\n\n              <ion-item>\n                  <ion-row>\n                      <ion-col col-7>\n                          <p>Vencimiento</p>\n                      </ion-col>\n                      <ion-col class="derecha" col-5>\n                          <span>{{detalleCuota.Vencimiento | date:\'dd/MM/yyyy\'}}</span>\n                      </ion-col>\n                  </ion-row>\n                </ion-item>\n\n                <ion-item>\n                    <ion-row>\n                        <ion-col col-7>\n                            <p>Fecha de pago:</p>\n                          </ion-col>\n                        <ion-col class="derecha" col-5>\n                            <span>{{detalleCuota.Vencimiento | date:\'dd/MM/yyyy\'}}</span>\n                          </ion-col>\n                    </ion-row>\n                  </ion-item>\n\n                  <ion-item>\n                      <ion-row>\n                          <ion-col col-7>\n                              <p>Importe a pagar:</p>\n                            </ion-col>\n                          <ion-col class="derecha" col-5>\n                              <span>{{detalleCuota.Saldo}}</span>\n                            </ion-col>\n                      </ion-row>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-row>\n                            <ion-col col-7>\n                                <p>Medio de pago:</p>\n                              </ion-col>\n                            <ion-col class="derecha" col-5>\n                                <span>Rapipago</span>\n                              </ion-col>\n                        </ion-row>\n                      </ion-item>\n                        </ion-list>\n                      </ion-card-content>\n                    </ion-card>\n  <!-- <ion-list>\n    <ion-list-header>\n      Conceptos\n    </ion-list-header>\n    <ion-item *ngFor="let concept of detalleCuota[\'Conceptos\']">\n      <ion-icon name="rose" item-start></ion-icon>\n      {{concept.Nombre}}\n      <ion-note item-end>\n        {{concept.Importe}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Detalle\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name="leaf" item-start></ion-icon>\n        Cuota N°\n      <ion-note item-end>\n        {{detalleCuota.Numero}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="leaf" item-start></ion-icon>\n        Importe\n      <ion-note item-end>\n        {{detalleCuota.Importe}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="leaf" item-start></ion-icon>\n        Vencimiento\n      <ion-note item-end>\n        {{detalleCuota.Vencimiento}}\n      </ion-note>\n    </ion-item>\n  </ion-list> -->\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/user-second/user-second.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], UserSecondPage);
    return UserSecondPage;
}());

//# sourceMappingURL=user-second.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VencimientoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_popover_popover__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VencimientoPage = /** @class */ (function () {
    function VencimientoPage(navCtrl, navParams, services, popoverCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.cuotas = [];
        this.saldos = [];
        this.fbid = false;
        this.avatarImg();
        this.nameUser = this.services._persona.nombre;
        this.ultimoVto = this.navParams.data.vto;
        this.cuotas = this.navParams.data.cuotas;
        this.totalCuotas = this.cuotas.length;
        //console.log('data', this.ultimoVto);
        this.calculoSaldos();
    }
    VencimientoPage.prototype.calculoSaldos = function () {
        var _this = this;
        this.cuotas.map(function (x) {
            if (x.Saldo > 0) {
                _this.saldos.push(x);
            }
        });
    };
    VencimientoPage.prototype.avatarImg = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.fbid = true;
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=square";
            }
            else {
                _this.fbid = false;
            }
        });
    };
    VencimientoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VencimientoPage');
    };
    VencimientoPage.prototype.presentPopover = function (myevent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({ ev: myevent });
    };
    VencimientoPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */]);
    };
    VencimientoPage.prototype.goToPagos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserPage */]);
    };
    VencimientoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-vencimiento',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/vencimiento/vencimiento.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar transparent>\n    <ion-row>\n      <ion-title float-right><ion-icon style="margin-right:0px !important;color: white !important;" name="mila-logo"></ion-icon></ion-title>\n      <ion-buttons *ngIf="!fbid" float-right end (click)="presentPopover($event)">\n        <button ion-button icon-only>\n          <ion-icon style="margin-right:0px !important;font-size: 1.2em !important; color: white !important;" name="mila-avatar"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons *ngIf="fbid" float-right end (click)="presentPopover($event)">\n        <ion-avatar item-start>\n          <img [src]="imgSrc">\n        </ion-avatar>\n      </ion-buttons>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row >\n    <ion-col>\n        <p text-center no-margin style="color: #fff;">Estimado (a):</p>\n        <h2 text-center  no-margin  style="color: #fff;">{{nameUser}}</h2>\n        <p text-center  style="color: #fff;">A continuación vera el detalle del saldo adeudado</p>\n            <ion-card class="redbg">\n                <ion-card-content>\n                  <p>Tenga en cuenta que los pagos realizados pueden demorar hasta 72hs hábiles en verse reflejados</p>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card class="redbrd">\n                <ion-card-content>\n                  \n                  <ion-list>\n                        <ion-item>\n                          <ion-row>\n                              <ion-col col-7>\n                                  <p>Vencimiento</p>\n                              </ion-col>\n                              <ion-col class="derecha" col-5>\n                                  <span>{{ultimoVto | date :  "dd/MM/y"}}</span>\n                              </ion-col>\n                          </ion-row>\n                        </ion-item>\n                  </ion-list>\n                  <ion-list *ngFor="let saldo of saldos">\n                        <ion-item>\n                            <ion-row>\n                                <ion-col col-7>\n                                    <p>Saldo Cuota {{saldo.Numero}} de {{totalCuotas}}:</p>\n                                </ion-col>\n                                <ion-col class="derecha" col-5>\n                                    <span>{{saldo.Saldo | currency:\'$\':true:"1.2" }}</span>\n                                </ion-col>\n                            </ion-row>\n                          </ion-item>\n                    </ion-list>\n                    <p text-center><br>(Los intereses punitorios pueden variar. Corrobore al momento de abonar)</p>\n                </ion-card-content>\n            </ion-card>\n            <div padding>\n                <button class="pagar" ion-button block (click)="goToPagos()">Como pagar</button>\n              </div>\n\n    </ion-col>\n  </ion-row>\n \n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/vencimiento/vencimiento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], VencimientoPage);
    return VencimientoPage;
}());

//# sourceMappingURL=vencimiento.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_popover_popover__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, popoverCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.fbid = false;
        this.avatarImg();
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.presentPopover = function (myevent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({ ev: myevent });
    };
    UserPage.prototype.avatarImg = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.fbid = true;
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=square";
            }
            else {
                _this.fbid = false;
            }
        });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/user/user.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar transparent>\n    <ion-row>\n      <ion-title float-right><ion-icon style="margin-right:0px !important;color: white !important;" name="mila-logo"></ion-icon></ion-title>\n      <ion-buttons *ngIf="!fbid" float-right end (click)="presentPopover($event)">\n        <button ion-button icon-only>\n          <ion-icon style="margin-right:0px !important;font-size: 1.2em !important; color: white !important;" name="mila-avatar"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons *ngIf="fbid" float-right end (click)="presentPopover($event)">\n        <ion-avatar item-start>\n          <img [src]="imgSrc">\n        </ion-avatar>\n      </ion-buttons>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row >\n    <ion-col>\n        <h5 text-center style="color: white;"><strong>Formas de pago</strong></h5>\n            <ion-card class="redbg">\n                <ion-card-content>\n                  <p>\n                    Los intereses pueden variar.<br>\n                    Corrobore al momento de abonar.\n                  </p>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card class="redbrd">\n                <ion-card-content>\n                  <ion-row style="margin-bottom: 5px;">\n                    <img class="pago" src="../../assets/imgs/pago-facil.png">\n                  </ion-row>\n                  <ion-row>\n                    <ion-col>\n                      <p text-center>Busca tu sucursal más cercana con N° de DNI o código de barras.</p>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row style="height: 30px;"></ion-row>\n                  <ion-row>\n                    <img class="pago2" src="../../assets/imgs/rapipago.png" alt="">\n                  </ion-row>\n                  <ion-row>\n                    <ion-col>\n                      <p text-center>Busca tu sucursal más cercana Código de empresa 3064 o código de barras.</p>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row style="height: 30px;">\n                  </ion-row>\n                  <ion-row>\n                    <ion-col>\n                      <p text-center>Tenga en cuenta que los pagos realizados pueden demorar 72 hs hábiles, posteriores a su acreditación, en verse reflejados en sistema</p>\n                    </ion-col>\n                  </ion-row>\n                </ion-card-content>\n              </ion-card>      \n    </ion-col>\n  </ion-row>\n \n</ion-content>'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__perfil_perfil__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plugins_cordova_plugin_serviceOnBoardingSDK_www_serviceOnBoardingSDK_js__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plugins_cordova_plugin_serviceOnBoardingSDK_www_serviceOnBoardingSDK_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__plugins_cordova_plugin_serviceOnBoardingSDK_www_serviceOnBoardingSDK_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { initialize } from 'serviceonboardingsdk';



var FirstPage = /** @class */ (function () {
    function FirstPage(navCtrl, navParams, loadingCtrl, fb, storage, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.storage = storage;
        this.service = service;
    }
    FirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstPage');
    };
    //login with Facebook
    FirstPage.prototype.loginAction = function () {
        var _this = this;
        //permissions
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            if (res.status == "connected") {
                //Get user ID an Token
                var fb_id = res.authResponse.userID;
                _this.storage.set('_fbid', res.authResponse.userID);
                var fb_token = res.authResponse.accessToken;
                console.log('id and toke', fb_id, fb_token);
                //Get user infos from the API
                _this.fb.api("/me?fields=name,email", [])
                    .then(function (user) {
                    var name = user.name;
                    var email = user.email;
                    console.log('emailDeFace', email);
                    if (email != "") {
                        //this.storage.set('emailFB', email);
                        var loading_1 = _this.loadingCtrl.create({
                            spinner: 'bubbles',
                            content: 'Espere por favor...'
                        });
                        _this.service.getTokenEmail(email).subscribe(function (x) {
                            console.log('1Data', x);
                            _this.service.getDatosCliente().subscribe(function (x) {
                                console.log('2Data', x);
                                loading_1.dismiss();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                            });
                        });
                    }
                });
            }
            else {
                //error ocurred while loging-in
                console.log("Error ocurred");
            }
        })
            .catch(function (error) {
            console.log('Error logging into Facebook', error);
        });
    };
    /* login con faceId */
    FirstPage.prototype.login = function () {
        var success = function () { alert('success'); };
        var error = function () { console.log('error'); };
        console.log('entro al ready', __WEBPACK_IMPORTED_MODULE_5__plugins_cordova_plugin_serviceOnBoardingSDK_www_serviceOnBoardingSDK_js__["initialize"]);
        Object(__WEBPACK_IMPORTED_MODULE_5__plugins_cordova_plugin_serviceOnBoardingSDK_www_serviceOnBoardingSDK_js__["initialize"])('https://rest.microlending.com.ar/biometria/v1/vu/', 'dbd001c8-8779-424c-82ef-1b708f2bf7bf', success, error);
        //cordova.plugins.
        //cordova.plugin.serviceonboardingsdk.initialize('https://rest.microlending.com.ar/biometria/v1/vu/','dbd001c8-8779-424c-82ef-1b708f2bf7bf',success, error);
        //this.sdk.initialize('https://rest.microlending.com.ar/biometria/v1/vu/','dbd001c8-8779-424c-82ef-1b708f2bf7bf',success, error);
    };
    FirstPage.prototype.goTointerLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    FirstPage.prototype.goToPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__perfil_perfil__["a" /* PerfilPage */]);
    };
    FirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-first',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/first/first.html"*/'<ion-content padding>\n  <ion-row style="margin-top: 10%">\n    <ion-col>\n      <img class="firstImg" src="../../assets/imgs/login/iso.png">\n    </ion-col>\n  </ion-row>\n  <!-- <ion-row style="height: 20px;"></ion-row> -->\n  <ion-row style="margin-top: 10%">\n    <ion-col>\n      <img class="secondImg" src="../../assets/imgs/login/id-face.png" (click)="login()">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <h3 style="margin-top: 10%; color: darkmagenta;">FACE ID</h3>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <p style="font-size: 0.9em; color: grey;"><strong>Elegí tu ID ideal para iniciar</strong></p>\n    </ion-col>\n  </ion-row>\n<!--   <ion-row>\n    <ion-col>\n      <button style="background-color:white !important; color:red;" ion-button icon-start>\n        <ion-icon name="mila-google"></ion-icon>\n        Google\n      </button>\n    </ion-col>\n  </ion-row> -->\n  <ion-row style="margin-top: 10%">\n    <ion-col (click)="loginAction()">\n      <button class="face" style="background-color:white !important; color:darkblue;" ion-button>\n        <ion-icon name="mila-facebook"></ion-icon>        \n        Facebook\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col (click)="goTointerLogin()">\n      <button class="sesion" style="background-color:white !important; color: #777; font-size: 0.9em;" ion-button>        \n        Iniciar con mi usuario\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/first/first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__providers_services_services__["a" /* ServicesProvider */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 185:
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
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewPassPage = /** @class */ (function () {
    function NewPassPage(navCtrl, navParams, services, toastCrtl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
        this.toastCrtl = toastCrtl;
        this.storage = storage;
        this.user = {
            pw1: "",
            pw2: ""
        };
        this.info = [];
        this.data = [];
    }
    NewPassPage.prototype.ionViewWillEnter = function () {
        this.user.pw1 = "";
        this.user.pw2 = "";
    };
    NewPassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad newPassPage');
    };
    NewPassPage.prototype.enviarPass = function () {
        var _this = this;
        if (this.user.pw1 === this.user.pw2) {
            this.storage.get('userEmail').then(function (val) {
                if (val) {
                    _this.services.getChangeNewPass(val, _this.user.pw1).subscribe(function (x) {
                        console.log('xPassData', x);
                        _this.info = JSON.parse(x['_body']);
                        //this.data = JSON.parse(this.info);
                        console.log('data', _this.info);
                        if (_this.info['SolicitudProcesada']) {
                            _this.storage.set('cambioPass', false);
                            _this.msg = _this.info['Resultado'];
                            _this.toastError();
                            setTimeout(function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                            }, 2000);
                        }
                        else {
                            _this.msg = _this.info['Resultado'];
                            _this.toastError();
                            setTimeout(function () {
                                _this.navCtrl.pop();
                            }, 2000);
                        }
                    });
                }
            });
        }
        else {
            this.msg = 'Tus contraseñas no coinciden!';
            this.toastError();
        }
    };
    NewPassPage.prototype.toastError = function () {
        var toast = this.toastCrtl.create({
            message: this.msg,
            showCloseButton: true,
            duration: 4000,
            closeButtonText: "X",
            position: 'top',
            cssClass: 'toastError'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    NewPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-new-pass',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/new-pass/new-pass.html"*/'<ion-header no-border no-shadow transparent>\n  <ion-navbar transparent>\n  </ion-navbar>\n</ion-header>    \n<ion-content overflow-scroll="true">\n    <ion-grid>\n        <ion-row>\n          <ion-col col-12 class="logo-cont">\n              <img src="../../assets/imgs/login/logo-completo.svg" alt="" class="m-logo">\n          </ion-col>\n        </ion-row>\n        <ion-row>  \n          <ion-card class="login-form">\n            <ion-card-content>\n              <ion-list>\n                <ion-item>      \n                  <ion-label><img src="../../assets/imgs/login/pass.png" alt=""></ion-label>\n                  <ion-input type="password" [(ngModel)]="user.pw1" placeholder="Nueva contraseña"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <img src="../../assets/imgs/login/pass.png" alt="">\n                  <ion-label text-wrap><img src="../../assets/imgs/login/pass.png" alt=""></ion-label>\n                  <ion-input type="password" [(ngModel)]="user.pw2" placeholder="Repetir contraseña"></ion-input>\n                </ion-item>\n                <button ion-button full (click)="enviarPass()"><strong>Enviar</strong></button>\n              </ion-list>\n            </ion-card-content>     \n          </ion-card>\n        </ion-row>\n    </ion-grid>\n</ion-content>  '/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/new-pass/new-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], NewPassPage);
    return NewPassPage;
}());

//# sourceMappingURL=new-pass.js.map

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-second/admin-second.module": [
		709,
		16
	],
	"../pages/admin/admin.module": [
		710,
		15
	],
	"../pages/ayuda/ayuda.module": [
		711,
		14
	],
	"../pages/cancelacion/cancelacion.module": [
		712,
		13
	],
	"../pages/faqs/faqs.module": [
		713,
		12
	],
	"../pages/first/first.module": [
		714,
		11
	],
	"../pages/juiciable/juiciable.module": [
		715,
		10
	],
	"../pages/login/login.module": [
		716,
		9
	],
	"../pages/menu-principal/menu-principal.module": [
		717,
		8
	],
	"../pages/menu/menu.module": [
		718,
		7
	],
	"../pages/perfil/perfil.module": [
		719,
		6
	],
	"../pages/prenda/prenda.module": [
		720,
		5
	],
	"../pages/seguros/seguros.module": [
		721,
		4
	],
	"../pages/telefonos/telefonos.module": [
		722,
		3
	],
	"../pages/user-second/user-second.module": [
		723,
		2
	],
	"../pages/user/user.module": [
		724,
		1
	],
	"../pages/vencimiento/vencimiento.module": [
		725,
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
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the TerminosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TerminosPage = /** @class */ (function () {
    function TerminosPage(navCtrl, navParams, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.terminos = [];
        this.service.getTerminos().subscribe(function (x) {
            _this.terminos = JSON.parse(JSON.parse(x['_body'])['data']);
        });
    }
    TerminosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TerminosPage');
    };
    TerminosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-terminos',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/terminos/terminos.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar color="menu">\n    <ion-title style="font-size: 1em;">Términos y Condiciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-row>\n    <ion-col text-center class="faqs-header">\n    </ion-col>\n  </ion-row>\n  <div padding *ngFor="let t of terminos">\n    <div class="chart-body" [innerHTML]="t.valor"></div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/terminos/terminos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_services_services__["a" /* ServicesProvider */]])
    ], TerminosPage);
    return TerminosPage;
}());

//# sourceMappingURL=terminos.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_popover_popover__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PagosPage = /** @class */ (function () {
    function PagosPage(navCtrl, navParams, popoverCtrl, storage, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.fbid = false;
        //console.log('llega',this.navParams.data);
        if (!this.navParams.data) {
            this.sinDebito = true;
            this.debito = false;
        }
        else {
            this.debito = true;
            this.sinDebito = false;
        }
    }
    PagosPage.prototype.avatarImg = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.fbid = true;
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=square";
            }
            else {
                _this.fbid = false;
            }
        });
    };
    PagosPage.prototype.ionViewWillEnter = function () {
        this.avatarImg();
    };
    PagosPage.prototype.presentPopover = function (myevent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({ ev: myevent });
    };
    PagosPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
    };
    PagosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagosPage');
    };
    PagosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-pagos',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/pagos/pagos.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar transparent>\n    <ion-row class="row-nav">\n      <ion-title style="text-align: center;"><ion-icon style="margin-right:0px !important;color: white !important;" name="mila-logo"></ion-icon></ion-title>\n      <ion-buttons *ngIf="!fbid" float-right end (click)="presentPopover($event)">\n        <button ion-button icon-only>\n          <ion-icon style="margin-right:0px !important;font-size: 1.2em !important; color: white !important;" name="mila-avatar"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons *ngIf="fbid" float-right end (click)="presentPopover($event)">\n        <ion-avatar item-start>\n          <img [src]="imgSrc">\n        </ion-avatar>\n      </ion-buttons>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row *ngIf="sinDebito">\n    <ion-col>\n      <h5 text-center style="color: white;"><strong>Formas de pago</strong></h5>\n      <ion-card class="redbrd">\n        <ion-card-content>\n          <ion-row style="margin-bottom: 5px;">\n            <img class="pago" src="../../assets/imgs/pago-facil.png">\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p text-center>Busca tu sucursal más cercana con N° de DNI o código de barras.</p>\n            </ion-col>\n          </ion-row>\n          <ion-row style="height: 30px;"></ion-row>\n          <ion-row>\n            <img class="pago2" src="../../assets/imgs/rapipago.png" alt="">\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p text-center>Busca tu sucursal más cercana Código de empresa 3064 o código de barras.</p>\n            </ion-col>\n          </ion-row>\n          <ion-row style="height: 30px;">\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p text-center>Tenga en cuenta que los pagos realizados pueden demorar 72 hs hábiles, posteriores a su acreditación, en verse reflejados en sistema</p>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="debito">\n      <ion-col>\n        <h5 text-center style="color: white;"><strong>Formas de pago</strong></h5>\n        <ion-card class="redbrd">\n          <ion-card-content>\n            <ion-row style="margin-bottom: 5px;">\n              <img class="pago" src="../../assets/imgs/alert.svg">\n            </ion-row>\n            <ion-row style="height: 30px;"></ion-row>\n            <ion-row>\n              <ion-col>\n                <p text-center>Tu cuota será debitada de la cuenta N° 343435455 del banco XXXX</p>\n              </ion-col>\n            </ion-row>\n            <ion-row style="height: 30px;">\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <p text-center>Tenga en cuenta que los pagos realizados pueden demorar 72 hs hábiles, posteriores a su acreditación, en verse reflejados en sistema</p>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/pagos/pagos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_services_services__["a" /* ServicesProvider */]])
    ], PagosPage);
    return PagosPage;
}());

//# sourceMappingURL=pagos.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CambioPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CambioPassPage = /** @class */ (function () {
    function CambioPassPage(navCtrl, navParams, services, toastCrtl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
        this.toastCrtl = toastCrtl;
        this.storage = storage;
        this.user = {
            email: "",
            pw: ""
        };
        this.info = [];
        this.data = [];
    }
    CambioPassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CambioPassPage');
    };
    CambioPassPage.prototype.enviarPass = function () {
        var _this = this;
        if (this.user.email !== "") {
            this.services.getChangePass(this.user.email).subscribe(function (x) {
                console.log('xPassData', x);
                _this.info = JSON.parse(x['_body']);
                //this.data = JSON.parse(this.info);
                console.log('data', _this.info);
                if (_this.info['SolicitudProcesada']) {
                    _this.storage.set('cambioPass', true);
                    _this.storage.set('userEmail', _this.user.email);
                    _this.msg = 'Te enviamos un email a tu casilla, con una nueva contraseña temporal';
                    _this.toastError();
                    setTimeout(function () {
                        _this.navCtrl.pop();
                    }, 2000);
                }
                else {
                    _this.msg = _this.info['Resultado'];
                    _this.toastError();
                    setTimeout(function () {
                        _this.navCtrl.pop();
                    }, 2000);
                }
            });
        }
        else {
            this.msg = 'Debes ingresar tu email';
            this.toastError();
        }
    };
    CambioPassPage.prototype.toastError = function () {
        var toast = this.toastCrtl.create({
            message: this.msg,
            showCloseButton: true,
            duration: 4000,
            closeButtonText: "X",
            position: 'top',
            cssClass: 'toastError'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CambioPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-cambio-pass',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/cambio-pass/cambio-pass.html"*/'<ion-header no-border no-shadow transparent>\n  <ion-navbar transparent>\n  </ion-navbar>\n</ion-header>    \n<ion-content overflow-scroll="true">\n    <ion-grid>\n        <ion-row>\n          <ion-col col-12 class="logo-cont">\n              <img src="../../assets/imgs/login/logo-completo.svg" alt="" class="m-logo">\n          </ion-col>\n        </ion-row>\n        <ion-row>  \n          <ion-card class="login-form">\n            <ion-card-content>\n              <ion-list>\n                <ion-item>      \n                  <ion-label><img src="../../assets/imgs/login/user.png" alt=""></ion-label>\n                  <ion-input type="text" [(ngModel)]="user.email" placeholder="Email"></ion-input>\n                </ion-item>\n                <!-- <p text-center style="font-size: 0.6em;">Password (opcional)</p> -->\n<!--                 <ion-item>\n                  <img src="../../assets/imgs/login/pass.png" alt="">\n                  <ion-label text-wrap><img src="../../assets/imgs/login/pass.png" alt=""></ion-label>\n                  <ion-input type="password" [(ngModel)]="user.pw" placeholder="Nueva contraseña"></ion-input>\n                </ion-item> -->\n                <button ion-button full (click)="enviarPass()"><strong>Enviar</strong></button>\n              </ion-list>\n            </ion-card-content>     \n          </ion-card>\n        </ion-row>\n    </ion-grid>\n</ion-content>  '/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/cambio-pass/cambio-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], CambioPassPage);
    return CambioPassPage;
}());

//# sourceMappingURL=cambio-pass.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_perfil_perfil__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(navCtrl) {
        this.navCtrl = navCtrl;
        /* console.log('Hello PopoverComponent Component');
        this.text = 'Hello World'; */
    }
    PopoverComponent.prototype.goToPerfil = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pages_perfil_perfil__["a" /* PerfilPage */], name);
    };
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'popover',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/components/popover/popover.html"*/'<ion-list>\n  <ion-item (click)="goToPerfil(\'rodri\')">\n    <p>Actualizar perfil</p>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/components/popover/popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_principal_menu_principal__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__telefonos_telefonos__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_second_admin_second__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__seguros_seguros__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ayuda_ayuda__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_popover_popover__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__juiciable_juiciable__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_services_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, authProvider, appCtrl, popoverCtrl, toastCtrl, storage, serviceProvider) {
        /* this.pages = [
          { title: 'Menu principal', page: MenuPrincipalPage, iconName: 'mila-3sol', sub:'Menu - Opciones' },
          { title: 'Estado de Cuentas', page: AdminPage, iconName: 'mila-2est', sub:'Estado - informar pago' },
          { title: 'Solicitud de pre cancelación', page: CancelacionPage, iconName: 'mila-3sol', sub:'Funcionalidad - flujo' },
          { title: 'Solicitud de prenda', page: PrendaPage, iconName: 'mila-4pren', sub:'Funcionalidad - flujo' },
          { title: 'Seguros', page: SegurosPage, iconName: 'mila-5seg', sub:'Auto - Vida - Hogar' },
          { title: 'Teléfonos', page: TelefonosPage , iconName: 'mila-6phone', sub: 'Listados de utilidad' },
          { title: 'Novedades & tips', page: AdminSecondPage , iconName: 'mila-7news', sub: 'Notificaciones - tips' },
          { title: 'Preguntas', page: AyudaPage , iconName: 'mila-8preg', sub:'Preguntas frecuentes' }
        ]; */
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.appCtrl = appCtrl;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__menu_principal_menu_principal__["a" /* MenuPrincipalPage */];
        this.pages = [];
        this.username = '';
        this.fbid = false;
    }
    MenuPage.prototype.ionViewWillEnter = function () {
        this.avatarImg();
        console.log(this.serviceProvider._prestamo);
        this.pages = [];
        this.pages.push({ title: 'Menu principal', page: __WEBPACK_IMPORTED_MODULE_1__menu_principal_menu_principal__["a" /* MenuPrincipalPage */], iconName: 'mila-3sol', sub: 'Menu - Opciones' });
        this.pages.push({ title: 'Estado de Cuentas', page: this.serviceProvider._prestamo.Judicializado ? __WEBPACK_IMPORTED_MODULE_12__juiciable_juiciable__["a" /* JuiciablePage */] : __WEBPACK_IMPORTED_MODULE_6__admin_admin__["a" /* AdminPage */], iconName: 'mila-2est', sub: 'Estado - Forma de pago' });
        /* if (this.serviceProvider._prestamo.HabilitadoPedidoPrecancelacion) {
          this.pages.push({ title: 'Solicitud de pre cancelación', page: CancelacionPage, iconName: 'mila-3sol', sub:'Funcionalidad - flujo' });
        }
        if (this.serviceProvider._prestamo.HabilitadoPedidoPrenda) {
          this.pages.push({ title: 'Solicitud de prenda', page: PrendaPage, iconName: 'mila-4pren', sub:'Funcionalidad - flujo' });
        } */
        if (this.serviceProvider._prestamo.PolizaVigente) {
            this.pages.push({ title: 'Seguros', page: __WEBPACK_IMPORTED_MODULE_8__seguros_seguros__["a" /* SegurosPage */], iconName: 'mila-5seg', sub: 'Auto - Vida - Hogar' });
        }
        this.pages.push({ title: 'Teléfonos', page: __WEBPACK_IMPORTED_MODULE_2__telefonos_telefonos__["a" /* TelefonosPage */], iconName: 'mila-6phone', sub: 'Listados de utilidad' });
        this.pages.push({ title: 'Novedades & tips', page: __WEBPACK_IMPORTED_MODULE_7__admin_second_admin_second__["a" /* AdminSecondPage */], iconName: 'mila-7news', sub: 'Notificaciones - tips' });
        this.pages.push({ title: 'Preguntas', page: __WEBPACK_IMPORTED_MODULE_9__ayuda_ayuda__["a" /* AyudaPage */], iconName: 'mila-8preg', sub: 'Preguntas frecuentes' });
    };
    MenuPage.prototype.avatarImg = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.fbid = true;
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=large";
            }
            else {
                _this.fbid = false;
            }
        });
    };
    MenuPage.prototype.logout = function () {
        this.authProvider.logout();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    MenuPage.prototype.openPage = function (page) {
        if (page.title == 'Estado de Cuentas' && this.serviceProvider._prestamo.Judicializado) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_12__juiciable_juiciable__["a" /* JuiciablePage */]);
        }
        if (page === __WEBPACK_IMPORTED_MODULE_8__seguros_seguros__["a" /* SegurosPage */] && this.serviceProvider._prestamo.PolizaVigente['DocumentosPoliza'].length === 0) {
            this.toastError();
            /* setTimeout(()=>{
              this.navCtrl.setRoot(this.navCtrl.getActive().component);
            },1000) */
        }
        else {
            this.nav.push(page);
        }
    };
    MenuPage.prototype.presentPopover = function (myevent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_11__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({ ev: myevent });
    };
    MenuPage.prototype.toastError = function () {
        var toast = this.toastCtrl.create({
            message: 'Documentos de la Poliza vacia!',
            showCloseButton: true,
            closeButtonText: "X",
            duration: 5000,
            position: 'bottom',
            cssClass: 'toastError'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-header no-shadow no-border>\n    <ion-navbar class="navMenu" hideBackButton transparent>\n    <ion-buttons end (click)="logout()">\n      <button ion-button icon-only>\n        <ion-icon style="color: white !important;" name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  </ion-header>\n \n  <ion-content class="menucontent" style="background-image: linear-gradient(to bottom, #572174, #7625cb);">\n    <ion-row style="text-align: center;">\n      <ion-col *ngIf="!fbid">\n        <img style="max-width:20% !important;" src="../../assets/imgs/1us-blanco.svg" (click)="presentPopover($event)">\n      </ion-col>\n      <ion-col *ngIf="fbid">\n        <img style="max-width:40% !important;" [src]="imgSrc" (click)="presentPopover($event)">\n      </ion-col>\n    </ion-row>\n    <ion-list no-lines inset>\n      <ion-list-header>\n        <strong>Menú</strong>\n      </ion-list-header>\n      <ion-item no-lines menuClose *ngFor="let p of pages" (click)="openPage(p.page)">\n        <ion-icon style="color: white !important; font-size: 0.4em !important;" name="{{p.iconName}}" item-start></ion-icon>\n        <p style="font-size:0.7em; color: white;"><strong>{{ p.title }}</strong></p>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n \n</ion-menu>\n \n<ion-nav #content main [root]="rootPage" persistent=“true” swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_13__providers_services_services__["a" /* ServicesProvider */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(380);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_new_pass_new_pass__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_cambio_pass_cambio_pass__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pagos_pagos__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_terminos_terminos__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_popover_popover__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_call_number__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_menu_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_user_second_user_second__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_user_user__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_admin_second_admin_second__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_admin_admin__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_telefonos_telefonos__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_faqs_faqs__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_first_first__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_perfil_perfil__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_seguros_seguros__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_ayuda_ayuda__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_menu_principal_menu_principal__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__directives_scroll_hide_scroll_hide__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_prenda_prenda__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_cancelacion_cancelacion__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_screen_orientation__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_common_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ngx_pagination__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_expandable_expandable__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_vencimiento_vencimiento__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_juiciable_juiciable__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_admin_second_admin_second__["a" /* AdminSecondPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_second_user_second__["a" /* UserSecondPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_telefonos_telefonos__["a" /* TelefonosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_faqs_faqs__["a" /* FaqsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_ayuda_ayuda__["a" /* AyudaPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_seguros_seguros__["a" /* SegurosPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_cancelacion_cancelacion__["a" /* CancelacionPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_prenda_prenda__["a" /* PrendaPage */],
                __WEBPACK_IMPORTED_MODULE_38__components_expandable_expandable__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_vencimiento_vencimiento__["a" /* VencimientoPage */],
                __WEBPACK_IMPORTED_MODULE_30__directives_scroll_hide_scroll_hide__["a" /* ScrollHideDirective */],
                __WEBPACK_IMPORTED_MODULE_29__pages_menu_principal_menu_principal__["a" /* MenuPrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_5__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_40__pages_juiciable_juiciable__["a" /* JuiciablePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_terminos_terminos__["a" /* TerminosPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_pagos_pagos__["a" /* PagosPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_cambio_pass_cambio_pass__["a" /* CambioPassPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_new_pass_new_pass__["a" /* NewPassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_34__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_36__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_37_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    backButtonIcon: 'md-arrow-back',
                    iconMode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/admin-second/admin-second.module#AdminSecondPageModule', name: 'AdminSecondPage', segment: 'admin-second', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ayuda/ayuda.module#AyudaPageModule', name: 'AyudaPage', segment: 'ayuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cancelacion/cancelacion.module#CancelacionPageModule', name: 'CancelacionPage', segment: 'cancelacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faqs/faqs.module#FaqsPageModule', name: 'FaqsPage', segment: 'faqs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/first/first.module#FirstPageModule', name: 'FirstPage', segment: 'first', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/juiciable/juiciable.module#JuiciablePageModule', name: 'JuiciablePage', segment: 'juiciable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-principal/menu-principal.module#MenuPrincipalPageModule', name: 'MenuPrincipalPage', segment: 'menu-principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prenda/prenda.module#PrendaPageModule', name: 'PrendaPage', segment: 'prenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seguros/seguros.module#SegurosPageModule', name: 'SegurosPage', segment: 'seguros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/telefonos/telefonos.module#TelefonosPageModule', name: 'TelefonosPage', segment: 'telefonos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-second/user-second.module#UserSecondPageModule', name: 'UserSecondPage', segment: 'user-second', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vencimiento/vencimiento.module#VencimientoPageModule', name: 'VencimientoPage', segment: 'vencimiento', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_admin_second_admin_second__["a" /* AdminSecondPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_second_user_second__["a" /* UserSecondPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_faqs_faqs__["a" /* FaqsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_ayuda_ayuda__["a" /* AyudaPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_seguros_seguros__["a" /* SegurosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_telefonos_telefonos__["a" /* TelefonosPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_cancelacion_cancelacion__["a" /* CancelacionPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_prenda_prenda__["a" /* PrendaPage */],
                __WEBPACK_IMPORTED_MODULE_38__components_expandable_expandable__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_vencimiento_vencimiento__["a" /* VencimientoPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_menu_principal_menu_principal__["a" /* MenuPrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_5__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_40__pages_juiciable_juiciable__["a" /* JuiciablePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_terminos_terminos__["a" /* TerminosPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_pagos_pagos__["a" /* PagosPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_cambio_pass_cambio_pass__["a" /* CambioPassPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_new_pass_new_pass__["a" /* NewPassPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_35__providers_services_services__["a" /* ServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

//var exec = require('cordova/exec');

function ServiceOnBoardingSDK(){}


ServiceOnBoardingSDK.prototype.initialize = function(serverURL, serverAPIKEY, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "initialize", [serverURL, serverAPIKEY]);
};

ServiceOnBoardingSDK.prototype.registerFaceService = function(selfieBodyList, userIdentifier, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "registerFaceService", [selfieBodyList, userIdentifier, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName]);
};

ServiceOnBoardingSDK.prototype.loginFaceService = function(selfieBodyList, userIdentifier, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "loginFaceService", [selfieBodyList, userIdentifier, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName]);
};

ServiceOnBoardingSDK.prototype.newOperationOnboardingService = function(userIdentifier, ipAddress, deviceHash, rooted, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "newOperationOnboardingService", [userIdentifier, ipAddress, deviceHash, rooted, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName]);
};

ServiceOnBoardingSDK.prototype.endOperationOnboardingService = function(userIdentifier, operationId, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "endOperationOnboardingService", [userIdentifier, operationId]);
};

ServiceOnBoardingSDK.prototype.cancelOperationOnboardingService = function(userIdentifier, operationId, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "cancelOperationOnboardingService", [userIdentifier, operationId]);
};

ServiceOnBoardingSDK.prototype.statusOperationOnboardingService = function(userIdentifier, operationId, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "statusOperationOnboardingService", [userIdentifier, operationId]);
};

ServiceOnBoardingSDK.prototype.addLocationOnboardingService = function(userIdentifier, operationId, latitude, longitude, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addLocationOnboardingService", [userIdentifier, operationId, latitude, longitude]);
};

ServiceOnBoardingSDK.prototype.addFrontOnboardingService = function(userIdentifier, operationId, imageBase64, country, documentType, documentVersion, hasBarcode, barcodeType, analyzeAnomalies, analyzeOcr, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addFrontOnboardingService", [userIdentifier, operationId, imageBase64, country, documentType, documentVersion, hasBarcode, barcodeType, analyzeAnomalies, analyzeOcr]);
};

ServiceOnBoardingSDK.prototype.addDocumentImageOnboardingService = function(userIdentifier, operationId, imageBase64, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addDocumentImageOnboardingService", [userIdentifier, operationId, imageBase64]);
};

ServiceOnBoardingSDK.prototype.addBackOnboardingService = function(userIdentifier, operationId, imageBase64, country, documentType, documentVersion, hasBarcode, barcodeType, analyzeAnomalies, analyzeOcr, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addBackOnboardingService", [userIdentifier, operationId, imageBase64, country, documentType, documentVersion, hasBarcode, barcodeType, analyzeAnomalies, analyzeOcr]);
};

ServiceOnBoardingSDK.prototype.addOcrOnboardingService = function(userIdentifier, operationId, document, imageBase64, data, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addOcrOnboardingService", [userIdentifier, operationId, document, imageBase64, data]);
};

ServiceOnBoardingSDK.prototype.addBarcodeOnboardingService = function(userIdentifier, operationId, document, data, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addBarcodeOnboardingService", [userIdentifier, operationId, document, data]);
};

ServiceOnBoardingSDK.prototype.addAnomaliesOnboardingServiceString = function(userIdentifier, operationId, document, imageBase64, data, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "addAnomaliesOnboardingServiceString", [userIdentifier, operationId, document, imageBase64, data]);
};

ServiceOnBoardingSDK.prototype.registerOnboardingService = function(selfieBodyList, userIdentifier, operationId, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "registerOnboardingService", [selfieBodyList, userIdentifier, operationId]);
};

ServiceOnBoardingSDK.prototype.scoreOnboardingService = function(userIdentifier, operationId, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "scoreOnboardingService", [userIdentifier, operationId]);
};

ServiceOnBoardingSDK.prototype.captureFront = function(title, instructions, scanCountry, showTutorial, tutorialTitle, tutorialDescription, faceDetectionMaximumWait, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "captureFront", [title, instructions, scanCountry, showTutorial, tutorialTitle, tutorialDescription, faceDetectionMaximumWait, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled]);
};

ServiceOnBoardingSDK.prototype.captureBack = function(title, instructions, scanCountry, barcodeDetectionMaximumWait, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "captureBack", [title, instructions, scanCountry, barcodeDetectionMaximumWait, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled]);
};

ServiceOnBoardingSDK.prototype.captureSelfie = function(infoText, neutralText, smileText, closeEyesText, waitText, cameraFrames, neutralFrames, smileFrames, closeEyesFrames, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, color, closeText, buttonCloseEnabled, buttonCloseTutorialEnabled, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "captureSelfie", [infoText, neutralText, smileText, closeEyesText, waitText, cameraFrames, neutralFrames, smileFrames, closeEyesFrames, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, color, closeText, buttonCloseEnabled, buttonCloseTutorialEnabled]);
};

ServiceOnBoardingSDK.prototype.captureQR = function(title, instructions, scanCountry, barcodeDetectionMaximumWait, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, success, error) {
    cordova.exec(success, error, "serviceOnBoardingSDK", "captureQR", [title, instructions, scanCountry, barcodeDetectionMaximumWait, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled]);
};

module.exports = new ServiceOnBoardingSDK();

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { MenuPage } from './../menu/menu';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, auth, services) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.services = services;
        this.nameUser = this.services._persona.nombre;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-perfil',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/perfil/perfil.html"*/'<ion-header no-shadow no-border>\n    <ion-navbar no-border transparent>\n      <ion-title>Actualizar perfil</ion-title>\n      <ion-buttons end (click)="goToHome()">\n        <button ion-button icon-only>\n          <ion-icon style="font-size: 1em !important; color: white !important;" name="mila-tilde"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content no-padding>\n  <!-- <div id="profile-bg"></div> -->\n  <div id="profile-info">\n      <img style="max-width: 20% !important;" src="../../assets/imgs/perfil/cam.png" alt="">\n    </div>\n      <div id="content">\n        \n        <ion-list class="listPerfil" inset>\n\n          <ion-item>\n            <ion-label floating><img src="../../assets/imgs/perfil/user.png" alt="">{{nameUser}}</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label floating><img src="../../assets/imgs/perfil/mail.png" alt=""> Email</ion-label>\n            <ion-input type="email"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating><img src="../../assets/imgs/perfil/tel.png" alt=""> Tel Fijo</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating><img src="../../assets/imgs/perfil/mobile.png" alt=""> Tel Celular</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label floating><img src="../../assets/imgs/perfil/home.png" alt=""> Domicilio</ion-label>\n                    <ion-input type="text"></ion-input>\n                  </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item>\n                    <ion-label floating>Nro.</ion-label>\n                    <ion-input type="text"></ion-input>\n                  </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-item>\n                      <ion-label floating>Provincia</ion-label>\n                      <ion-input type="text"></ion-input>\n                    </ion-item>\n              </ion-col>\n              <ion-col>\n                  <ion-item>\n                      <ion-label floating>Localidad</ion-label>\n                      <ion-input type="text"></ion-input>\n                    </ion-item>\n              </ion-col>\n            </ion-row>\n        </ion-list>\n        <div padding>\n          <button class="guardar" ion-button block (click)="goToHome()">Guardar cambios</button>\n        </div>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_services_services__["a" /* ServicesProvider */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, services, storage) {
        this.navCtrl = navCtrl;
        this.services = services;
        this.storage = storage;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.imgPerfil();
        this.nameUser = this.services._persona.nombre;
        console.log('persona', this.services._persona);
    };
    HomePage.prototype.actualizarPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_perfil__["a" /* PerfilPage */]);
    };
    HomePage.prototype.goToMenu = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    HomePage.prototype.imgPerfil = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=large";
            }
            else {
                _this.imgSrc = "../../assets/imgs/1us-blanco.svg";
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/home/home.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar no-border hideBackButton transparent>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="actualizarPerfil()">\n        <ion-icon style="font-size: 1em !important; color: white !important;" name="mila-lapiz"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="inicio">\n    <img [src]="imgSrc">\n    <h2>Bienvenido</h2>\n    <h5>{{nameUser}}</h5>\n    <p>Ahora podes consultar todos los saldos de tu cuenta desde esta nueva plataforma</p>\n  </div>\n  <button class="comenzar" ion-button block color="comenzar" (click)="goToMenu()">Comenzar</button>\n</ion-content>'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__juiciable_juiciable__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminos_terminos__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cancelacion_cancelacion__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__prenda_prenda__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__seguros_seguros__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__telefonos_telefonos__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_second_admin_second__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ayuda_ayuda__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_popover_popover__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_services_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MenuPrincipalPage = /** @class */ (function () {
    function MenuPrincipalPage(navCtrl, navParams, popoverCtrl, toastCtrl, storage, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.pages = [];
        this.cuotas = [];
        this.mostrarPrendaSolicitada = false;
        this.mostrarPrecancelacion = false;
        this.fbid = false;
    }
    MenuPrincipalPage.prototype.avatarImg = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.fbid = true;
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=square";
            }
            else {
                _this.fbid = false;
            }
        });
    };
    MenuPrincipalPage.prototype.ionViewWillEnter = function () {
        this.avatarImg();
        console.log(this.serviceProvider._prestamo);
        this.pages = [];
        this.pages.push({ title: 'Estado de Cuentas', page: this.serviceProvider._prestamo.Judicializado ? __WEBPACK_IMPORTED_MODULE_1__juiciable_juiciable__["a" /* JuiciablePage */] : __WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */], imgSrc: '../../assets/imgs/menu/2est.svg', sub: 'Estado - Forma de pago' });
        if (this.serviceProvider._prestamo.HabilitadoPedidoPrecancelacion) {
            this.pages.push({ title: 'Solicitud de pre cancelación', page: __WEBPACK_IMPORTED_MODULE_6__cancelacion_cancelacion__["a" /* CancelacionPage */], imgSrc: '../../assets/imgs/menu/3sol.svg', sub: 'Funcionalidad - flujo' });
        }
        if (this.serviceProvider._prestamo.HabilitadoPedidoPrenda && this.serviceProvider.fechaPrenda === null) {
            this.pages.push({ title: 'Solicitud de prenda', page: __WEBPACK_IMPORTED_MODULE_7__prenda_prenda__["a" /* PrendaPage */], imgSrc: '../../assets/imgs/menu/4pren.svg', sub: 'Funcionalidad - flujo' });
        }
        if (this.serviceProvider._prestamo.SolicitudPrenda !== null || this.serviceProvider.fechaPrenda !== null) {
            this.mostrarPrendaSolicitada = true;
            this.solicitudPrenda = this.serviceProvider._prestamo.SolicitudPrenda;
            //console.log('prenda', this.solicitudPrenda['FechaDisponibleRetiro'])
            this.fechaRetiroPrenda = (this.serviceProvider.fechaPrenda !== null ? this.serviceProvider.fechaPrenda : this.solicitudPrenda['FechaDisponibleRetiro']);
        }
        if (this.serviceProvider._prestamo.SolicitudPrecancelacion !== null || this.serviceProvider.solicitudCancelacion.length !== 0) {
            console.log('sol', this.serviceProvider.solicitudCancelacion);
            this.mostrarPrecancelacion = true;
            this.solicitudPrecancelacion = this.serviceProvider._prestamo.SolicitudPrecancelacion;
            this.importePrecancelacion = (this.serviceProvider.solicitudCancelacion.length !== 0 ? this.serviceProvider.solicitudCancelacion['Importe'] : this.solicitudPrecancelacion['Importe']);
            this.vigenciaDesde = (this.serviceProvider.solicitudCancelacion.length !== 0 ? this.serviceProvider.solicitudCancelacion['VigenciaDesde'] : this.solicitudPrecancelacion['VigenciaDesde']);
            this.vigenciaHasta = (this.serviceProvider.solicitudCancelacion.length !== 0 ? this.serviceProvider.solicitudCancelacion['VigenciaHasta'] : this.solicitudPrecancelacion['VigenciaHasta']);
        }
        if (this.serviceProvider._prestamo.PolizaVigente) {
            this.pages.push({ title: 'Seguros', page: __WEBPACK_IMPORTED_MODULE_8__seguros_seguros__["a" /* SegurosPage */], imgSrc: '../../assets/imgs/menu/5seg.svg', sub: 'Auto - Vida - Hogar' });
        }
        this.pages.push({ title: 'Teléfonos', page: __WEBPACK_IMPORTED_MODULE_9__telefonos_telefonos__["a" /* TelefonosPage */], imgSrc: '../../assets/imgs/menu/6phone.svg', sub: 'Listados de utilidad' });
        this.pages.push({ title: 'Novedades & tips', page: __WEBPACK_IMPORTED_MODULE_10__admin_second_admin_second__["a" /* AdminSecondPage */], imgSrc: '../../assets/imgs/menu/7news.svg', sub: 'Notificaciones - tips' });
        this.pages.push({ title: 'Preguntas', page: __WEBPACK_IMPORTED_MODULE_11__ayuda_ayuda__["a" /* AyudaPage */], imgSrc: '../../assets/imgs/menu/8preguntas.svg', sub: 'Preguntas frecuentes' });
    };
    MenuPrincipalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPrincipalPage');
    };
    MenuPrincipalPage.prototype.openPage = function (page) {
        if (this.serviceProvider._prestamo.PolizaVigente) {
            if (page['title'] == 'Seguros' && this.serviceProvider._prestamo.PolizaVigente['DocumentosPoliza'].length == 0) {
                this.toastError();
            }
            else {
                console.log('else');
                this.navCtrl.push(page.page);
            }
        }
        else {
            this.navCtrl.push(page.page);
        }
    };
    MenuPrincipalPage.prototype.goToTerminos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__terminos_terminos__["a" /* TerminosPage */]);
    };
    MenuPrincipalPage.prototype.presentPopover = function (myevent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_12__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({ ev: myevent });
    };
    MenuPrincipalPage.prototype.openSolicitudPedida = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__prenda_prenda__["a" /* PrendaPage */], { prenda: this.solicitudPrenda });
    };
    MenuPrincipalPage.prototype.openSolicitudCancelacion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cancelacion_cancelacion__["a" /* CancelacionPage */], { cancelacion: this.solicitudPrecancelacion });
    };
    MenuPrincipalPage.prototype.toastError = function () {
        var toast = this.toastCtrl.create({
            message: 'Documentos de la Poliza vacia!',
            showCloseButton: true,
            closeButtonText: "X",
            duration: 3000,
            position: 'bottom',
            cssClass: 'toastError'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Nav */])
    ], MenuPrincipalPage.prototype, "nav", void 0);
    MenuPrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-menu-principal',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/menu-principal/menu-principal.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar hideBackButton color="menu">\n      <button ion-button menuToggle>\n        <ion-icon style="color:white !important" name="menu"></ion-icon>\n      </button>\n      <ion-title style="text-align: center;"><ion-icon style="color: white !important;" name="mila-logo"></ion-icon></ion-title>\n      <ion-buttons *ngIf="!fbid" float-right end (click)="presentPopover($event)">\n        <button ion-button icon-only>\n          <ion-icon style="margin-right:0px !important;font-size: 1.2em !important; color: white !important;" name="mila-avatar"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons *ngIf="fbid" float-right end (click)="presentPopover($event)">\n        <ion-avatar item-start>\n          <img [src]="imgSrc">\n        </ion-avatar>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <p style="font-size: 0.7em; margin: 25px; text-align: center;"><strong>MENÚ PRINCIPAL</strong></p>\n  <ion-list>\n    <!-- <button ion-item detail-none block menuClose *ngFor="let p of pages" (click)="openPage(p.page)">\n      <ion-icon item-start [name]="p.icon"></ion-icon>\n      {{ p.title }}\n    </button> -->\n    <ion-card *ngIf="mostrarPrendaSolicitada" style="border-radius: 5px; margin-bottom: 20px !important;box-shadow: 0px 0px 30px -4px rgba(128,128,128,1) !important; border: 4px solid #6f2bac !important;" menuClose (click)="openSolicitudPedida()">\n      <ion-row>\n        <ion-col>\n          <img style="margin: 15px; width: 50% !important" src="../../assets/imgs/menu/4pren.svg">\n        </ion-col>\n        <ion-col col-7>\n          <div style="margin: 20px 0 20px 20px;">\n            <p style="font-size: 0.9em !important; color: #6f2bac !important;"><strong>Prenda Solicitada</strong></p>\n            <p style="font-size: 0.7em !important; padding-top: 5px; color: #cd1616 !important;"><strong>Fecha de retiro: <span style="color: #cd1616;">{{ fechaRetiroPrenda | date :  "dd/MM/y" }}</span></strong></p>          \n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-card *ngIf="mostrarPrecancelacion" style="border-radius: 5px; margin-bottom: 20px !important;box-shadow: 0px 0px 30px -4px rgba(128,128,128,1) !important; border: 4px solid #6f2bac !important;" menuClose (click)="openSolicitudCancelacion()">\n        <ion-row>\n          <ion-col>\n            <img style="margin: 15px; width: 50% !important" src="../../assets/imgs/menu/3sol.svg">\n          </ion-col>\n          <ion-col col-7>\n            <div style="margin: 20px;">\n              <p style="font-size: 0.9em !important; color: #6f2bac !important;"><strong>Precancelación Solicitada</strong></p>\n              <p style="font-size: 0.7em !important; padding-top: 5px; color: #777 !important;"><strong>Importe: {{ importePrecancelacion | currency:\'$\':true:"1.2" }}</strong></p>          \n              <p style="font-size: 0.7em !important; padding-top: 5px; color: #777 !important;"><strong>Vigencia desde: <span style="color: #cd1616;">{{ vigenciaDesde | date :  "dd/MM/y" }}</span></strong></p>          \n              <p style="font-size: 0.7em !important; padding-top: 5px; color: #cd1616 !important;"><strong>Vigencia hasta: <span style="color: #cd1616;">{{ vigenciaHasta | date :  "dd/MM/y" }}</span></strong></p>                      \n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    <ion-card style="border-radius: 5px; margin-bottom: 20px !important;box-shadow: 0px 0px 30px -4px rgba(128,128,128,1) !important;" menuClose *ngFor="let p of pages" (click)="openPage(p)">\n      <ion-row>\n        <ion-col>\n          <img style="margin: 15px; width: 50% !important" src={{p.imgSrc}}>\n        </ion-col>\n        <ion-col col-7>\n          <div style="margin: 20px;">\n            <p style="font-size: 0.9em !important; color: #333 !important;"><strong>{{ p.title }}</strong></p>\n            <p style="font-size: 0.7em !important; padding-top: 5px; color: #777 !important;">{{p.sub}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer (click)="goToTerminos()"> \n  <!-- <ion-toolbar> -->\n    <ion-row align-items-center>\n<!--         <ion-col>\n        {{ username }}\n      </ion-col> -->\n      <ion-col style="text-align: center;">\n        <p style="font-size: 0.7em; margin: 12px;">Terminos y Condiciones</p>\n        <!-- <button ion-button full clear icon-left (click)="logout()">\n          <ion-icon name="sign-out">\n          </ion-icon>\n          Salir</button> -->\n      </ion-col>\n    </ion-row>\n  <!-- </ion-toolbar> -->\n</ion-footer>\n\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/menu-principal/menu-principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_13__providers_services_services__["a" /* ServicesProvider */]])
    ], MenuPrincipalPage);
    return MenuPrincipalPage;
}());

//# sourceMappingURL=menu-principal.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_first_first__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { MenuPrincipalPage } from './../pages/menu-principal/menu-principal';
//import { PerfilPage } from './../pages/perfil/perfil';
//import { AdminPage } from './../pages/admin/admin';






//import { TelefonosPage } from './../pages/telefonos/telefonos';
//import { AyudaPage } from './../pages/ayuda/ayuda';
//import { LoginPage } from './../pages/login/login';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, screenOrientation) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_first_first__["a" /* FirstPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
            statusBar.overlaysWebView(true);
            statusBar.backgroundColorByHexString('#632a88');
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollHideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollHideDirective = /** @class */ (function () {
    function ScrollHideDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.lastValue = 0;
    }
    ScrollHideDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.scrollContent && this.config) {
            this.scrollContent.ionScrollStart.subscribe(function (ev) {
                _this.contentHeight = _this.scrollContent.getScrollElement().offsetHeight;
                _this.scrollHeight = _this.scrollContent.getScrollElement().scrollHeight;
                if (_this.config.maxValue === undefined) {
                    _this.config.maxValue = _this.element.nativeElement.offsetHeight;
                }
                _this.lastScrollPosition = ev.scrollTop;
            });
            this.scrollContent.ionScroll.subscribe(function (ev) { return _this.adjustElementOnScroll(ev); });
            this.scrollContent.ionScrollEnd.subscribe(function (ev) { return _this.adjustElementOnScroll(ev); });
        }
    };
    ScrollHideDirective.prototype.adjustElementOnScroll = function (ev) {
        var _this = this;
        if (ev) {
            ev.domWrite(function () {
                var scrollTop = ev.scrollTop > 0 ? ev.scrollTop : 0;
                var scrolldiff = scrollTop - _this.lastScrollPosition;
                _this.lastScrollPosition = scrollTop;
                var newValue = _this.lastValue + scrolldiff;
                newValue = Math.max(0, Math.min(newValue, _this.config.maxValue));
                _this.renderer.setStyle(_this.element.nativeElement, _this.config.cssProperty, "-" + newValue + "px");
                _this.lastValue = newValue;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('scrollHide'),
        __metadata("design:type", Object)
    ], ScrollHideDirective.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('scrollContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Content */])
    ], ScrollHideDirective.prototype, "scrollContent", void 0);
    ScrollHideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
            selector: '[scrollHide]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]])
    ], ScrollHideDirective);
    return ScrollHideDirective;
}());

//# sourceMappingURL=scroll-hide.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
        console.log('Hello ExpandableComponent Component');
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expanded'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expandHeight'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'expandable',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/components/expandable/expandable.html"*/'<!-- Generated template for the ExpandableComponent component -->\n<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n    <ng-content></ng-content>\n</div>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/components/expandable/expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());

//# sourceMappingURL=expandable.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.login = function (name, pw) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (name === 'admin' && pw === 'admin') {
                _this.currentUser = {
                    name: name,
                    role: 0
                };
                resolve(true);
            }
            else if (name === 'user' && pw === 'user') {
                _this.currentUser = {
                    name: name,
                    role: 1
                };
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    };
    AuthProvider.prototype.isLoggedIn = function () {
        return this.currentUser != null;
    };
    AuthProvider.prototype.isAdmin = function () {
        return this.currentUser.role === 0;
    };
    AuthProvider.prototype.logout = function () {
        this.currentUser = null;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSecondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminSecondPage = /** @class */ (function () {
    function AdminSecondPage(navCtrl, navParams, loadingCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.noticiasCliente = [];
        this.novedadesCliente = [];
        this.items = [];
        this.itemExpandHeight = 100;
        this.service.getNoticias().subscribe(function (x) {
            _this.items = JSON.parse(JSON.parse(x['_body'])['data']);
        });
    }
    AdminSecondPage.prototype.expandItem = function (item) {
        this.items.map(function (x) {
            x.expanded = false;
        });
        item.expanded = !item.expanded;
    };
    AdminSecondPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad AdminSecondPage');
    };
    AdminSecondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-second',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/admin-second/admin-second.html"*/'<ion-header>\n  <ion-navbar color="menu">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Noticias y novedades</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row>\n        <ion-col>\n            <ion-list inset (click)="expandItem(item)" ion-item *ngFor="let item of items">\n  \n                  <ion-item no-lines>\n                      <h3 text-wrap style="font-weight:600;">{{item.noticiaid}}.{{item.titulo}}</h3>\n                  </ion-item>\n                     \n                  <ion-item no-lines *ngIf="item.expanded">\n                      <p text-wrap>{{item.detalle}}</p>\n                  </ion-item>\n            </ion-list>\n        </ion-col>\n      </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/admin-second/admin-second.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], AdminSecondPage);
    return AdminSecondPage;
}());

//# sourceMappingURL=admin-second.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faqs_faqs__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_popover_popover__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_second_user_second__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vencimiento_vencimiento__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams, loadingCtrl, service, storage, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.storage = storage;
        this.popoverCtrl = popoverCtrl;
        this.footerScrollConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
        //prestamos: any;
        this.pagos = [];
        this.cuotas = [];
        this.mostrarBadge = true;
        //relationship: string = "pesos";
        this.dataInforme = [];
        this.fbid = false;
        //this.llegoData = false;
        this.prestamo = this.service._prestamo;
        this.pagos = this.prestamo.Pagos;
        console.log('Pagos', this.pagos);
        console.log(this.prestamo);
        this.llegoData = true;
        this.cuotas = this.prestamo.Cuotas;
        this.mostrarData(this.cuotas);
        //this.loader.present();
        this.saldoAdeudado();
        this.avatarImg();
    }
    ;
    AdminPage.prototype.presentPopover = function (myevent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({ ev: myevent });
    };
    AdminPage.prototype.changeNumber = function (number) {
        var str = number.toString();
        var result = str.replace(".", ",");
        return result;
    };
    AdminPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    AdminPage.prototype.goToPagos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__faqs_faqs__["a" /* FaqsPage */]);
    };
    AdminPage.prototype.saldoAdeudado = function () {
        var _this = this;
        var resultado;
        var totalPagos = 0;
        var totalCuotas = 0;
        this.cuotas.map(function (x) {
            totalCuotas += x.Importe;
            if (x.Numero == 36) {
                _this.ultimoVto = x.Vencimiento;
                //console.log('ultimoVTO', this.ultimoVto);
            }
        });
        this.pagos.map(function (x) {
            totalPagos += x.Importe;
        });
        resultado = totalCuotas - totalPagos;
        if (resultado <= 0)
            this.mostrarBadge = false;
        //console.log('resultado',resultado);
        return resultado;
    };
    AdminPage.prototype.ionViewDidLoad = function () {
        this.loader = this.loadingCtrl.create({
            content: "Espere por favor...",
            duration: 2000
        });
    };
    AdminPage.prototype.verMas = function (e) {
        e.preventDefault();
        if (__WEBPACK_IMPORTED_MODULE_8_jquery___default()('#descriptions').css('height') > '150px') {
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('#descriptions').css({ 'height': '150px' });
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('#vermas').html('Ver Mas');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('#descriptions').css({ 'height': '270px' });
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()('#vermas').html('Ver Menos');
        }
    };
    AdminPage.prototype.avatarImg = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.fbid = true;
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=square";
            }
            else {
                _this.fbid = false;
            }
        });
    };
    AdminPage.prototype.mostrarData = function (cuotas) {
        var _this = this;
        var hoy = new Date();
        var mesHoy = (hoy.getMonth() + 1) < 10 ? hoy.getMonth() + 1 : hoy.getMonth() + 1 === 13 ? hoy.getMonth() : hoy.getMonth() + 1;
        var mesProx = (hoy.getMonth() + 2) < 10 ? hoy.getMonth() + 2 : (hoy.getMonth() + 2 === 13 ? hoy.getMonth() + 1 : hoy.getMonth() + 2);
        //console.log('mes',mesProx.toString());
        var añoHoy = hoy.getFullYear();
        var diaComparar = '0' + mesHoy + '/' + añoHoy;
        //console.log('dia',diaComparar)
        cuotas.map(function (x) {
            var fecha = _this.verFecha(x.Vencimiento);
            //console.log('fecha', fecha);
            if (fecha == diaComparar) {
                //console.log('fecha', fecha);
                //console.log('cuota',x);
                _this.cuotaVencer = fecha;
                _this.montoVencer = x.Importe;
            }
            x.habilitarDetalle = (x.Saldo != x.Importe);
        });
    };
    AdminPage.prototype.verFecha = function (fecha) {
        var a = fecha.slice(0, 4);
        var b = fecha.slice(5, 7);
        return b + "/" + a;
    };
    AdminPage.prototype.verCapital = function (cap) {
        var a = (String(cap)).slice(0, 2);
        var b = (String(cap)).slice(2, 5);
        return a + "." + b;
    };
    AdminPage.prototype.goToCoutaDetalle = function (info) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_second_user_second__["a" /* UserSecondPage */], info);
    };
    AdminPage.prototype.goToVencimiento = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__vencimiento_vencimiento__["a" /* VencimientoPage */], { vto: this.ultimoVto, cuotas: this.cuotas });
    };
    AdminPage.prototype.getInforme = function () {
        var _this = this;
        this.service.getInformesPrestamo(this.prestamo['Numero']).subscribe(function (x) {
            _this.dataInforme = JSON.parse(x['_body']);
            console.log('aqiu', _this.dataInforme['Informe']['URL']);
            window.open(_this.dataInforme['Informe']['URL']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('Scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* Scroll */])
    ], AdminPage.prototype, "scrollElement", void 0);
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-admin',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/admin/admin.html"*/'<ion-header no-shadow no-border *ngIf="llegoData">\n  <ion-navbar transparent>\n    <ion-row class="row-nav">\n      <ion-title style="text-align: center;"><ion-icon style="margin-right:0px !important;color: white !important;" name="mila-logo"></ion-icon></ion-title>\n      <ion-buttons *ngIf="!fbid" float-right end (click)="presentPopover($event)">\n        <button ion-button icon-only>\n          <ion-icon style="margin-right:0px !important;font-size: 1.2em !important; color: white !important;" name="mila-avatar"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons *ngIf="fbid" float-right end (click)="presentPopover($event)">\n        <ion-avatar item-start>\n          <img [src]="imgSrc">\n        </ion-avatar>\n      </ion-buttons>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #pageContent fullscreen>\n  <div *ngIf="llegoData">\n    <ion-row style="margin: 0 auto; width: 50% !important;">\n      <ion-col style="width: 40%; border-bottom: 3px solid white;">\n        <p style="font-size: 0.9em; color: white;"><strong>Capital Solicitado</strong></p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n      <strong><span style="font-size: 0.8em; color: white; line-height: 4;">$ </span></strong><h3 style="color: white;"> {{verCapital(prestamo.CapitalSolicitado)}}</h3><strong><span style="font-size: 0.6em; color: white; line-height: 7;"> PESOS</span></strong>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-badge class="first" color="badge">\n          <ion-row style="text-align: center">\n            <ion-col>\n              <p>Saldo adeudado:</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>{{saldoAdeudado() | currency:\'$\':true:"1.2" }}</strong></p>\n            </ion-col>\n            <ion-col *ngIf="mostrarBadge">\n              <p float-right><ion-icon style="font-size: 1.5em;" (click)="goToVencimiento()" name="add-circle" color="light"></ion-icon></p>\n            </ion-col>\n          </ion-row>\n        </ion-badge>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="mostrarBadge">\n      <ion-col>\n        <ion-badge class="first" color="badge">\n          <ion-row>\n            <ion-col>\n              <span>Próxima cuota a vencer:</span> \n            </ion-col>\n            <ion-col>\n              <strong>{{cuotaVencer}}</strong>          \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span>Monto próxima cuota:</span>\n            </ion-col>\n            <ion-col>\n              {{montoVencer | currency:\'$\':true }}\n            </ion-col>\n          </ion-row>\n        </ion-badge>\n      </ion-col>\n    </ion-row> \n    <ion-card id="descriptions" class="description">\n        <ion-row>\n            <ion-col>\n              <p style="color: #9b34e7 !important;"><strong>N°Cuota</strong></p>\n            </ion-col>\n            <ion-col>\n              <strong>Vencimiento</strong>\n            </ion-col>\n            <ion-col color="badge">\n              <p style="color: #9b34e7 !important;"><strong>Monto</strong></p>\n            </ion-col>\n            <ion-col>\n              <strong>Detalle</strong>\n            </ion-col>\n          </ion-row>\n          <ion-row style="margin-top: 7px;" *ngFor="let couta of prestamo.Cuotas | paginate: { itemsPerPage: 6, currentPage: p }">\n            <ion-col class="cuota">\n              <div text-center style="color: #9b34e7 !important;">{{couta.Numero}}</div>\n            </ion-col>\n            <ion-col class="detalle">\n              {{verFecha(couta.Vencimiento)}}\n            </ion-col>\n            <ion-col class="detalle">\n             <div float-right style="color: #9b34e7 !important;">{{couta.Importe | currency:\'$\':true }}</div>\n            </ion-col>\n            <ion-col style="padding: 0px !important;" (click)="goToCoutaDetalle(couta)">\n              <ion-icon text-center name="mila-detalle" color="badge" style="font-size:1em !important; margin-right: 0px !important;"></ion-icon>\n            </ion-col>\n          </ion-row>\n      </ion-card>\n      <button id="vermas" class="verMas" ion-button color="verMas" (click)="verMas($event)">\n        Ver más\n      </button>\n      <ion-row>\n        <ion-col>\n          <pagination-controls \n            (pageChange)="p = $event"\n            directionLinks="false"\n            >\n          </pagination-controls>\n          <!-- <ion-badge color="light" class="pages" *ngFor="let pages of [1,2,3,4,5,6]">\n            {{pages}}\n          </ion-badge> -->\n        </ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col>\n          <button class="descargar" ion-button icon-start outline (click)="getInforme()">\n            <ion-icon style="margin-right: 10px;" name="download"></ion-icon>\n            Descargar\n          </button>\n        </ion-col>\n      </ion-row>\n  </div>\n</ion-content>\n<ion-footer style="height: 65px;" [scrollHide]="footerScrollConfig" [scrollContent]="pageContent">\n  <ion-toolbar style="height: 65px;">\n    <ion-row>\n      <ion-col>\n        <img class="iconFooter2" src="../../assets/imgs/boton-estado-de-cuenta-inactive.svg" alt="">\n      </ion-col>\n      <ion-col (click)="goToPagos()">\n        <img class="iconFooter" src="../../assets/imgs/boton-informe-pago.svg" alt="">\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/admin/admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* PopoverController */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuiciablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_principal_menu_principal__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(134);
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






var JuiciablePage = /** @class */ (function () {
    function JuiciablePage(navCtrl, navParams, serviceProvider, callnumber, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.callnumber = callnumber;
        this.storage = storage;
        this.fbid = false;
        this.estudio = serviceProvider._prestamo.EstudioAsignado;
        this.numeroEstudio = this.estudio['Telefono'];
        this.nombre = serviceProvider._persona.nombre;
    }
    JuiciablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JuiciablePage');
    };
    JuiciablePage.prototype.avatarImg = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.fbid = true;
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=square";
            }
            else {
                _this.fbid = false;
            }
        });
    };
    JuiciablePage.prototype.ionViewWillEnter = function () {
        this.avatarImg();
    };
    JuiciablePage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__menu_principal_menu_principal__["a" /* MenuPrincipalPage */]);
    };
    JuiciablePage.prototype.callNumber = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.callnumber.callNumber(String(this.numeroEstudio), true)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log('error- callNumber', e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JuiciablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-juiciable',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/juiciable/juiciable.html"*/'<ion-header no-shadow no-border transparent>\n  <ion-navbar class="navJuicio" no-shadow no-border transparent>\n    <ion-title text-center><ion-icon style="color: white !important;" name="mila-logo"></ion-icon></ion-title>\n    <ion-buttons *ngIf="!fbid" float-right end (click)="presentPopover($event)">\n      <button ion-button icon-only>\n        <ion-icon style="margin-right:0px !important;font-size: 1.2em !important; color: white !important;" name="mila-avatar"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons *ngIf="fbid" float-right end (click)="presentPopover($event)">\n      <ion-avatar item-start>\n        <img [src]="imgSrc">\n      </ion-avatar>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row>\n    <ion-col>\n      <p text-center no-margin style="color: #fff;">Estimado (a):</p>\n      <h2 text-center  no-margin  style="color: #fff;">{{nameUser}}</h2>\n      <ion-card class="redbg">\n        <ion-card-content>\n          <p>Ha sido asignado al estudio jurídico {{estudio[\'Nombre\']}}, porfavor comuniquese a la brevedad</p>\n        </ion-card-content>\n      </ion-card>\n      <div padding>\n        <button class="pagar" ion-button block (click)="callNumber()">Llamar al estudio</button>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/juiciable/juiciable.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], JuiciablePage);
    return JuiciablePage;
}());

//# sourceMappingURL=juiciable.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegurosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_popover_popover__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SegurosPage = /** @class */ (function () {
    function SegurosPage(navCtrl, navParams, popoverCtrl, storage, 
        /* private file: FileOriginal,
        private document: DocumentViewerOriginal,
        private transfer : FileTransfer,  */
        platform, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.platform = platform;
        this.serviceProvider = serviceProvider;
        this.automovil = [];
        this.poliza = [];
        this.fbid = false;
        this.avatarImg();
        this.nameUser = this.serviceProvider._persona.nombre;
        this.automovil = this.serviceProvider._prestamo.Automovil;
        this.poliza = this.serviceProvider._prestamo.PolizaVigente;
        console.log('poliza', this.poliza);
        console.log('auto', this.automovil);
        this.columns = [
            { prop: 'name' },
            { name: 'Company' }
        ];
    }
    SegurosPage.prototype.ionViewDidLoad = function () {
        this.rows = [
            {
                "name": "Poliza",
                "company": this.poliza['Numero']
            },
            {
                "name": "Asegurado",
                "company": this.nameUser
            },
            {
                "name": "Vehiculo",
                "company": this.automovil['Marca'] + " " + this.automovil['Modelo']
            },
            {
                "name": "Patente",
                "company": this.automovil['Dominio']
            },
            {
                "name": "Vigencia",
                "company": this.getDate(this.poliza['FechaVigenciaDesde']) + ' al ' + this.getDate(this.poliza['FechaVigenciaHasta'])
            }
        ];
    };
    SegurosPage.prototype.avatarImg = function () {
        var _this = this;
        this.storage.get('fbid').then(function (result) {
            console.log('result', result);
            if (result) {
                _this.fbid = true;
                _this.imgSrc = "https://graph.facebook.com/" + result + "/picture?type=square";
            }
            else {
                _this.fbid = false;
            }
        });
    };
    SegurosPage.prototype.getDate = function (fec) {
        var fecha = new Date(fec);
        var mes = fecha.getMonth() < 12 ? fecha.getMonth() + 1 : fecha.getMonth();
        return fecha.getDate() + '/' + mes + '/' + fecha.getFullYear();
    };
    SegurosPage.prototype.presentPopover = function (myevent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({ ev: myevent });
    };
    SegurosPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
    };
    SegurosPage.prototype.imagenSeguro = function () {
        var nameSegu = this.poliza['Compania']['Nombre'].split(' ')[0];
        var img = "";
        switch (nameSegu) {
            case "Mapfre":
                img = '../../assets/imgs/seguros/mapfre.svg';
                break;
            case "Allianz":
                img = '../../assets/imgs/seguros/allianz.svg';
                break;
            case "San":
                img = '../../assets/imgs/seguros/san-cristobal.svg';
                break;
            case "Seguro":
                img = '../../assets/imgs/seguros/seg-rivadavia.svg';
                break;
            case "Sura":
                img = '../../assets/imgs/seguros/sura.svg';
                break;
            case "Rivadavia":
                img = '../../assets/imgs/seguros/seg-rivadavia.svg';
                break;
        }
        return img;
    };
    SegurosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-seguros',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/seguros/seguros.html"*/'<ion-header no-shadow no-border>\n    <ion-navbar transparent>\n      <ion-row class="row-nav">\n        <ion-title style="text-align: center;"><ion-icon style="margin-right:0px !important;color: white !important;" name="mila-logo"></ion-icon></ion-title>\n        <ion-buttons *ngIf="!fbid" float-right end (click)="presentPopover($event)">\n          <button ion-button icon-only>\n            <ion-icon style="margin-right:0px !important;font-size: 1.2em !important; color: white !important;" name="mila-avatar"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-buttons *ngIf="fbid" float-right end (click)="presentPopover($event)">\n          <ion-avatar item-start>\n            <img [src]="imgSrc">\n          </ion-avatar>\n        </ion-buttons>\n      </ion-row>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content no-padding>\n  <ion-row padding>\n    <ion-col>\n      <p text-center no-margin style="color: #fff; font-size: 0.8em;"><strong>Estimado (a):</strong></p><br>\n      <h2 text-center no-margin style="color: #fff; font-size: 1em;"><strong>{{nameUser}}</strong></h2><br>\n      <p text-wrap text-center no-margin style="color: #fff; font-size: 0.8em;">A continuación podrás descargar la poliza vigente de tu auto.</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <div style="background: #bfbfbf !important; height: 80px !important; width: 100%; text-align: center;">\n        <img src="{{imagenSeguro()}}" style="width: 80%; margin: 5px;">\n      </div>\n        <ngx-datatable style="width: 100% !important;"\n        [sortType]="\'multi\'"\n        [headerHeight]="80"\n        [rowHeight]="40"\n        [rows]="rows"\n        [columns]="columns"\n        [columnMode]="\'flex\'"\n        [limit]="10">\n      </ngx-datatable>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <p style="color: white; font-size: 1em;" text-center><ion-icon style="margin-right: 2px !important;color: white; font-size: 1em;" name="mila-aler"></ion-icon>Tarjeta no válida para circular</p>\n    </ion-col>\n  </ion-row>\n  <div justify-content-center padding>\n      <a href="{{this.poliza[\'DocumentosPoliza\'][0][\'URL\']}}" class="descargar" ion-button icon-start outline>\n          <ion-icon style="margin-right: 10px;" name="download"></ion-icon>\n          Descargar poliza\n      </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/seguros/seguros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_services_services__["a" /* ServicesProvider */]])
    ], SegurosPage);
    return SegurosPage;
}());

//# sourceMappingURL=seguros.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelefonosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(134);
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




var TelefonosPage = /** @class */ (function () {
    function TelefonosPage(navCtrl, navParams, service, callnumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.callnumber = callnumber;
        this.telefonos = [];
    }
    TelefonosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log(this.service._prestamo['Contactos']);
        this.service.getTelefonos().subscribe(function (x) {
            _this.telefonos = JSON.parse(JSON.parse(x['_body'])['data']);
            _this.service._prestamo['Contactos'].map(function (tel) {
                _this.telefonos.push(tel);
            });
            console.log('telefonos', _this.telefonos);
        });
    };
    TelefonosPage.prototype.callNumber = function (num) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.callnumber.callNumber(String(num), true)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log('error- callNumber', e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TelefonosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TelefonosPage');
    };
    TelefonosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-telefonos',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/telefonos/telefonos.html"*/'<ion-header no-shadow no-border>\n    <ion-navbar color="menu">\n        <button ion-button menuToggle>\n            <ion-icon style="color: white;" name="menu"></ion-icon>\n          </button>\n      <ion-title>Teléfonos Útiles</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row>\n    <ion-col text-center class="telefonos-header"></ion-col>\n  </ion-row>\n    <ion-list style="margin-top: 16px !important;" inset *ngFor="let tel of telefonos">\n      <ion-item (click)="callNumber(tel.numero)">\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/telefonos.svg">\n        </ion-avatar>\n        <p text-wrap>{{tel.Nombre}}</p>\n        <p text-wrap>{{tel.Telefono}}</p>\n        <button ion-button clear icon-only item-end>\n          <ion-icon color="badge" name="arrow-dropright"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/telefonos/telefonos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */]])
    ], TelefonosPage);
    return TelefonosPage;
}());

//# sourceMappingURL=telefonos.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_services_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AyudaPage = /** @class */ (function () {
    function AyudaPage(navCtrl, navParams, services) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
        this.visible = false;
        //this.listafaqs = [{pregunta: "pergunta1", respuesta:"Respuesta numero 1", expanded: false},{pregunta: "pergunta2", respuesta:"Respuesta numero 2", expanded: false},{pregunta: "pergunta3", respuesta:"Respuesta numero 3", expanded: false},{pregunta: "pergunta4", respuesta:"Respuesta numero 4", expanded: false},{pregunta: "pergunta5", respuesta:"Respuesta numero 5", expanded: false}];
        this.services.getPregFrecuentes().subscribe(function (x) {
            _this.listafaqs = JSON.parse(JSON.parse(x['_body'])['data']);
            console.log('data', JSON.parse(JSON.parse(x['_body'])['data']));
        });
    }
    AyudaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AyudaPage');
    };
    AyudaPage.prototype.expandItem = function (item) {
        this.listafaqs.map(function (x) {
            x.expanded = false;
            x.visible = false;
        });
        console.log('item', item.expanded);
        item.expanded = !item.expanded;
        item.visible = !item.visible;
    };
    AyudaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-ayuda',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/ayuda/ayuda.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar color="menu">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Preguntas Frecuentes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-row>\n      <ion-col text-center class="faqs-header">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n          <ion-list inset *ngFor="let item of listafaqs; let i = index" (click)="expandItem(item)">\n\n                <ion-item>\n                    <h3 text-wrap style="font-weight:600;">{{i+1}}. {{item.pregunta}}</h3>\n                    <ion-icon style="font-size: 0.9em;" [name]="item.visible ? \'arrow-down\' : \'arrow-forward\'" item-end></ion-icon>\n                </ion-item>\n                   \n                <ion-item *ngIf="item.expanded">\n                    <p text-wrap>{{item.respuesta}}</p>\n                </ion-item>\n          </ion-list>\n      </ion-col>\n    </ion-row>\n   \n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mila/github/mila2/src/pages/ayuda/ayuda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_services_services__["a" /* ServicesProvider */]])
    ], AyudaPage);
    return AyudaPage;
}());

//# sourceMappingURL=ayuda.js.map

/***/ })

},[375]);
//# sourceMappingURL=main.js.map