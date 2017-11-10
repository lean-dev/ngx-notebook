import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  constructor() { }

  ngOnInit() {
  }

}
