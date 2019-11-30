import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  clientes: any = [];
  
  constructor(private storage: Storage, public alertController: AlertController, private tts: TextToSpeech) {
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

  ler(nome){
    this.tts.speak(nome)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  detalhesCliente(nome, data, filhos){
    if(filhos){
      filhos = "Sim";
    }else{
      filhos = "Não";
    }

    this.alert("Nome: " + nome + ", <br>Data de Nascimento: " + data + " <br>Filhos? " + filhos);
  }

}
