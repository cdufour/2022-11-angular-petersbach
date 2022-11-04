import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo = {
    title: '',
    userId: 3,
    completed: true
  };

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Submit form...");

    this.todoService
      .postTodo(this.todo)
      .subscribe((res: HttpResponse<Todo>) => {
        console.log(res.status);
      })

  }

}
