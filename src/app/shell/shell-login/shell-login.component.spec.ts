import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellLoginComponent } from './shell-login.component';

describe('ShellLoginComponent', () => {
  let component: ShellLoginComponent;
  let fixture: ComponentFixture<ShellLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
