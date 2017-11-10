import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { InMemoryAppComponent } from './in-memory-app/in-memory-app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';

@NgModule({
  imports: [
    FormsModule,
    TodosRoutingModule
  ],
  declarations: [InMemoryAppComponent, TodoInputComponent]
})
export class TodosModule { }
