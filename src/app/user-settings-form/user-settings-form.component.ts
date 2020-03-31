import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../user-settings';
import { NgForm} from '@angular/forms';
import { DataService} from '../data.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: null,
    emailOffers: true,
    interfaceStyle: 'blue',
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  };

  userSettings : UserSettings = { ...this.originalUserSettings };
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);

    if(form.valid){
      this.dataService.postUserSettingsForm(this.userSettings).subscribe
      (
        result => console.log('success: ', result),
        error => console.log(error)
      )
    };
  }
}
