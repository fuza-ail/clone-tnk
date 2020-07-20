import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoanComponent } from './pages/loan/loan.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { StatisticComponent } from './components/home/statistic/statistic.component';
import { LoanSliderComponent } from './components/home/landing/loan-slider/loan-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MycurrencyPipe} from './custom.currencypipe';
import { ServiceAreaComponent } from './pages/loan/service-area/service-area.component';
import { ApplicationFormComponent } from './pages/loan/application-form/application-form.component';
import { NavbarLoanComponent } from './components/loan/navbar-loan/navbar-loan.component';
import { SummaryComponent } from './pages/loan/summary/summary.component';
import { OutsideAreaComponent } from './pages/loan/outside-area/outside-area.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoanComponent,
    NavbarComponent,
    LandingComponent,
    StatisticComponent,
    LoanSliderComponent,
    MycurrencyPipe,
    ServiceAreaComponent,
    ApplicationFormComponent,
    NavbarLoanComponent,
    SummaryComponent,
    OutsideAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
