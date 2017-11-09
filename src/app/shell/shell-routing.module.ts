import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShellHomeComponent} from './shell-home/shell-home.component';

const routes: Routes = [
  { path: '', component: ShellHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
