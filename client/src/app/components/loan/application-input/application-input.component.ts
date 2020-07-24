import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerDetailService} from '../../../services/customer-detail.service'
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-application-input',
  templateUrl: './application-input.component.html',
  styleUrls: ['./application-input.component.scss']
})
export class ApplicationInputComponent implements OnInit {
  applicationForm : FormGroup

  constructor(private router:Router, private customerDetailService:CustomerDetailService) { }

  ngOnInit(): void {
    this.applicationForm = new FormGroup({
      name: new FormControl(null,[
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern("^[a-zA-Z]+$")
      ]),
      ktp: new FormControl(null,[
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      phone: new FormControl(null,[
        Validators.required
      ]),
      email: new FormControl(null,[
        Validators.required,
        Validators.email
      ]),
      source: new FormControl(null,[
        Validators.required
      ])
    })
  }

  onSubmit():void{
    this.customerDetailService.customerDetail = {
      name: this.applicationForm.value.name,
      ktp: this.applicationForm.value.ktp,
      phone: this.applicationForm.value.phone,
      email: this.applicationForm.value.email,
      source: this.applicationForm.value.source
    }
    console.log(this.applicationForm)
    // console.log(this.customerDetailService.customerDetail)
    // this.router.navigate(['/loan/summary'])
  }

}
