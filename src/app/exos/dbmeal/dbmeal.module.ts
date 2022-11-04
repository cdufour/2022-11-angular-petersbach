import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MealsComponent } from './meals/meals.component';

@NgModule({
  declarations: [
    MealsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MealsComponent]
})
export class DbmealModule { }
