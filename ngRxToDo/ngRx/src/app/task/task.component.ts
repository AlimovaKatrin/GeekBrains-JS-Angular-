import { Component, OnInit, Input } from '@angular/core';
import { Task, TaskStatus } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() public task: Task;
  constructor(
    private service: TaskService,
    private router: Router,
    private fb: FormBuilder,
    private location: Location) { }

  public onDelete(id: number) {
    this.service.delete(
      this.task.id)
      .subscribe(() => {
      })
      this.router.navigate(['/tasks']);
  }
  public onUpdate() {
    this.service.update(
      this.task.id,
      this.task)
      .subscribe(() => {
        this.router.navigate(['/tasks']);
      })
  }

  ngOnInit() {
  }

}
