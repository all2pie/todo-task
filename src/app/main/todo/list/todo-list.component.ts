import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';
import { MatDialog } from '@angular/material/dialog';
import { TodoFromComponent } from '../form/todo-form.component';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todoList: Observable<Todo[]>;

  constructor(todoService: TodoService, private matDialog: MatDialog) {
    this.todoList = todoService.getAllTodo();
  }

  ngOnInit(): void {}

  addTodo() {
    this.matDialog.open(TodoFromComponent, {
      width: '70vw',
      data: {
        action: 'create',
      },
    });
  }
}
