import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pestania2Component } from './pestania2/pestania2.component';
import { Pestania3Component } from './pestania3/pestania3.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pestania4Component } from './pestania4/pestania4.component';
import { ContactoComponent } from './contacto/contacto.component';
@NgModule({
  declarations: [
    AppComponent,
    Pestania2Component,
    Pestania3Component,
    HomeComponent,
    Pestania4Component,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'venta', component: Pestania2Component},
      {path: 'revision', component: Pestania3Component},
      {path: 'home', component: HomeComponent },
      {path: 'vecli', component: Pestania4Component },
      {path: 'contacto', component: ContactoComponent },
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
