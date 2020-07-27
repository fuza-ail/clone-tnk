import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';
import { CustomerDetailService } from 'src/app/services/customer-detail.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Summary} from '../../../models/summary.model'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  isChecked:boolean
  data:Summary
  
  constructor(private loanService:LoanService,private customerDetailService:CustomerDetailService, private router:Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.data = {
      name: this.customerDetailService.customerDetail.name,
      ktp: this.customerDetailService.customerDetail.ktp,
      email: this.customerDetailService.customerDetail.email,
      phone: this.customerDetailService.customerDetail.phone,
      amount: this.loanService.amount,
      duration: this.loanService.duration,
      installment: this.loanService.installment
    }
  }

  onSubmit(){
    this.router.navigate(['/'])
    this._snackBar.open('Anda telah berhasil melakukan pengajuan','',{
      duration: 1000,
      horizontalPosition:'center',
      verticalPosition:'top'
    })
  }
}
