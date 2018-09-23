import { TodosQuery } from './state/todos.query';
import { Subscription } from 'rxjs';
import { foldListAnimation } from './../_shared/animations';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ID } from '@datorama/akita';

import { Todo } from './state/todo.model';
import { TodosService } from './state/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  animations: [ foldListAnimation ]
})
export class TodosComponent implements OnInit, OnDestroy {
  @Input() todos: Todo[];

  showList: boolean;
  subscription: Subscription;

  constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery) { }

  ngOnInit() {
    this.subscription = this.todosQuery.selectListState$.subscribe(
      value => this.showList = value
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteTodo(id: ID): void {
    this.todosService.delete(id);
  }

  toggleFoldedState(): void {
    this.todosService.showList(!this.showList);
  }

  updateTodo(todo: Todo): void {
    this.todosService.update(todo);
  }

  trackByFn(index, item) {
    return item.id;
  }

  get countTodo(): number {
    return this.todos.length;
  }

}
