import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
