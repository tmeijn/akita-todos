import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo } from './todo.model';
import { Injectable } from '@angular/core';

export interface State extends EntityState<Todo> {}

const initialState = {

};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<State, Todo> {
  constructor() {
    super(initialState);
  }
}
