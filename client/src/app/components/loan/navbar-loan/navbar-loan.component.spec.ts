import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser'
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

  it('should render component while ngIf true',()=>{
    component.type = "true";
    let el:HTMLElement = fixture.debugElement.nativeElement
    expect(el.querySelector('.navbar-loan__icon')).toBeDefined()
  })

  it('should not render navbar icon component',()=>{
    component.type ='';
    let el = fixture.debugElement.query(By.css('.navbar-loan__icon'))
    expect(el).toBe(null)
  })
});
