import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  cliente: any = {};
  clientes: any = [];
  
  constructor(private storage: Storage, public alertController: AlertController) {}

  addCliente(){
    this.storage.get('clientes').then((val) => {
      if(val){
        this.clientes = val;
      }
      this.clientes.push(this.cliente);
      this.storage.set('clientes', this.clientes);
      this.presentAlert();
    });
   
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Mensagem',
      message: 'Cliente salvo com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
