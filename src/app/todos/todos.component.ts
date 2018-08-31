import { foldAnimationFunction } from './../_shared/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { AnimationEvent } from '@angular/animations';

import { Todo } from './state/todo.model';
import { TodosService } from './state/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  animations: [ foldAnimationFunction('app-todo') ]
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  animationState: 'folded' | 'unfolded' = 'unfolded';
  childState: 'folded' | 'unfolded' | undefined = 'unfolded';

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  deleteTodo(id: ID): void {
    this.todosService.delete(id);
  }

  handleChildAnimationState(event: AnimationEvent): void {
    const endState = event.toState;

    console.log('Animation Handler gets called with:', endState);


    switch (endState) {
      case 'folded':
        this.childState = 'folded';
        break;
      case 'unfolded':
        this.childState = undefined;
        break;
    }
  }

  toggleFoldedState(): void {
    switch (this.animationState) {
      case 'folded':
        this.animationState = 'unfolded';
        break;
      case 'unfolded':
        this.animationState = 'folded';
        break;
    }
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
