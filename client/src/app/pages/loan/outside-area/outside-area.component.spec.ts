import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideAreaComponent } from './outside-area.component';

describe('OutsideAreaComponent', () => {
  let component: OutsideAreaComponent;
  let fixture: ComponentFixture<OutsideAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
