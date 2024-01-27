import { Component, OnInit } from '@angular/core';
import {  TodoService } from '../services/todo-service';
import { Todo } from './todo.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];



  constructor(private todoService: TodoService ){}

  todoForm! : FormGroup;

  task : Todo = {
    id: '',
    name: '',
    status: false
  };


  ngOnInit(): void {
    this.todoForm = new FormGroup({
      name: new FormControl(this.task.name, [Validators.required, Validators.minLength(5)]),
    });

     this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    }); 

     
  }

  onSubmit(): void{
    if(this.todoForm.valid){
      const formData: Todo = {
        id: Date.now().toString(),
        name: this.todoForm.value.name,
        status : false,
      }
      this.todoService.addTodo(formData);
    }
  }

  get name(){
    return this.todoForm.get('name');
  }


  toggleTodoStatus(id: string, status: boolean): void {
    this.todoService.updateTodoStatus(id, !status);
  }

  editTodo(todo: Todo): void {
    // Ajoutez la logique d'édition ici si nécessaire.
  }

  saveTodoEdit(todo: Todo): void {
    this.todoService.updateTodoName(todo.id, todo.name);
  }

  cancelEdit(todo: Todo): void {
    // Ajoutez la logique d'annulation ici si nécessaire.
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id);
  }
}
