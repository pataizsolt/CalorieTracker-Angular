import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodbankRoutingModule } from './foodbank-routing.module';
import { FoodbankComponent } from './foodbank.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FoodbankComponent
  ],
  imports: [
    CommonModule,
    FoodbankRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FoodbankModule { }
