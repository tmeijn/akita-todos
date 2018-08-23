import { TodoComponent } from './todos/todo.component';
import { TodosComponent } from './todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosPageComponent } from './todos/todos-page/todos-page.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos'
  },
  {
    path: 'todos',
    component: TodosPageComponent
  }
];

@NgModule({
  declarations: [TodosPageComponent, TodosComponent, TodoComponent],
  imports: [RouterModule.forRoot(routes), CommonModule, ReactiveFormsModule, BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
