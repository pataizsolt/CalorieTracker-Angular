import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, MaxLengthValidator } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    username: new FormControl(''),
    weight: new FormControl(''),
    height: new FormControl(''),
    sex: new FormControl('')
  });
  
  constructor(private router: Router, private location: Location, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.register(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/foodbank');
    }).catch(error => {
      console.error(error);
    });
  }

  goBack() {
    this.location.back();
  }


}
