import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-leitor-de-texto',
  templateUrl: './leitor-de-texto.page.html',
  styleUrls: ['./leitor-de-texto.page.scss'],
})
export class LeitorDeTextoPage implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textoaserfalado: string ='Olá mundo!';
  
  ngOnInit() {
  }

  lerTexto(){
    this.tts.speak({
      text: this.textoaserfalado,
      locale: 'pt-BR',
      rate: 0.75,

    }).then(()=>{
      alert("Falou com sucesso");
    })
    .catch((erro:any)=>{
      alert(erro);
    })
  }

}
