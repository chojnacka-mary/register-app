import { Component, OnInit } from '@angular/core';
import { RegistrationForm } from '../registration-form';
import {RegisterService} from '../register.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new RegistrationForm();

  submitted = false;
  onSubmit() { this.submitted = true; this.addPost()}

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  addPost() {
    console.log('IT WORKS');
    console.log(this.user);
    this.registerService.createFood(this.user).subscribe(res => console.log('eee' + res));


  }

}
