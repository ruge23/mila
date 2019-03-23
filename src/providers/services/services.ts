import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { tap } from 'rxjs/operators/tap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { UserSecondPage } from '../../pages/user-second/user-second';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class ServicesProvider {
  token: string;
  nameUser: string;
  precancelacion: boolean;
  prenda: boolean;
  fechaPrenda:string = null;
  solicitudCancelacion:any=[];

  urlTest:string ="https://micuentamilatesting.microlending.com.ar/rest/v1/";
  urlProd:string ="https://micuentamila.microlending.com.ar/rest/v1/"

  private _auth: Auth;
  public _persona: Persona = new Persona();
  public _prestamo: Prestamo = new Prestamo();
  constructor(
    private http: Http,
    public loadingCtrl : LoadingController,
  ) {
    //console.log('Hello ServicesProvider Provider');
  }

  setVariables(pre, prenda) {
    this.prenda = prenda;
    this.precancelacion = pre;
  }

  getVariables() {
    return { pre: this.precancelacion, prenda: this.prenda };
  }

  getToken() {
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
  }

  isVigente() {
    return true;
    //this._auth.vigente > date.now
  }

  getTokenCredenciales(usuario, password): Observable<any> {
    let url = this.urlProd+"tokenapps";

    var headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');

    //let body = {grant_type:'password',username:'3654336901',password:'12345678'};
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', usuario)
      .set('password', password)

    return this.http.post(url, body.toString(), options).pipe(
      tap(x => {
        this._auth = new Auth();
        this._auth.token = JSON.parse(x["_body"])["access_token"];
        this._auth.vencimiento = JSON.parse(x["_body"])["expires_in"];
        this._auth.tipo = 1;
        this._auth.usuario = usuario;
        this._auth.password = password;
      }));
  }

  getTokenEmail(email): Observable<any> {
    let url = this.urlProd+"tokenclientemail";

    var headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({ headers: headers, withCredentials: true });
    const body = new HttpParams()
      .set('grant_type','password')
      .set('username',email)
      .set('password','')

    return this.http.post(url, body.toString(), options)
    .pipe(
      tap(x => {
        console.log("response token: ", x);
        this._auth = new Auth();
        this._auth.token = JSON.parse(x["_body"])["access_token"];
        this._auth.vencimiento = JSON.parse(x["_body"])["expires_in"];
        this._auth.tipo = 4;
        this._auth.usuario = email;
        this._auth.password = '';
        console.log('auth', this._auth);        
      })
    )
    .catch(error => error.json())
  }

  getTokenUsuario(email,password): Observable<any> {
    let url = this.urlProd+"tokenclientemail";

    var headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({ headers: headers, withCredentials: true });
    const body = new HttpParams()
      .set('grant_type','password')
      .set('username',email)
      .set('password',password)
    try {
      return this.http.post(url, body.toString(), options).pipe(
        tap(x => {
          console.log("response token: ", x);
          this._auth = new Auth();
          this._auth.token = JSON.parse(x["_body"])["access_token"];
          this._auth.vencimiento = JSON.parse(x["_body"])["expires_in"];
          this._auth.tipo = 4;
          this._auth.usuario = email;
          this._auth.password = '';
          console.log('auth', this._auth);        
        }));
    } catch (error) {
      console.log('erro',error);
    }
  }

  getChangePass(email): Observable<any> {
    let url = this.urlProd+"usuarios/solicitudes/password";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //let body = {grant_type:'password',username:'3654336901',password:'12345678'};
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    const body = new HttpParams()
      .set('Email', email )

    return this.http.post(url, body.toString(), options).pipe(
      tap(x => {
        console.log('xPass',x);
      }));
  }

  getChangeNewPass(email, pass): Observable<any> {
    let url = this.urlProd+"usuarios/solicitudes/password";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //let body = {grant_type:'password',username:'3654336901',password:'12345678'};
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    const body = new HttpParams()
      .set('Email', email )
      .set('Password', pass)

    return this.http.post(url, body.toString(), options).pipe(
      tap(x => {
        console.log('xPass',x);
      }));
  }

  getDatosCliente(): Observable<any> {
    let tokeam = this.getToken();
    var headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    headers.append("Authorization", "Bearer " + tokeam);
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get(this.urlProd+"personas", requestOptions).pipe(
      tap(x => {
        let cliente = JSON.parse(x["_body"])["Persona"];
        //console.log("datos cliente", cliente["Persona"].Nombre);
        //this._persona = new Persona();
        this._persona.nombre = cliente.Nombre;
        this._persona.email = cliente.Email;
        this._persona.documento = cliente.NroDocumento;
        this._persona.tipoDocumento = (cliente.TipoDocumento == "DNI" ? 1 : 2);
        console.log("datos cliente", this._persona);
        this.getDatosPrestamo(false);
    }));
  }

  getDatosPrestamo(SoloVigentes) {
    let fecha = new Date();
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Espere por favor...'
    });
    loading.present();
    let tokeam = this.getToken();
    this.getPrestamoCliente(this._persona.tipoDocumento, this._persona.documento, SoloVigentes, tokeam).subscribe(x => {
      console.log("numero prestamo",JSON.parse(x["_body"])["Prestamos"][0].Numero)
      let numeroPrestamo = JSON.parse(x["_body"])["Prestamos"][0].Numero;
      this.getPrestamoDetalle(numeroPrestamo, tokeam).subscribe(p => {
        this._prestamo = JSON.parse(p["_body"])["Prestamo"];
        this._prestamo.SolicitudPrenda = JSON.parse(p["_body"])["Prestamo"]["SolicitudPrenda"];
        this._prestamo.Automovil = JSON.parse(p["_body"])["Prestamo"]["Automovil"];
        this._prestamo.PolizaVigente = JSON.parse(p["_body"])["Prestamo"]["PolizaVigente"];
        this._prestamo.Pagos = JSON.parse(p["_body"])["Prestamo"]["Pagos"];
        this._prestamo.SaldoPrecancelacion = JSON.parse(p['_body'])["Prestamo"]["SolicitudPrecancelacion"];
        loading.dismiss();
        console.log("objeto detalleeee", this._prestamo);
        //console.log("objeto detalle", JSON.parse(p["_body"])["Prestamo"]);
      });
      /* this.getSolicitudPrecancelacion(numeroPrestamo, fecha).subscribe(x=>{
        console.log('x', x);
      }) */
    });
  }

  getInformesPrestamo(numeroPrestamo): Observable<any> {
    let tokeam = this.getToken();
    var headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    headers.append("Authorization", "Bearer " + tokeam);
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get(this.urlProd+"prestamos/informes?Prestamo="+numeroPrestamo+"&TipoInforme=1", requestOptions).pipe(
      tap(x => {
        console.log('informe',x)
    }));
  }

  getPrestamoCliente(TipoDocumento, NroDocumento, SoloVigentes, tokeam): Observable<any> {
    var headers = new Headers();
    headers.append("Authorization", "Bearer " + tokeam);
    //console.log('enPrestamos', tokeam);
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get(this.urlProd+"prestamos?TipoDocumento=" + TipoDocumento + "&NroDocumento=" + NroDocumento + "&SoloVigentes=" + SoloVigentes, requestOptions)
      .pipe(
        tap(data => {
          //console.log('All: ' + JSON.stringify(data))
        }));
  }

  getPrestamoDetalle(PrestamoId, tokeam): Observable<any> {
    var headers = new Headers();
    headers.append("authorization", "Bearer " + tokeam);
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get(this.urlProd+"prestamos/" + PrestamoId, requestOptions)
      .pipe(
        tap(data => {
          //console.log('All: ' + JSON.stringify(data));
        })
      );
  }

  getPregFrecuentes(): Observable<any>{
    var headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get("http://ctrlztest.com.ar/mila-admin/apirest/traerfaq.php", requestOptions)
      .pipe(
        tap(data => {
          //console.log('All: ' + JSON.stringify(data));
        })
      );
  }

  getNoticias(): Observable<any>{
    var headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get("http://ctrlztest.com.ar/mila-admin/apirest/traernoticias.php", requestOptions)
      .pipe(
        tap(data => {
          //console.log('All: ' + JSON.stringify(data));
        })
      );
  }

  getTelefonos(): Observable<any>{
    var headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get("http://ctrlztest.com.ar/mila-admin/apirest/traertelefonos.php", requestOptions)
      .pipe(
        tap(data => {
          //console.log('All: ' + JSON.stringify(data));
        })
      );
  }

  getTerminos(): Observable<any>{
    var headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get("http://ctrlztest.com.ar/mila-admin/apirest/traerterminos.php", requestOptions)
      .pipe(
        tap(data => {
          //console.log('All: ' + JSON.stringify(data));
        })
      );
  }

  getSolicitudPreda(prestamo): Observable<any> {
    let tokeam = this.getToken();
    let url = this.urlProd+"prestamos/solicitudes/prendas";

    var headers = new Headers();
    headers.append("Authorization", "Bearer " + tokeam);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //let body = {grant_type:'password',username:'3654336901',password:'12345678'};
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    const body = new HttpParams()
      .set('Prestamo', prestamo )

    return this.http.post(url, body.toString(), options).pipe(
      tap(x => {
      }));
  }

  getSolicitudPrecancelacion(prestamo, fecha): Observable<any> {
    let tokeam = this.getToken();    
    let url = this.urlProd+"prestamos/solicitudes/precancelaciones";

    var headers = new Headers();
    headers.append("Authorization", "Bearer " + tokeam);    
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //let body = {grant_type:'password',username:'3654336901',password:'12345678'};
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    const body = new HttpParams()
      .set('Prestamo', prestamo)
      .set('Fecha', fecha)

    return this.http.post(url, body.toString(), options).pipe(
      tap(x => {
        console.log('serviceCancelacion', x);
      }));
  }


}

