import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { FormControl, FormGroup } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { MealLog } from 'src/app/common/models/MealLog';
import { User } from 'src/app/common/models/User';
import { FoodService } from 'src/app/common/services/food.service';
import { MeallogService } from 'src/app/common/services/meallog.service';
import { UserService } from 'src/app/common/services/user.service';




@Component({
  selector: 'app-meallog',
  templateUrl: './meallog.component.html',
  styleUrls: ['./meallog.component.scss']
})
export class MeallogComponent implements OnInit {
  user?: User;
  
  mealLogs?: MealLog[];

  mealLogSpecific?: MealLog[];

  newMealLog = new FormGroup({
    userid: new FormControl(),
    datepicker: new FormControl(),
  });

  select = new FormGroup({
    id: new FormControl(),
    calories: new FormControl(),
    carb: new FormControl(),
    fat: new FormControl(),
    protein: new FormControl()
  });
  temp!: number;

  

  

  constructor(private userService: UserService,private foodService: FoodService, private angularFirestore: AngularFirestore, private mealLogService: MeallogService) { }

  

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
    }, error => {
      console.error(error);
    });



    this.mealLogService.getAll().subscribe(data => {
      this.mealLogs =  data.map(e =>{
        return {
          id: e.id,
          userid: e.userid,
          date: e.date,
          calories: e.calories,
          carb: e.carb,
          fat: e.fat,
          protein: e.protein
        } as MealLog;
      })
    });

  
  
    this.mealLogService.getSpecific(user.uid as string).subscribe(data => {
      this.mealLogSpecific =  data});


      
  }
  create(mealLog: MealLog){
    this.mealLogService.create(mealLog);
  }

  

update(mealLog: MealLog) {
  this.mealLogService.update(mealLog);
}

delete(id: string) {
  this.mealLogService.delete(id);
}

onSubmit(){
  if(this.newMealLog.get("datepicker")?.value===null){
    console.log('error')
  }
  else{
    const mealLog: MealLog = {
      id: (this.user?.id+"@"+Date.parse(this.newMealLog.get("datepicker")?.value)),
      userid: this.user?.id+"",
      date: Date.parse(this.newMealLog.get("datepicker")?.value),
      calories: 0,//this.newMealLog.get('calories')?.value,
      carb: 0,//this.newMealLog.get('carb')?.value,
      fat: 0,//this.newMealLog.get('fat')?.value,
      protein: 0,//this.newMealLog.get('protein')?.value
    };
    this.mealLogService.create(mealLog).then(_ => {
      console.log('User added successfully.');
    }).catch(error => {
      console.error(error);
    })
  }
}

onSubmit2(){
  if(this.select.get('id')?.value===null || this.select.get('calories')?.value===null || this.select.get('carb')?.value===null || this.select.get('fat')?.value===null || this.select.get('protein')?.value===null){
    console.log('error');
  }
  else{
    console.log(this.user?.id+"@"+this.select.get('id')?.value);
    const mealLog: MealLog = {
      id: (this.user?.id+"@"+this.select.get('id')?.value),
      userid: this.user?.id+"",
      date: this.select.get('id')?.value,
      calories: this.select.get('calories')?.value,
      carb: this.select.get('carb')?.value,
      fat: this.select.get('fat')?.value,
      protein: this.select.get('protein')?.value
    };
    this.mealLogService.update(mealLog).then(_ => {
      console.log('User added successfully.');
    }).catch(error => {
      console.error(error);
    })
  }
  
}

}

  


