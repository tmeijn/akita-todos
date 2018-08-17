import { TodosService } from './../state/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  addTodo(input: HTMLInputElement) {
    this.todosService.add(input.value);
    input.value = '';
  }

}
