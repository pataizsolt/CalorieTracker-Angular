import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/models/User';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user?: User;
  email!: string;
  height!: number;
  weight!: number;
  username!: string;
  sex!: string;
  bmi!: number;



  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
    }, error => {
      console.error(error);
    });

    this.userService.getById(user.uid).subscribe(data =>{
        this.email = data?.email!;
        this.height = data?.height!;
        this.username = data?.username!;
        this.weight = data?.weight!;
        this.sex = data?.sex!;
        this.bmi = this.weight/((this.height/100)*(this.height/100));
    });

  }

}
