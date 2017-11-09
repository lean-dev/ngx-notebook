import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShellHomeComponent} from './shell-home/shell-home.component';
import {ShellLoginComponent} from './shell-login/shell-login.component';

const routes: Routes = [
  { path: '', component: ShellHomeComponent},
  { path: 'login', component: ShellLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
