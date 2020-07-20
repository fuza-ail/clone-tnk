import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLoanComponent } from './navbar-loan.component';

describe('NavbarLoanComponent', () => {
  let component: NavbarLoanComponent;
  let fixture: ComponentFixture<NavbarLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
