import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

const API = "https://jsonplaceholder.typicode.com/todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient ) { }

  getTodos(): [] {
    return [];
  }

  getTodosAsync(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(API);
  }

}
