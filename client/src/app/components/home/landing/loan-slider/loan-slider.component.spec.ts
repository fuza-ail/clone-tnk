import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSliderComponent } from './loan-slider.component';
import { LoanService } from 'src/app/services/loan.service';

describe('LoanSliderComponent', () => {
  let component: LoanSliderComponent;
  let fixture: ComponentFixture<LoanSliderComponent>;
  let loanService:LoanService
  const loanServiceSpy = jasmine.createSpyObj('LoanService',['setAmount','setDuration','setInstallment']);
  const mockData={
    amount: 10,
    duration: 12
  }

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

  it('should change service value if onChangeAmount is triggered',()=>{
    // let dummyAmount ={
    //   value: 20
    // }
    // component.onChangeAmount(dummyAmount)
    // expect(loanService.amount).toEqual(dummyAmount.value)
    component.onChangeAmount(mockData.amount)

    expect(component.amount).toEqual(loanService.amount)
  })

  it('should change service value if onChangeDuration is triggered',()=>{
  //   // let dummyDuration ={
  //   //   value: 6
  //   // }
  //   // component.onChangeAmount(dummyDuration)
  //   // expect(loanService.amount).toEqual(dummyDuration.value)
    component.onChangeDuration(mockData.duration)

    expect(component.duration).toEqual(loanService.duration)
  })
});
