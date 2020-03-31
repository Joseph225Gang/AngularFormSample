import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReactiveDrivenComponent } from './customer-reactive-driven.component';

describe('CustomerReactiveDrivenComponent', () => {
  let component: CustomerReactiveDrivenComponent;
  let fixture: ComponentFixture<CustomerReactiveDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReactiveDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReactiveDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
