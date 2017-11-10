import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputComponent } from './todo-input.component';
import { FormsModule } from '@angular/forms';

describe('TodoInputComponent', () => {
  let component: TodoInputComponent;
  let fixture: ComponentFixture<TodoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TodoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Isolated unit tests

  it('should fire a todo-entered event on creating a new todo', (done) => {
    spyOn(component.todoEntered, 'emit').and.callThrough();

    component.txt = 'Isolate unit tests';
    component.todoEntered.subscribe( txt => done());
    component.handleSubmit();

    expect(component.todoEntered.emit).toHaveBeenCalled();
  });

  it('it must not fire the event on empty-or-whitespace todo text', () => {
    spyOn(component.todoEntered, 'emit');

    component.txt = '';
    component.handleSubmit();
    component.txt = '     ';
    component.handleSubmit();

    expect(component.todoEntered.emit).not.toHaveBeenCalled();
  });

  it('should reset the txt property after creating a new todo', () => {
    component.txt = 'Isolate unit tests';
    component.handleSubmit();
    expect(component.txt).toBe('');
  });
});
