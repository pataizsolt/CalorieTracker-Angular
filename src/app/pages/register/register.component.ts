import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl('')
  });

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  goBack() {
    this.location.back();
  }

}
