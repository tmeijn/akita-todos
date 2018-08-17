import { Todo } from './state/todo.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
  <label class="panel-block">
    <input type="checkbox">
    {{ todo.title }}
  </label>
  `,
  styles: []
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
