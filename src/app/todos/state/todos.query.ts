import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { State, TodosStore } from './todos.store';


@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<State, Todo> {
  selectListState$ = this.store._select(state => state.ui.showList);
  
  constructor(protected store: TodosStore) {
    super(store);
  }

}
