import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import{DashboardComponent} from '../dashboard/dashboard.component';
//import{WelcomeComponent} from '../welcome/welcome.component'
//import{ProfileComponent} from './../../../pages/profile/profile.component'
const routes: Routes = [
{
  //path:'',
 // component:DashboardComponent,
 // children:[
    // {
    //       path:'v1',
    //       component:WelcomeComponent,
    //     },
    //       {
    //       path:'profile',
    //       component:ProfileComponent,
    //     },
     // ]
}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
