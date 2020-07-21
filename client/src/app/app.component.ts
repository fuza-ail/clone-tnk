import { Component } from '@angular/core';
import { LoanService } from './services/loan.service';
import {CustomerDetailService} from './services/customer-detail.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[LoanService,CustomerDetailService]
})
export class AppComponent {
  constructor(){

  }

}
