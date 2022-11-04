import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo: Todo | null = null;
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  isHidden: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    let api = "https://jsonplaceholder.typicode.com/todos";
    fetch(api)
      .then(res => res.json())
      .then(todos => {
        console.log("first");
        console.log(todos[0]);
        this.todo = todos[0];
      })
      ;
    console.log("Second");

    console.log(this.todoService.getTodos());
    
    this.todoService
      .getTodosAsync()
      .pipe(
        //map(x => x.splice(0, 5))
        //map(x => x.filter(t => t.completed)),
       // map(x => x.length)
      )
      .subscribe(todos => {
        this.todos = todos;
        this.filteredTodos = todos;
      })
      ;

  }

  onClick() {
    this.isHidden = !this.isHidden;
    console.log(this.isHidden)
    if (this.isHidden) {
      this.filteredTodos = this.todos.filter(todo => !todo.completed);
      
    } else {
      this.filteredTodos = this.todos;
    }
    
    
  }

}
