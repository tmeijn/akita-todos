import { Component, Input, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';

import { Todo } from './state/todo.model';
import { TodosService } from './state/todos.service';

@Component({
  selector: 'app-todos',
  template: `
    <div class="panel">
      <p class="panel-heading" *ngIf="countTodo !== 0; else noTodo">Current Todos: {{ countTodo }}</p>
      <ng-template #noTodo>
      <p class="panel-heading">No todos! Add todos by using the textbox above.</p>
      </ng-template>
      <app-todo
        *ngFor="let todo of todos; trackBy: trackByFn"
        [todo]="todo"
        (delete)="deleteTodo($event)"
        (update)="updateTodo($event)"
        (complete)="updateTodo($event)">
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
