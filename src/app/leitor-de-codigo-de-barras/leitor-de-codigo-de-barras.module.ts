import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeitorDeCodigoDeBarrasPage } from './leitor-de-codigo-de-barras.page';

const routes: Routes = [
  {
    path: '',
    component: LeitorDeCodigoDeBarrasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeitorDeCodigoDeBarrasPage]
})
export class LeitorDeCodigoDeBarrasPageModule {}
