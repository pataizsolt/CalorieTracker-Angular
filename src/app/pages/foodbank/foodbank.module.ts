import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodbankRoutingModule } from './foodbank-routing.module';
import { FoodbankComponent } from './foodbank.component';


@NgModule({
  declarations: [
    FoodbankComponent
  ],
  imports: [
    CommonModule,
    FoodbankRoutingModule
  ]
})
export class FoodbankModule { }
