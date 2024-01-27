import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule , BrowserModule
  ]
})
export class TodoModule { }
