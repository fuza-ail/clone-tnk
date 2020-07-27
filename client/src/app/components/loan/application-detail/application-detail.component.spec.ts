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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationDetailComponent ],
      imports:[RouterTestingModule],
      providers: [ { provide: LoanService, useValue: loanServiceData } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill data from service',()=>{
    let loanService = TestBed.inject(LoanService)

    expect(component.amount).toEqual(loanService.amount)
    expect(component.duration).toEqual(loanService.duration)
    expect(component.installment).toEqual(loanService.installment)
  })

});
