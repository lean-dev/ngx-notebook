import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { InMemoryAppComponent } from './in-memory-app/in-memory-app.component';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  declarations: [InMemoryAppComponent, TodoComponent]
})
export class TodosModule { }
