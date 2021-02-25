import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { Todo } from '../interfaces/todo.interface';
import { TodoService } from '../todo.service';
import { TodoFromComponent } from '../form/todo-form.component';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService, private matDialog: MatDialog) {}

  ngOnInit(): void {}

  delete(id: string): void {
    this.matDialog
      .open(ConfirmDialogComponent, {
        width: '350px',
        data: {
          title: 'Warning!',
          message: 'Are you sure, you want to delete this todo?',
        },
      })
      .afterClosed()
      .subscribe((accept: boolean) => {
        if (accept) {
          this.todoService.removeTodo(id);
        }
      });
  }

  updateTodo(id: string) {
    this.matDialog.open(TodoFromComponent, {
      width: '70vw',
      data: {
        action: 'update',
        id,
      },
    });
  }
}
