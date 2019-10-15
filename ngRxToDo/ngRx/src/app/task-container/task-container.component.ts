import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../task';
import { ActivatedRoute } from '@angular/router';
import { range, Observable } from 'rxjs';
import { map, filter, pairwise, switchMap} from 'rxjs/operators';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-container',
  template: `<app-task [task] = "task | async"></app-task>`
})
export class TaskContainerComponent implements OnInit {
  private task: Observable<Task>

  constructor(
    private route: ActivatedRoute,
    private service: TaskService,
    ) {
   }

  ngOnInit() {
    this.task = this.route.params.pipe(
      switchMap((params) => this.service.get(params.id))
      );
  }
}
