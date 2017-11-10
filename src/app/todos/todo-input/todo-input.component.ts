import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoInputComponent {

  txt = '';

  @Output()
  todoEntered = new EventEmitter<string>();

  handleSubmit() {
    if (this.txt.trim().length > 0) {
      this.todoEntered.emit(this.txt);
      this.txt = '';
    }
  }
}
