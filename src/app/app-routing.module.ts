import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthguardGuard } from './authguard.guard';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[AuthguardGuard],
  },
  {
    path:"details/:eid",
    component:DetailsComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:"**",
    component:NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
