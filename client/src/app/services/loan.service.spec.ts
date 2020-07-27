import { TestBed } from '@angular/core/testing';

import { LoanService } from './loan.service';

describe('LoanService', () => {
  let service: LoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set amount',()=>{
    service.setAmount(10)
    expect(service.amount).toEqual(10)
  })

  it('should set duration',()=>{
    service.setDuration(12)
    expect(service.duration).toBe(12)
  })

  it('should set installment',()=>{
    service.amount = 2;
    service.duration = 6;
    let result =  Math.round(2*1.4*1000000/6)
    service.setInstallment()
    expect(service.installment).toEqual(result)
  })
});
