import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoanComponent } from './pages/loan/loan.component';
import {ServiceAreaComponent} from './pages/loan/service-area/service-area.component'
import { ApplicationFormComponent } from './pages/loan/application-form/application-form.component';
import {OutsideAreaComponent} from './pages/loan/outside-area/outside-area.component';
import {SummaryComponent} from './pages/loan/summary/summary.component'

const routes: Routes = [
  {
    path:'', component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:'loan',component:LoanComponent,
    children:[
      {path:'confirm-service-area', component:ServiceAreaComponent},
      {path: 'outside-service-area',component:OutsideAreaComponent},
      {path: 'application-form', component: ApplicationFormComponent},
      {path: 'summary', component: SummaryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
