import {Component, Input } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'todo-actionbar',
  templateUrl: './todo-actionbar.component.html',
  styleUrls: ['./todo-actionbar.component.scss']
})
export class TodoActionbarComponent {

  @Input()
  todos: Todo[];

  hasCompleted() {
    return this.todos.findIndex( t => t.done) !== -1;
  }
}
