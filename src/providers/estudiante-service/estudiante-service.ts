import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EstudianteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class EstudianteServiceProvider {

  headers=new HttpHeaders();
  base="http://165.227.4.223:1337"
  constructor(public http: HttpClient) {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  getUser(id){
    let body={"codigoqr":(id+"")}
    return this.http.post(this.base+`/persona/informacion`,body,{headers:this.headers});
  }

}
