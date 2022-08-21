import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/user/contact/contact.component';
import { CovidComponent } from './pages/user/covid/covid.component';
import { ReportweatherComponent } from './pages/user/reportweather/reportweather.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserwelcomeComponent } from './pages/user/userwelcome/userwelcome.component';
import { WeatherComponent } from './pages/user/weather/weather.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'user-dash',
    component:UserDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:'',
        component:UserwelcomeComponent,
      },
      {
        path:'covid',
        component:CovidComponent,
       
     
      },
      {
        path:'weather',
        component:WeatherComponent,
       
     
      },
      {
        path:'profile',
        component:ProfileComponent,
       
     
      },
      {
      path:'report',
      component:ReportweatherComponent,
     
   
    },
    {
      path:'contact',
      component:ContactComponent,
     
   
    },
    ]
  },
  {
    path:'admin',
    // loadChildren:()=>import('./pages/admin/admin/admin.module')
    // .then(mod=>mod.AdminModule),
    component:DashboardComponent,
   canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
