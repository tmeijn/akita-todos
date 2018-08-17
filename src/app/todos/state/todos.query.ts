import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { State, TodosStore } from './todos.store';


@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<State, Todo> {
  constructor(protected store: TodosStore) {
    super(store);
  }
}