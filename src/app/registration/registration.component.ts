import { Component, OnInit } from '@angular/core';
import { RegistrationForm } from '../registration-form';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form = new RegistrationForm();

  //submitted = false;
  //onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
