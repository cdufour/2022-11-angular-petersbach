import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Meal } from './meal';

const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

interface ApiResponse {
  meals: Meal[]
}

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }

  getMeals(category: string): Observable<Meal[]> {
    return this.http
      .get<ApiResponse>(API + category)
      .pipe(
        map((res: ApiResponse) => res.meals)
      )
  }
}
