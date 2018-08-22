import { Component, Input, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';

import { Todo } from './state/todo.model';
import { TodosService } from './state/todos.service';

@Component({
  selector: 'app-todos',
  template: `
    <div class="panel">
      <p class="panel-heading">Current Todos</p>
      <app-todo
        *ngFor="let todo of todos;"
        [todo]="todo"
        (delete)="deleteTodo($event)">
      </app-todo>
    </div>
  `,
  styles: []
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  deleteTodo(id: ID): void {
    this.todosService.delete(id);
  }

}
