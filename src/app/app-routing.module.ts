import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path:'add-offer',component:AddOfferComponent,canActivate: [AuthGuard] },

  { path: '', redirectTo: "/homepage", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
