import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFromComponent implements OnInit {
  fg = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl('', Validators.required),
    isDone: new FormControl(false, Validators.required),
  });

  constructor(
    private todoService: TodoService,
    public dialogRef: MatDialogRef<TodoFromComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TodoFormData
  ) {
    if (data.action === 'update') {
      const todo = todoService.getOneTodo(data.id);
      this.fg.patchValue(todo);
    }
  }

  ngOnInit(): void {}

  save() {
    const value = this.fg.value;
    if (this.data.action === 'create') {
      this.create(value);
    } else {
      this.update(value);
    }
    this.dialogRef.close();
  }

  create(value) {
    this.todoService.addTodo(value);
  }

  update(value) {
    this.todoService.updateTodo(this.data.id, value);
  }
}

interface TodoFormData {
  action: 'create' | 'update';
  id?: string;
}
