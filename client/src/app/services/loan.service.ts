import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private _amount: number;
  private _duration: number ;
  private _installment: number;

  constructor() {
    this._amount = 2;
    this._duration = 6;
    this._installment = this.calculateInstallment()
  }

  get amount(){
    return this._amount
  }

  get duration(){
    return this._duration
  }

  get installment(){
    return this._installment
  }

  setAmount(amount:number): void {
    this._amount = amount;

  }
  setDuration(duration:number): void {
    this._duration = duration;

  }
  setInstallment():void{
    this._installment = this.calculateInstallment()
  }

  calculateInstallment():number{
    return  Math.round(this._amount*1.4*1000000/this._duration);
  }
}
