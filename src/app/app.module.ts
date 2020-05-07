import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{createpostcomponent} from './posts/create-post/create-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{accueilcomponent} from './pageaccueil/accueil.component'
import{catacomponent} from './catalogue/cata.component'
import {CatalogueService} from './catalogue/catalogue.service';
import {LoginComponent} from './utilisateur/login/login.component';
import {creercomptecomponent} from './creercompte/creercompte.component';
import { CreercomptsComponent } from './creercompts/creercompts.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './utilisateur/logout/logout.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    createpostcomponent,
    accueilcomponent,
    catacomponent,
    LoginComponent,
    creercomptecomponent,
    CreercomptsComponent,
    AdminComponent,
    LogoutComponent,
    UtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    ToastrModule.forRoot(),
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [CatalogueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
