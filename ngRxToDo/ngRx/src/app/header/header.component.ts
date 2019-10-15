import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private uncompletedCount = 0;

  constructor(private service: TaskService) { }

  ngOnInit() {
    this.service.tasks.subscribe((tasks: Task[]) => {
      this.uncompletedCount = tasks.reduce((count: number, task: Task)=> {
        if ( task.status === 0 ) {
          return count + 1;
        }
        return count;
      } , 0);

    });
  }

}
