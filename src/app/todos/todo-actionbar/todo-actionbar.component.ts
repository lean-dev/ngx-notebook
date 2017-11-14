import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'todo-actionbar',
  templateUrl: './todo-actionbar.component.html',
  styleUrls: ['./todo-actionbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoActionbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
