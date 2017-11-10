import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InMemoryAppComponent } from './in-memory-app.component';

describe('InMemoryAppComponent', () => {
  let component: InMemoryAppComponent;
  let fixture: ComponentFixture<InMemoryAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InMemoryAppComponent ]
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
});
