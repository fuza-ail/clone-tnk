import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAreaComponent } from './service-area.component';
// import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import {SERVICE_AREA} from '../../../data/service-area'

describe('ServiceAreaComponent', () => {
  let component: ServiceAreaComponent;
  let fixture: ComponentFixture<ServiceAreaComponent>;
  const routerSpy = {navigate: jasmine.createSpy('navigate')}
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: Router, useValue: routerSpy}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate after trigger handleNext()', () => {
    // let handleSpy = spyOn(component,'handleNext')
    // component.pickedArea = 'inside'
    // component.handleNext()
    // fixture.detectChanges()
    // expect(handleSpy).toHaveBeenCalled()
    component.pickedArea = 'inside'
    component.handleNext();
    fixture.detectChanges();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/loan/application-form'])
    component.pickedArea = "outside"
    component.handleNext();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/loan/outside-service-area'])
  });

  it('should fill service area from data',()=>{
    component.ngOnInit()
    expect(component.serviceArea).toBe(SERVICE_AREA)
  })
});
