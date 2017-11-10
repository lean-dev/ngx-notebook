import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InMemoryAppComponent } from './in-memory-app/in-memory-app.component';

const routes: Routes = [
  { path: 'todos', component: InMemoryAppComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
