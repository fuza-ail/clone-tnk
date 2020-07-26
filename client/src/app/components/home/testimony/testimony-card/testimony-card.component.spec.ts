import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyCardComponent } from './testimony-card.component';

describe('TestimonyCardComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonyCardComponent ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    let fixture = TestBed.createComponent(TestimonyCardComponent);
    let component = fixture.componentInstance;
    component.user={
      imgUrl: 'image',
      name: 'name',
      age: 0,
      loan: 0,
      testi: 'testimony'
    }
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
