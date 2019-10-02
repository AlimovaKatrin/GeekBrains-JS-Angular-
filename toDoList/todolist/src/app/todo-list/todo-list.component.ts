import { Component, OnInit } from '@angular/core';
import { todosList } from '../todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todosList = todosList;
  constructor() { }

  ngOnInit() {

  }

  saveNewTask(e) {
    
    let newTask = {
      id:this.todosList[this.todosList.length-1].id+1,
      name: e.name,
      description: e.description,
      tags: e.tags,
      status: false,
      edit: false
    };
    this.todosList.push(newTask)
  }
}
