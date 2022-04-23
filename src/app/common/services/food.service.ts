import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Food } from '../models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  collectionName = 'Foods';

  constructor(private angularFirestore: AngularFirestore) { }

  create(food: Food) {
    return this.angularFirestore.collection<Food>(this.collectionName).doc(food.id).set(food);
  }

  getAll() {
    return this.angularFirestore.collection<Food>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.angularFirestore.collection<Food>(this.collectionName).doc(id).valueChanges();
  }

  update(food: Food) {
    return this.angularFirestore.collection<Food>(this.collectionName).doc(food.id).set(food);
  }

  delete(id: string) {
    return this.angularFirestore.collection<Food>(this.collectionName).doc(id).delete();
  }
}
