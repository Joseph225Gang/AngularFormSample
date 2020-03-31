import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapComponentComponent } from './ngx-bootstrap-component.component';

describe('NgxBootstrapComponentComponent', () => {
  let component: NgxBootstrapComponentComponent;
  let fixture: ComponentFixture<NgxBootstrapComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBootstrapComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
