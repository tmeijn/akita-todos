import { Todo } from './state/todo.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-todo',
  template: `
  <label class="panel-block" [ngStyle]="{ 'border-top': 'none' }">
    <a (click)="delete.emit(todo.id)" style="margin-right: .8rem">
      <span class="icon has-text-danger is-large">
        <i class="fas fa-lg fa-trash-alt" aria-hidden="true"></i>
      </span>
    </a>
  <input type="checkbox">
  {{ todo.title }}
  </label>
  `,
  styles: []
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  @Output() delete = new EventEmitter<ID>();

  constructor() { }

  ngOnInit() {
  }

}
