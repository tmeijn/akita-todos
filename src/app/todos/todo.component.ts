import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  HostListener,
} from '@angular/core';
import { ID } from '@datorama/akita';

import { Todo } from './state/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [`

  .comp-todo-title {
    display: inline-block;
    cursor: text;
    width: 100%;
    z-index: 999;
  }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<ID>();
  @Output() update = new EventEmitter<Todo>();

  @ViewChild('updatedTitle') input: ElementRef;

  isEditing = false;

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    this.isEditing = false;

    if (this.input) {
      const title = this.input.nativeElement.value;


      if (title !== this.todo.title) {
        this.updateTodo(title);
      }
    }

  }


  constructor() { }

  ngOnInit() {
  }

  editTodo($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.isEditing = true;

    // input element will not exist immediately, therefore timeout function
    // prevents 'element undefined error'
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 100);
  }

  updateTodo(title) {
    // tslint:disable-next-line:curly
    if (!title) return;
    this.isEditing = false;
    this.update.emit({...this.todo, title});
  }

}
