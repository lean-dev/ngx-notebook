import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input()
  todo: Todo;

  @Output()
  todoDeleted = new EventEmitter<Todo>();

  deleteTodo() {
    this.todoDeleted.emit(this.todo);
  }
}
