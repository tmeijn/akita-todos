import { Injectable } from '@angular/core';
import { TodosStore } from './todos.store';
import { createTodo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private todosStore: TodosStore) {}

  add(title: string) {
    const todo = createTodo({ title });
    this.todosStore.add(todo);
  }
}
