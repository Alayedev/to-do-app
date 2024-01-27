import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { TodoComponent } from './todo/todo.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'todo-edit/:id', component: TodoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
