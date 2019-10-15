import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

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

  constructor(   private formbuilder: FormBuilder ) { }

  ngOnInit() {
    this.newTaskForm = this.formbuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl(''),
      tags: new FormControl('')
    });
  }
  
  onClick(e) {
    this.saveNewTask.emit(e.value)
  }

}