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
  OnDestroy,
  HostBinding,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ID } from '@datorama/akita';

import { Todo } from './state/todo.model';
import { Subscription } from 'rxjs';
import { todoAnimation } from '../_shared/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@todoAnimation]': '',
    'style' : 'display: block;'
 },
  animations: [ todoAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit, OnDestroy {

  @Input() todo: Todo;
  @Output() delete = new EventEmitter<ID>();
  @Output() update = new EventEmitter<Todo>();
  @Output() complete = new EventEmitter<Todo>();

  @ViewChild('updatedTitle') input: ElementRef;

  isEditing = false;
  control: FormControl;
  subscription: Subscription;

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
    this.control = new FormControl(this.todo.completed);

    this.subscription = this.control.valueChanges.subscribe((completed: boolean) => {
      this.complete.emit({ ...this.todo, completed});
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
