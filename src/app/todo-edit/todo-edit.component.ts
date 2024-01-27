import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo-service';
import { Todo } from '../todo/todo.interface';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.css'
})
export class TodoEditComponent implements OnInit {
  todo: Todo | null = null;
  constructor(private route: ActivatedRoute, private todoService: TodoService){}

ngOnInit(): void {
  // Récupérez l'ID de la route
  const todoId = this.route.snapshot.paramMap.get('id')?.toString();

  // Utilisez l'ID pour récupérer la tâche depuis le service ou Firestore
  this.todoService.getTodoById(todoId!).subscribe(todo => {
    todo = todo;
  });
}

saveTodoEdit(): void {
  if (this.todo) {
    this.todoService.updateTodoName(this.todo.id, this.todo.name);
  }
}

}
