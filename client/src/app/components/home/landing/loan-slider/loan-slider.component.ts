import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-slider',
  templateUrl: './loan-slider.component.html',
  styleUrls: ['./loan-slider.component.scss']
})
export class LoanSliderComponent implements OnInit {
  amount:number

  constructor() { }

  ngOnInit(): void {
  }

}
