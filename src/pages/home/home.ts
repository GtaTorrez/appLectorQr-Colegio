import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PerfilPage } from '../perfil/perfil';
import { EstudianteServiceProvider } from '../../providers/estudiante-service/estudiante-service';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:string;
  estudiante:any;

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private serve: EstudianteServiceProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {

  }

  scanner(){
    this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    this.data=barcodeData.text;
    if(barcodeData.text){
      this.nextPerfil();
    }
    }).catch(err => {
    });
  }
  
  presentToast(messages:string) {
    let toast = this.toastCtrl.create({
      message: messages,
      duration: 5000
    });
    toast.present();
  }

  nextPerfil(){
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loading.present();
    this.serve.getUser(this.data).subscribe((data:any)=>{
      this.estudiante=data;
      console.log(data)
      this.estudiante.img = data.img ? data.img : 'assets/imgs/people.png';
      loading.dismiss();
      this.navCtrl.push(PerfilPage,{estudiante:this.estudiante});
      
    },err=>{
      console.error(err);
      
      if(err.status==404 || err.status==500){
        this.presentToast('No existen datos ');
        this.navCtrl.pop();
      }
      if(err.status==0 || err.status==504){
        this.presentToast('Error con la conexion');
        this.navCtrl.pop();
      }

      loading.dismiss();
    });

    
  }

}
