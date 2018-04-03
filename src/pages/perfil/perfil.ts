import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  id=5;
  estudiante:Estudiante;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    
  ) {
    
  
  }
  

  ionViewDidLoad() {
    
    
    this.estudiante=this.navParams.data.estudiante;
    
  }

}

export class Estudiante{
    cedula:string
    id:number
    paterno:string
    materno:string
    idenficacion:string;
    nombre:string
    sexo:string
    fechaNacimiento:string
    email:string
    telefono:string
    celular:string
    img:string
    expedido:string
    rol:string  

}