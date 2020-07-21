import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {CustomerDetailService} from '../../../services/customer-detail.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  constructor(private router:Router, private customerDetailService:CustomerDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm):void{
    this.customerDetailService.customerDetail = {
      name: form.value.name,
      ktp: form.value.ktp,
      phone: form.value.phone,
      email: form.value.email,
      source: form.value.source
    }
    console.log(this.customerDetailService.customerDetail)
    this.router.navigate(['/loan/summary'])
  }
}
