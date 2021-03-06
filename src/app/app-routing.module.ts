import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MyOfferComponent } from './my-offer/my-offer.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path:'add-offer',component:AddOfferComponent,canActivate: [AuthGuard] },
  {path:'my-offer',component:MyOfferComponent, canActivate: [AuthGuard]},
  { path: 'edit-offer/:id', component: OfferEditComponent, canActivate: [AuthGuard] },
  { path: 'offer-details/:id', component: OfferDetailsComponent, canActivate: [AuthGuard] },
  {path:'my-profile',component:MyprofileComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: "/homepage", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
