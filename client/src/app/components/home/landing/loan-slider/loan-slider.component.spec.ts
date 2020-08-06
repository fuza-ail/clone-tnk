import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSliderComponent } from './loan-slider.component';
import { LoanService } from 'src/app/services/loan.service';

describe('LoanSliderComponent', () => {
  let component: LoanSliderComponent;
  let fixture: ComponentFixture<LoanSliderComponent>;
  let loanService:LoanService
  const loanServiceSpy = jasmine.createSpyObj('LoanService',['setAmount','setDuration','setInstallment']);
  const mockAmount ={
    value: 10
  }
  const  mockDuration = {
    value: 10
  } // arrange: assign mock

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanSliderComponent ],
      providers: [{provide: LoanService, useValue: loanServiceSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loanService = TestBed.inject(LoanService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loan service set amount',()=>{

    component.onChangeAmount(mockAmount) // act

    //
    const setAmountSpy = loanService.setAmount as jasmine.Spy

    expect(setAmountSpy).toHaveBeenCalledWith(mockAmount.value) // assert
  })

  it('should call loan service set duration',()=>{
  
    component.onChangeDuration(mockDuration)

    const setDurationSpy = loanService.setDuration as jasmine.Spy

    expect(setDurationSpy).toHaveBeenCalledWith(mockDuration.value) 
  })

  it('Should calls loan service set installment',()=>{
    component.setInstallment()
    const setInstallmentSpy = loanService.setInstallment as jasmine.Spy
    expect(setInstallmentSpy).toHaveBeenCalled()
  })
});
