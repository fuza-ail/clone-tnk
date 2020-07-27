import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomerDetailService } from 'src/app/services/customer-detail.service';
import { LoanService } from 'src/app/services/loan.service';
import {Location} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

describe('SummaryComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryComponent ],
      imports:[RouterTestingModule,MatSnackBarModule,BrowserAnimationsModule]
    })
    .compileComponents();
  }));


  it('should create', () => {
    let fixture = TestBed.createComponent(SummaryComponent);
    let component = fixture.debugElement.componentInstance
    expect(component).toBeTruthy();
  });

  it('should use data from service',()=>{
    let fixture = TestBed.createComponent(SummaryComponent);
    let component = fixture.componentInstance;
    let customerDetailService = fixture.debugElement.injector.get(CustomerDetailService);
    let loanService = fixture.debugElement.injector.get(LoanService)
    customerDetailService.customerDetail ={
      name: 'name',
      ktp: 0,
      email: 'email',
      phone: 0,
      source: 'source'
    }
    loanService.amount =0
    loanService.duration=0
    loanService.installment=0

    fixture.detectChanges();
    expect(loanService.amount).toEqual(component.data.amount);
  })

  it('should content Ringkasan Pengajuan',()=>{
    let fixture = TestBed.createComponent(SummaryComponent)
    let compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Ringkasan Pengajuan')
  })

  // it('should navigate after submit',()=>{
  //   let fixture = TestBed.createComponent(SummaryComponent)
  //   let component = fixture.debugElement.componentInstance
  //   component.onSubmit();
  //   const location:Location = TestBed.inject(Location)
  //   fixture.detectChanges();
  //   expect(location.path()).toBe('/')
  // })
});
