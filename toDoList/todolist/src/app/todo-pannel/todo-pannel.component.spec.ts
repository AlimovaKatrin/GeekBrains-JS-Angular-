import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPannelComponent } from './todo-pannel.component';

describe('TodoPannelComponent', () => {
  let component: TodoPannelComponent;
  let fixture: ComponentFixture<TodoPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
