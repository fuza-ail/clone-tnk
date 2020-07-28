import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { LoanComponent } from './pages/loan/loan.component';
// import {ServiceAreaComponent} from './pages/loan/service-area/service-area.component'
// import { ApplicationFormComponent } from './pages/loan/application-form/application-form.component';
// import {OutsideAreaComponent} from './pages/loan/outside-area/outside-area.component';
// import {SummaryComponent} from './pages/loan/summary/summary.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  // {
  //   path: 'loan',
  //   loadChildren: () =>
  //     import('./pages/loan/loan.module').then((m) => m.LoanModule),
  // },
  {
    path: 'loan',
    loadChildren:()=> import('./pages/loan/loan-routing.module').then(m=>m.LoanRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //pre load
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
