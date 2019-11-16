import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeitorDeTextoPage } from './leitor-de-texto.page';

const routes: Routes = [
  {
    path: '',
    component: LeitorDeTextoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeitorDeTextoPage]
})
export class LeitorDeTextoPageModule {}
