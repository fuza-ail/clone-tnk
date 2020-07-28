import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {LoanComponent} from './loan.component';
import {ApplicationFormComponent} from './application-form/application-form.component';
import {SummaryComponent} from './summary/summary.component';
import {ServiceAreaComponent} from './service-area/service-area.component';
import {OutsideAreaComponent} from './outside-area/outside-area.component'
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'',component: LoanComponent,
    children:[
      {path:'confirm-service-area', component:ServiceAreaComponent},
      {path: 'outside-service-area',component:OutsideAreaComponent},
      {path: 'application-form', component: ApplicationFormComponent},
      {path: 'summary', component: SummaryComponent}
    ]
  }
]

@NgModule({
  declarations:[LoanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoanRoutingModule {}