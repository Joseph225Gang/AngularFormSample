import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-bootstrap-component',
  templateUrl: './ngx-bootstrap-component.component.html',
  styleUrls: ['./ngx-bootstrap-component.component.css']
})
export class NgxBootstrapComponentComponent implements OnInit {

  interfaceStyle: string;
  startDate: Date;
  startTime: Date;
  rate = 0;

  constructor() { }

  ngOnInit() {
    this.interfaceStyle = "Single Toggle"
    this.startDate = new Date();
    this.startTime = new Date();
  }

}
