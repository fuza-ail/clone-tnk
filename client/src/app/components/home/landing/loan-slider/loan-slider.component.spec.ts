import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSliderComponent } from './loan-slider.component';
import { LoanService } from 'src/app/services/loan.service';

describe('LoanSliderComponent', () => {
  let component: LoanSliderComponent;
  let fixture: ComponentFixture<LoanSliderComponent>;
  let loanService:LoanService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loanService = fixture.debugElement.injector.get(LoanService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change service value if onChangeAmount is triggered',()=>{
    let dummyAmount ={
      value: 20
    }
    component.onChangeAmount(dummyAmount)
    expect(loanService.amount).toEqual(dummyAmount.value)
  })

  it('should change service value if onChangeDuration is triggered',()=>{
    let dummyDuration ={
      value: 6
    }
    component.onChangeAmount(dummyDuration)
    expect(loanService.amount).toEqual(dummyDuration.value)
  })
});
