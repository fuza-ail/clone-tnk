import { Component, OnInit } from '@angular/core';
import {ServiceArea} from '../../../models/service-area.model'
import {SERVICE_AREA} from '../../../data/service-area'
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-area',
  templateUrl: './service-area.component.html',
  styleUrls: ['./service-area.component.scss']
})
export class ServiceAreaComponent implements OnInit {
  title: string= 'Area Layanan'
  pickedArea:string
  serviceArea: ServiceArea[]

  constructor(private router:Router){ }

  ngOnInit(): void {
    this.serviceArea = SERVICE_AREA
  }

  handleNext(){
    if(this.pickedArea == 'inside'){
      this.router.navigate(['/loan/application-form'])
    }else{
      this.router.navigate(['/loan/outside-service-area'])
    }
  }
}
