import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MealLog } from '../models/MealLog';

@Injectable({
  providedIn: 'root'
})
export class MeallogService {

  collectionName = 'MealLogs';

  constructor(private angularFirestore: AngularFirestore) { }

  create(meallog: MealLog) {
    return this.angularFirestore.collection<MealLog>(this.collectionName).doc(meallog.id).set(meallog);
  }

  getAll() {
    return this.angularFirestore.collection<MealLog>(this.collectionName).valueChanges();
  }

  getSpecific(id: string){
    return this.angularFirestore.collection<MealLog>(this.collectionName, ref => ref.where('id', '==', id).orderBy('date', 'asc')).valueChanges();
  }

  getById(id: string) {
    return this.angularFirestore.collection<MealLog>(this.collectionName).doc(id).valueChanges();
  }

  update(meallog: MealLog) {
    return this.angularFirestore.collection<MealLog>(this.collectionName).doc(meallog.id).set(meallog);
  }

  delete(id: string) {
    return this.angularFirestore.collection<MealLog>(this.collectionName).doc(id).delete();
  }

}
