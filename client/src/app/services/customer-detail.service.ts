import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {
  customerDetail:{email:string,ktp:number,name:string,phone:number,source:string}
  constructor() {  }
}
