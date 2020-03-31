import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-component-template-driven',
  templateUrl: './component-template-driven.component.html',
  styleUrls: ['./component-template-driven.component.css']
})
export class ComponentTemplateDrivenComponent implements OnInit {
  customer = new Customer();

  constructor() { }

  ngOnInit() {
  }
  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
}
