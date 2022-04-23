import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeallogComponent } from './meallog.component';

const routes: Routes = [{ path: '', component: MeallogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeallogRoutingModule { }
