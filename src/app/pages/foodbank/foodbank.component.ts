import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Food } from 'src/app/common/models/Food';
import { FoodService } from 'src/app/common/services/food.service';

@Component({
  selector: 'app-foodbank',
  templateUrl: './foodbank.component.html',
  styleUrls: ['./foodbank.component.scss']
})
export class FoodbankComponent implements OnInit, AfterViewInit{
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
      this.dataSource = new MatTableDataSource<Food>(this.foods);
      this.dataSource.paginator = this.paginator;
      this.foodTable?.renderRows();
    })
  }



  displayedColumns: string[] = ['name', 'calories', 'carb', 'fat', 'protein', 'delete'];
  dataSource = new MatTableDataSource<Food>(this.foods);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild('foodTable') foodTable?: MatTable<any>;

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
  

  create(food: Food){
    this.foodService.create(food);
}

update(food: Food) {
  this.foodService.update(food);
}

delete(id: string) {
  this.foodService.delete(id);
}

onSubmit(){
  if(this.newFood.get('name')?.value===null || this.newFood.get('calories')?.value===null || this.newFood.get('carb')?.value===null || this.newFood.get('fat')?.value===null || this.newFood.get('protein')?.value===null){
    console.log("error");
  }
  else{
    const food: Food = {
      id: this.angularFirestore.createId(),
      name: this.newFood.get('name')?.value,
      calories: this.newFood.get('calories')?.value,
      carb: this.newFood.get('carb')?.value,
      fat: this.newFood.get('fat')?.value,
      protein: this.newFood.get('protein')?.value
    };
    this.foodService.create(food).then(_ => {
      console.log('Food added successfully.');
    }).catch(error => {
      console.error(error);
    })
  }
  
}

}
