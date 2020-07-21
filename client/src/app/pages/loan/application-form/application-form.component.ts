import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {CustomerDetailService} from '../../../services/customer-detail.service'
import { NgForm } from '@angular/forms';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  amount:number;
  duration:number;
  installment:number;

  constructor(private router:Router, private customerDetailService:CustomerDetailService, private loanService:LoanService) { }

  ngOnInit(): void {
    this.amount = this.loanService.amount;
    this.duration = this.loanService.duration;
    this.installment = this.loanService.installment;
  }

  onSubmit(form:NgForm):void{
    this.customerDetailService.customerDetail = {
      name: form.value.name,
      ktp: form.value.ktp,
      phone: form.value.phone,
      email: form.value.email,
      source: form.value.source
    }
    // console.log(this.customerDetailService.customerDetail)
    this.router.navigate(['/loan/summary'])
  }
}
