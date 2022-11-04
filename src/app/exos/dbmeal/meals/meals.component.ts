import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'exos-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  categories: string[] = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Pasta', 'Seafood'];
  seletectedCategory: string = '';
  meals: Meal[] = [];

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
  }

  handleClick() {
    this.mealService
      .getMeals(this.seletectedCategory)
      .subscribe((meals: Meal[]) => {
        this.meals = meals;
      })
  }

}