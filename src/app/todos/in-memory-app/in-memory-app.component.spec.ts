import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InMemoryAppComponent } from './in-memory-app.component';
import {TodoInputComponent} from '../todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';

describe('InMemoryAppComponent', () => {
  let component: InMemoryAppComponent;
  let fixture: ComponentFixture<InMemoryAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ InMemoryAppComponent, TodoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InMemoryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty todos array property', () => {
    expect(component.todos).toBeDefined();
    expect(component.todos.length).toBe(0);
  });
});
