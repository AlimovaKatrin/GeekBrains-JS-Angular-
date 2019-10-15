import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';

import { Task } from '../interfaces/interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todosList = [];

  constructor(public rest: TaskService, public route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.params.id) {
      this.rest.get('tasks', this.route.snapshot.paramMap.params.id)
        .subscribe((e: Task) => {
          this.todosList.push(e)
        })

    } else {
      this.rest.getAll()
        .subscribe((e: Task[]) => {
          this.todosList = e
        })
    }
  }


  saveNewTask(e) {

    let newTask = {
      "id": this.todosList[this.todosList.length - 1].id + 1,
      "name": e.name,
      "description": e.description,
      "tags": e.tags,
      "status": false,
      "edit": false
    };
  
    this.rest.create('tasks', newTask)
      .subscribe((e: Task) => {
        console.log(e)
      })
  }
}
