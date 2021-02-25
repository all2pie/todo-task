import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoCreate } from './interfaces/todo-create.interface';
import { Todo } from './interfaces/todo.interface';
import { v4 as uuid } from 'uuid';
import { TodoUpdate } from './interfaces/todo-update.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoSubject = new BehaviorSubject<Todo[]>([
    {
      id: uuid(),
      title: 'Fix Bug',
      description: 'Fix random timeout bug in production server',
      isDone: false,
    },
  ]);

  getAllTodo() {
    return this.todoSubject.asObservable();
  }

  getOneTodo(id: string) {
    const todoList = this.todoSubject.getValue();
    return todoList.find((todo) => todo.id === id);
  }

  removeTodo(id: string) {
    const filteredTodo = this.todoSubject
      .getValue()
      .filter((todo) => todo.id !== id);
    this.todoSubject.next(filteredTodo);
  }

  updateTodo(id: string, update: TodoUpdate) {
    const todoList = this.todoSubject.getValue();
    const index = todoList.findIndex((todo) => todo.id === id);
    todoList[index] = { ...todoList[index], ...update };
    this.todoSubject.next(todoList);
  }

  addTodo(todo: TodoCreate) {
    todo['id'] = uuid();
    const newList = [...this.todoSubject.getValue(), todo as Todo];
    this.todoSubject.next(newList);
  }
}
