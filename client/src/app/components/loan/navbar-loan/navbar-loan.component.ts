import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-loan',
  templateUrl: './navbar-loan.component.html',
  styleUrls: ['./navbar-loan.component.scss']
})
export class NavbarLoanComponent implements OnInit {
  @Input() title:string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
