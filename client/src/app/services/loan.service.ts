import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  amount: number = 2;
  duration: number = 6;
  installment: number = Math.round(this.amount*1.4*1000000/this.duration);

  constructor() {}

  setAmount(amount:number): void {
    this.amount = amount;

  }
  setDuration(duration:number): void {
    this.duration = duration;

  }
  setInstallment():void{
    this.installment = Math.round(this.amount*1.4*1000000/this.duration)
  }
}
