import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from 'src/app/common/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    if(this.email.value === '' || this.password.value === ''){
      console.log('error');
    }
    else{
      this.loading = true;
      this.authService.login(this.email.value, this.password.value).then(cred => {
        console.log(cred);
        this.router.navigateByUrl('/foodbank');
      }).catch(error => {
        console.error(error);
      });
    }
    
  }


  

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }

}
