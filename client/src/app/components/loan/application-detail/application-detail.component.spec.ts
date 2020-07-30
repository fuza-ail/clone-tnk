import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailComponent } from './application-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoanService } from 'src/app/services/loan.service';

describe('ApplicationDetailComponent', () => {
  let component: ApplicationDetailComponent;
  let fixture: ComponentFixture<ApplicationDetailComponent>;
  let loanServiceData = {
    amount: 222,
    duration: 333,
    installment: 666
  }
  const loanServiceSpy = jasmine.createSpyObj('LoanService',['setAmount'])
  let loanService:LoanService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationDetailComponent ],
      imports:[RouterTestingModule],
      providers: [ { provide: LoanService, useValue: loanServiceSpy } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loanService = TestBed.inject(LoanService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill data from service',()=>{

    expect(component.amount).toEqual(loanService.amount)
    expect(component.duration).toEqual(loanService.duration)
    expect(component.installment).toEqual(loanService.installment)
  })

});
