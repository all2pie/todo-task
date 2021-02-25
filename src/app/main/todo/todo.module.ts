import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoListComponent } from './list/todo-list.component';
import { TodoCardComponent } from './card/todo-card.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoService } from './todo.service';
import { TodoFromComponent } from './form/todo-form.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  // { path: 'add', component: CampaignFormComponent },
  // { path: 'edit/:id', component: CampaignFormComponent },
  // { path: 'view/:id', component: CampaignFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [TodoListComponent, TodoCardComponent, TodoFromComponent],
  entryComponents: [TodoFromComponent],
})
export class TodoModule {}
