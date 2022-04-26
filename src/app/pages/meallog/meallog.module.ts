import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeallogRoutingModule } from './meallog-routing.module';
import { MeallogComponent } from './meallog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DateFormatPipe } from 'src/app/common/pipes/date-format.pipe';


@NgModule({
  declarations: [
    MeallogComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    MeallogRoutingModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MeallogModule {

  
 }
