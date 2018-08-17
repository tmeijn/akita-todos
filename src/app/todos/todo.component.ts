import { Todo } from './state/todo.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
  <label class="panel-block text" [ngStyle]="!astItem && { 'border-top': 'none' }">
    <input type="checkbox">
    {{ todo.title }}
  </label>
  `,
  styles: []
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Input() lastItem: boolean;

  constructor() { }

  ngOnInit() {
  }

}
