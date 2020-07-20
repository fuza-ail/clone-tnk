import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-slider',
  templateUrl: './loan-slider.component.html',
  styleUrls: ['./loan-slider.component.scss']
})
export class LoanSliderComponent implements OnInit {
  amount:number =2
  duration:number=6
  cicilan:number= Math.round(this.amount*1.4*1000000/this.duration)

  constructor() { }

  ngOnInit(): void {
  }

  onChangeAmount(event):void{
    this.cicilan = Math.round(event.value*1000000*1.4/this.duration)
  }

  onChangeDuration(event):void{
    this.cicilan = Math.round(this.amount*1000000*1.4/event.value)
  }
}
