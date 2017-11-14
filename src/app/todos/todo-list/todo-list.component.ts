import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent {

  @Input()
  todos: Todo[];

  deleteTodo(todo: Todo) {
    const ix = this.todos.indexOf(todo);   // Simple, but effective - we have all the same instances
    this.todos.splice(ix, 1);
  }
}
