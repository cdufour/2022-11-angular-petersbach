import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  postTodo(todo: Todo): Observable<HttpResponse<Todo>> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-Token', '1234');

    return this.httpClient.post<Todo>(API, todo, { headers, observe: 'response' });
  }

}
