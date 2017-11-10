import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Todo} from '../model/todo';

@Component({
  selector: 'todo-app',
  templateUrl: './in-memory-app.component.html',
  styleUrls: ['./in-memory-app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InMemoryAppComponent implements OnInit {

  todos: Todo[] = [];
  private lastId = 0;

  constructor() { }

  ngOnInit() {
  }

  createTodo(txt: string) {
    const todo: Todo = { id: ++this.lastId, txt: txt, done: false};
    this.todos.push(todo);
  }
}
