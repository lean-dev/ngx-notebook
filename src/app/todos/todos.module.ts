import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { InMemoryAppComponent } from './in-memory-app/in-memory-app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoActionbarComponent } from './todo-actionbar/todo-actionbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodosRoutingModule
  ],
  declarations: [InMemoryAppComponent, TodoInputComponent, TodoListComponent, TodoItemComponent, TodoActionbarComponent]
})
export class TodosModule { }
