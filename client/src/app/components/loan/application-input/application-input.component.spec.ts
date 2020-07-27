import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationInputComponent } from './application-input.component';
import { RouterTestingModule } from '@angular/router/testing';
import {CustomerDetailService} from '../../../services/customer-detail.service'
import { Router } from '@angular/router';

describe('ApplicationInputComponent', () => {
  let component: ApplicationInputComponent;
  let fixture: ComponentFixture<ApplicationInputComponent>;
  let formData = {
    name: 'testing',
    ktp: 123,
    phone: 811,
    email: 'test@mail.com',
    source: 'internet'
  }
  const routerSpy = {navigate: jasmine.createSpy('navigate')}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationInputComponent ],
      imports: [RouterTestingModule],providers:[
        {provide: Router, useValue: routerSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test form validity',()=>{
    const form = component.applicationForm;
    expect(form.valid).toBeFalsy()

    form.setValue(formData)
    expect(form.valid).toBeTruthy()
  })

  it('should fill service data on submit',()=>{
    let customerService = TestBed.inject(CustomerDetailService)
    const form = component.applicationForm;

    form.setValue(formData)

    component.onSubmit();
    fixture.detectChanges()
    expect(customerService.customerDetail).toEqual(formData)
  })

  it('should navigate to summary page',()=>{
    component.onSubmit()
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/loan/summary'])
  })
});
