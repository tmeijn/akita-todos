import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './state/todo.model';

@Component({
  selector: 'app-todos',
  template: `
    <div class="panel">
      <p class="panel-heading">Current Todos</p>
      <app-todo *ngFor="let todo of todos; last as isLast" [lastItem]="isLast" [todo]="todo"></app-todo>
    </div>
  `,
  styles: []
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit() {
  }

}
