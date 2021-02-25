import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from './todo/todo.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  totalTodo = 0;

  constructor(
    private todoService: TodoService,
    private userService: UserService
  ) {
    todoService.getAllTodo().subscribe((todoList) => {
      this.totalTodo = todoList.length;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  logout() {
    this.userService.logOut();
  }
}
