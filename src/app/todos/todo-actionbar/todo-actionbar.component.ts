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

  hasCompleted(): boolean {
    return this.todos.findIndex( t => t.done) !== -1;
  }

  removeCompletedTodos() {
    // First data-flow issue: need to modify the current array! Not filtering to a new one ...
    this.todos.filter(t => t.done)
      .forEach( (t) => { this.todos.splice(this.todos.indexOf(t), 1); });
  }
}
