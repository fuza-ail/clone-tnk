import { Component, OnInit } from '@angular/core';
import {LoanService} from '../../../../services/loan.service'

@Component({
  selector: 'app-loan-slider',
  templateUrl: './loan-slider.component.html',
  styleUrls: ['./loan-slider.component.scss']
})
export class LoanSliderComponent implements OnInit {
  amount:number= this.loanService.amount
  duration:number = this.loanService.duration
  installment:number = this.loanService.installment

  constructor(private loanService:LoanService) { }

  ngOnInit(): void {

  }

  onChangeAmount(event):void{
    console.log(event)
    this.loanService.setAmount(event.value)
    this.setInstallment()
  }

  onChangeDuration(event):void{
    this.loanService.setDuration(event.value)
    this.setInstallment()
  }
  setInstallment(){
    this.installment = Math.round(this.amount*1.4*1000000/this.duration)
  }
}
