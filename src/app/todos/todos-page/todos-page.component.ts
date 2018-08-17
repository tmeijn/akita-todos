import { TodosQuery } from './../state/todos.query';
import { Todo } from './../state/todo.model';
import { TodosService } from './../state/todos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private todosService: TodosService, private todosQuery: TodosQuery) { }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectAll();
  }

  addTodo(input: HTMLInputElement) {
    // tslint:disable-next-line:curly
    if (input.value.length === 0) return;
    this.todosService.add(input.value);
    input.value = '';
  }

}
