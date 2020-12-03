import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'anotacoes',
    loadChildren: () => import('./anotacoes/anotacoes.module').then( m => m.AnotacoesPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./editAnnot/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'new-collection',
    loadChildren: () => import('./new-collection/new-collection.module').then( m => m.NewCollectionPageModule)
  },  {
    path: 'image-modal',
    loadChildren: () => import('./shared/pages/image-modal/image-modal.module').then( m => m.ImageModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
