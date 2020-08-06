import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailComponent } from './application-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoanService } from 'src/app/services/loan.service';

describe('ApplicationDetailComponent', () => {
  let component: ApplicationDetailComponent;
  let fixture: ComponentFixture<ApplicationDetailComponent>;
  // let loanServiceData = {
  //   amount: 222,
  //   duration: 333,
  //   installment: 666
  // }
  let mockDuration:number
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
    
    loanService = TestBed.inject(LoanService)
    
  });

  // after each for clearing
  afterEach(()=>{

  })

  it('should create', () => {
    console.log(component.amount, loanService.amount)

    expect(component).toBeTruthy();
  });

  it('should get amount data from loanservice',()=>{
    let mockAmount = 6 // assign mock
    loanService.amount = mockAmount // act
    fixture.detectChanges();
    expect(component.amount).toEqual(mockAmount) // assert
  })

  it('should get duration data from loanservice',()=>{
    let mockDuration = 6 // assign mock
    loanService.duration = mockDuration // act
    fixture.detectChanges();
    expect(component.duration).toEqual(mockDuration) // assert
  })
  it('should get installment data from loanservice',()=>{
    let mockInstallment = 6 // assign mock
    loanService.installment = mockInstallment // act
    fixture.detectChanges();
    expect(component.installment).toEqual(mockInstallment) // assert
  })
  
});
