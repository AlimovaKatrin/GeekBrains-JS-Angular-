import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-pannel',
  templateUrl: './todo-pannel.component.html',
  styleUrls: ['./todo-pannel.component.scss']
})
export class TodoPannelComponent implements OnInit {
  @Input() tasksTags;
  @Output() saveNewTask = new EventEmitter();

  newTaskForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    tags: new FormControl('')
  });

  constructor() { }

  ngOnInit() {

  }
  
  onClick(e) {
    this.saveNewTask.emit(e.value)
  }

}
