import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { on } from 'cluster';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() tasks;

  taskName = new FormControl('');
  taskDescription = new FormControl('')

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let oneTask = []

    if (!this.tasks) {
      oneTask.push(this.route.snapshot.paramMap.params)
      this.tasks = oneTask
    }
  }

  switchStatus(e) {
    this.tasks.forEach(element => {
      if (element.name === e.name && element.description === e.description && element.tag === e.tag) {
        element.status = !element.status
      }
    });
  }

  editTask(e) {
    this.tasks.forEach(element => {
      if (element.name === e.name && element.description === e.description && element.tag === e.tag) {
        element.edit = !element.edit
      }
    });
  }

  saveTask(e) {
    this.tasks.forEach(element => {
      if (element.name === e.name && element.description === e.description && element.tag === e.tag) {
        element.edit = !element.edit
        element.name = this.taskName.value;
        element.description = this.taskDescription.value
      }
    });
  }

}
