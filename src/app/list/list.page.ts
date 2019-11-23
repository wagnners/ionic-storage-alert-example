import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  clientes: any = [];
  
  constructor(private storage: Storage, public alertController: AlertController) {
    this.getClients();
  }
  
  ngOnInit() {
  }

  getClients(){
    this.storage.get('clientes').then((val) => {
      this.clientes = val;
    });
  }

  deleteCliente(id){

    this.clientes.forEach(function(item, index, object) {
      if (item.id === id) {
        object.splice(index, 1);
      }
    });

    this.storage.set('clientes', this.clientes);
    this.alert("Cliente removido com sucesso");
  }

  async alert(text) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Mensagem',
      message: text,
      buttons: ['OK']
    });

    await alert.present();
  }

}
