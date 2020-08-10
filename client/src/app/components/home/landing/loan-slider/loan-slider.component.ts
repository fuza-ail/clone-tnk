import { Component, OnInit } from '@angular/core';
import {LoanService} from '../../../../services/loan.service'

@Component({
  selector: 'app-loan-slider',
  templateUrl: './loan-slider.component.html',
  styleUrls: ['./loan-slider.component.scss']
})
export class LoanSliderComponent implements OnInit {
  amount:number
  duration:number 
  installment:number

  constructor(private loanService:LoanService) {
    
   }

  ngOnInit(): void {
    this.amount =this.loanService.amount
    this.duration = this.loanService.duration
    this.installment =this.loanService.installment
  }

  onChangeAmount(event):void{
    this.loanService.setAmount(event.value)
    this.setInstallment()
  }

  onChangeDuration(event):void{
    this.loanService.setDuration(event.value)
    this.setInstallment()
  }
  setInstallment():void{
    this.loanService.setInstallment()
    this.installment = this.loanService.installment
  }
}
