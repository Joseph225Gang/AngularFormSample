import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTemplateDrivenComponent } from './component-template-driven.component';

describe('ComponentTemplateDrivenComponent', () => {
  let component: ComponentTemplateDrivenComponent;
  let fixture: ComponentFixture<ComponentTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