export class Auth {
  token: string;
  vencimiento: Date;
  tipo: number;
  usuario: string;
  password: string;
}
export class Persona {
  nombre: string;
  documento: number;
  tipoDocumento: number;
  email: string;
}
export class Cuota {
  numero: number;
  saldo: number;
  importe: number;
  vencimiento: Date;
  verDetalle: boolean = (this.saldo != this.importe);
}
export class Pagos{
  numero: number;
  fecha: Date;
  importe: number;
}
export class Automovil{
  anio: number;
  codigoReferencia: number;
  dominio: string;
  marca: string;
  modelo: string;
}
export class PolizaVigente {
  certificadoCobertura: string;
  compania: string;
  companiaId: number;
  fechaVigenciaDesde:Date;
  fechaVigenciaHasta: Date;
  numero: string;
  tipoCobertura: string;
  documentosPoliza: 
  [
    {
      descripcion:string;
      url:any
    }
  ]
}
export class SolicitudPrenda{
  prestamo: number;
  fechaDisponibleRetiro: Date;
}
export class SolicitudPrecancelacion{
  fecha: Date;
  importe: number;
  prestamo:number;
  vigenciaDesde:Date;
  vigenciaHasta:Date;
}
export class Prestamo {
  Automovil: Automovil[];
  Numero: number;
  Cuotas: Cuota[];
  CapitalSolicitado: number;
  DebitoAutomatico: boolean;
  Judicializado: boolean;
  EstudioAsignado: string;
  HabilitadoPedidoPrecancelacion: boolean;
  HabilitadoPedidoPrenda: boolean;
  SaldoPrecancelacion: string;
  VigenciaSaldoPrecancelacion: Date;
  Pagos: Pagos[];
  PolizaVigente: PolizaVigente[];
  //SolicitudPrecancelacion: SolicitudaPrecancelacion[];
  SolicitudPrenda: SolicitudPrenda;
  SolicitudPrecancelacion: SolicitudPrecancelacion;
}