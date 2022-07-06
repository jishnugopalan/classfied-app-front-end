import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    DashboardComponent,
    NavigationBarComponent,
    AddOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
