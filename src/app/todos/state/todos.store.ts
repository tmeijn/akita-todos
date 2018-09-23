import { VISIBILITY_FILTER } from './../filter/filter.model';
import { EntityState, EntityStore, StoreConfig, action } from '@datorama/akita';
import { Todo } from './todo.model';
import { Injectable } from '@angular/core';

export interface State extends EntityState<Todo> {
  ui: {
    filter: VISIBILITY_FILTER,
    showList: boolean,
  };
}

const initialState = {
  ui: {
    filter: VISIBILITY_FILTER.SHOW_ALL,
    showList: true
  }
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<State, Todo> {
  constructor() {
    super(initialState);
  }

  @action({ type: 'Update showList' })
  updateListState(value): void {
    this.updateRoot(state => {
      return {
        ui: {
          ...state.ui,
          showList: value
        }
      };
    }
    );
  }
}
