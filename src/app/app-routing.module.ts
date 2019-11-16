import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
  { path: 'leitor-de-texto', loadChildren: './leitor-de-texto/leitor-de-texto.module#LeitorDeTextoPageModule' },
  { path: 'leitor-de-codigo-de-barras', loadChildren: './leitor-de-codigo-de-barras/leitor-de-codigo-de-barras.module#LeitorDeCodigoDeBarrasPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
