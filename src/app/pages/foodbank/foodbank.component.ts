import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Food } from 'src/app/common/models/Food';
import { FoodService } from 'src/app/common/services/food.service';

@Component({
  selector: 'app-foodbank',
  templateUrl: './foodbank.component.html',
  styleUrls: ['./foodbank.component.scss']
})
export class FoodbankComponent implements OnInit {
  foods?: Food[];

  newFood = new FormGroup({
    name: new FormControl(),
    calories: new FormControl(),
    carb: new FormControl(),
    fat: new FormControl(),
    protein: new FormControl()
  });

  constructor(private foodService: FoodService, private angularFirestore: AngularFirestore) { }

  

  ngOnInit(): void {
    this.foodService.getAll().subscribe(data => {
      this.foods =  data.map(e =>{
        return {
          id: e.id,
          name: e.name,
          calories: e.calories,
          carb: e.carb,
          fat: e.fat,
          protein: e.protein
        } as Food;
      })
    })
  }

  create(food: Food){
    if(this.foods?.length===0){
      this.foodService.create({
        id: "ru47xd7DgCnvWRT4jF8O",
        name: "kakaoscsiga",
        calories: 10,
        carb: 10,
        fat: 10,
        protein: 100
      })
      this.foodService.create({
        id: "u5eRKBpZvKIuENiSUMVe",
        name: "fahejascsiga",
        calories: 102,
        carb: 130,
        fat: 10,
        protein: 1010
      })
      this.foodService.create({
        id: "0ktfgEdMz4QnVF3mO4It",
        name: "lofasz",
        calories: 102,
        carb: 1302,
        fat: 10,
        protein: 1010
      })
    }
    this.foodService.create(food);
}

update(food: Food) {
  this.foodService.update(food);
}

delete(id: string) {
  this.foodService.delete(id);
}

onSubmit(){
  const food: Food = {
    id: this.angularFirestore.createId(),
    name: this.newFood.get('name')?.value === null ? "unnamed" : this.newFood.get('name')?.value,
    calories: this.newFood.get('calories')?.value === null ? 0 : this.newFood.get('calories')?.value,
    carb: this.newFood.get('carb')?.value === null ? 0 : this.newFood.get('carb')?.value,
    fat: this.newFood.get('fat')?.value === null ? 0 : this.newFood.get('fat')?.value,
    protein: this.newFood.get('protein')?.value === null ? 0 : this.newFood.get('protein')?.value
  };
  this.foodService.create(food).then(_ => {
    console.log('User added successfully.');
  }).catch(error => {
    console.error(error);
  })
}

}
