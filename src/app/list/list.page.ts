import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private clients: any;
  
  constructor(private storage: Storage) {
    this.getClients();
  }
  
  ngOnInit() {
  }

  getClients(){
    this.storage.get('clients').then((val) => {
      this.clients = val;
    });
  }

}
