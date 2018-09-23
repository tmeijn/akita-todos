import { ID } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { TodosStore } from './todos.store';
import { createTodo, Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private todosStore: TodosStore) {}

  add(title: string) {
    const todo = createTodo({ title });
    this.todosStore.add(todo);
  }

  delete(id: ID): void {
    this.todosStore.remove(id);
  }

  update(todo: Todo): void {
    this.todosStore.update(todo.id, {...todo});
  }

  showList(value) {
    this.todosStore.updateListState(value);
  }

}
