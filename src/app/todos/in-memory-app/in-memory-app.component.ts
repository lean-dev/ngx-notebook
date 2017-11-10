import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './in-memory-app.component.html',
  styleUrls: ['./in-memory-app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InMemoryAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
