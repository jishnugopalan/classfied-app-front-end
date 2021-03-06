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
import { MyOfferComponent } from './my-offer/my-offer.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    DashboardComponent,
    NavigationBarComponent,
    AddOfferComponent,
    MyOfferComponent,
    OfferDetailsComponent,
    OfferEditComponent,
    AboutComponent,
    ContactComponent,
    MyprofileComponent
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
