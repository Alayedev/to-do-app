import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Todo } from '../todo/todo.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosCollection!: AngularFirestoreCollection<Todo>;
  private selectedTodo: Todo | null = null;

  todos!: Observable<Todo[]>;

  constructor(private firestore: AngularFirestore) {
    this.todosCollection = this.firestore.collection<Todo>('todos');
    this.todos = this.todosCollection.valueChanges({ idField: 'id' });
   }

   getTodos(): Observable<Todo[]> {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todosCollection.add(todo);
  }

  getSelectedTodo(): Todo | null {
    return this.selectedTodo;
  }

  setSelectedTodo(todo: Todo): void {
    this.selectedTodo = todo;
  }


  getTodoById(id: string): Observable<Todo | undefined> {
    return this.todos.pipe(
      map(todos => todos.find(todo => todo.id === id))
    );
  }


  updateTodoStatus(id: string, status: boolean): void {
    this.todosCollection.doc(id).update({ status: status });
  }

  updateTodoName(id: string, newName: string): void {
    this.todosCollection.doc(id).update({ name: newName });
  }

  deleteTodo(id: string): void {
    this.todosCollection.doc(id).delete();
  }
}
