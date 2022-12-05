import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmobComponent } from './addmob/addmob.component';
import { FormsModule } from '@angular/forms';
import { ViewmobComponent } from './viewmob/viewmob.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';


const myroute:Routes =[

  {
    path :"",
    component :AddmobComponent
  },
  {
    path :"v",
    component :ViewmobComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    AddmobComponent,
    ViewmobComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
