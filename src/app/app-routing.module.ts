import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{accueilcomponent} from './pageaccueil/accueil.component';
import{catacomponent} from './catalogue/cata.component'
import {LoginComponent} from './utilisateur/login/login.component';
import {creercomptecomponent} from './creercompte/creercompte.component';
import { detailComponent } from './catalogue/detail/detail.component';

const routes: Routes = [
  { path: '', component: accueilcomponent },
  { path: 'catalogue', component: catacomponent },
  { path: 'login', component: LoginComponent },
  { path: 'creer', component: creercomptecomponent },
  { path: 'detail/:id', component:detailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
