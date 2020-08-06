import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoanService} from '../../../services/loan.service'

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss']
})
export class ApplicationDetailComponent implements OnInit {
  amount:number;
  duration:number;
  installment:number;

  constructor(private router:Router, private loanService:LoanService) { }

  ngOnInit(): void {
    this.amount = this.loanService.amount;
    this.duration = this.loanService.duration;
    this.installment = this.loanService.installment;

  }

}
