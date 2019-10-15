import { Component } from '@angular/core';
import { Task, TaskStatus, TaskPriority } from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList';


  public onTaskClick(task: Task) {
    console.log(task);
  }
}
