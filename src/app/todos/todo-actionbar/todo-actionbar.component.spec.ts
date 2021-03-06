import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoActionbarComponent } from './todo-actionbar.component';

describe('TodoActionbarComponent', () => {
  let component: TodoActionbarComponent;
  let fixture: ComponentFixture<TodoActionbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoActionbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoActionbarComponent);
    component = fixture.componentInstance;
    component.todos = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should determine the correct hasCompleted() value', () => {
    expect(component.hasCompleted()).toBe(false);
  });
});
