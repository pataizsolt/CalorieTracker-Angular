import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, MaxLengthValidator } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/common/models/User';
import { UserService } from 'src/app/common/services/user.service';

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
    weight: new FormControl(''),
    height: new FormControl(''),
    sex: new FormControl('')
  });
  
  constructor(private router: Router, private location: Location, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.register(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/foodbank');
      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value,
        username: this.signUpForm.get('email')?.value.split('@')[0],
        weight: this.signUpForm.get('weight')?.value,
        height: this.signUpForm.get('height')?.value,
        sex: this.signUpForm.get('sex')?.value
      };
      this.userService.create(user).then(_ => {
        console.log('User added successfully.');
      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
    });
  }

  goBack() {
    this.location.back();
  }


}
