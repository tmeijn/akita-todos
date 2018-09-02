import { foldListAnimation } from './../_shared/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { AnimationEvent } from '@angular/animations';

import { Todo } from './state/todo.model';
import { TodosService } from './state/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  animations: [ foldListAnimation ]
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  showList = true;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  deleteTodo(id: ID): void {
    this.todosService.delete(id);
  }

  toggleFoldedState(): void {
    this.showList = this.showList === true ? false : true;
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
