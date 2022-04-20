import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodbankComponent } from './foodbank.component';

const routes: Routes = [{ path: '', component: FoodbankComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodbankRoutingModule { }
