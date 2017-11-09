import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellHomeComponent } from './shell-home/shell-home.component';
import { ShellLoginComponent } from './shell-login/shell-login.component';

@NgModule({
  imports: [
    CommonModule,
    ShellRoutingModule
  ],
  declarations: [ShellHomeComponent, ShellLoginComponent]
})
export class ShellModule { }
