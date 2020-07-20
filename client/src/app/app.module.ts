import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoanComponent } from './pages/loan/loan.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { StatisticComponent } from './components/home/statistic/statistic.component';
import { LoanSliderComponent } from './components/home/landing/loan-slider/loan-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoanComponent,
    NavbarComponent,
    LandingComponent,
    StatisticComponent,
    LoanSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
