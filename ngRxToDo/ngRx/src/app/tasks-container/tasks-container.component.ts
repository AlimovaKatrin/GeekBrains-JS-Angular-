import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus, TaskPriority } from '../task';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State, SelectTasksEntities, selectTasksLoading } from '../reducers';
import { Load } from '../tasks.actions';

@Component({
  selector: 'app-tasks-container',
  template: `<app-tasks-list *ng-If = "loading | async"[tasks] = " tasks$ | async " ></app-tasks-list>
  <div *ngIf = "loading">Loading</div>`,
})
export class TasksContainerComponent implements OnInit {
  private tasks: Observable<Task[]>;
  private loading: Observable<boolean>;
  constructor(
    private service: TaskService,
    private store: Store<State>) { }

  ngOnInit() {
    this.tasks = this.service.tasks;
    this.store.dispatch(new Load());
    this.tasks = this.store.pipe(select(SelectTasksEntities));
    this.store.pipe(select(selectTasksLoading)).subscribe((result) => {
      this.loading = result;
    })
  }

}
