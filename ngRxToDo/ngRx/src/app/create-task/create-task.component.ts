import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskStatus } from '../task';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  public title: string = '';
  private taskForm: FormGroup;
  constructor(
    private service: TaskService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  onCreate(): void {
    this.service.create({
      title: this.taskForm.value.title,
      status: TaskStatus.Uncompleted,
    }).subscribe(() => {
      this.router.navigate(['/tasks']);
    } )
  }

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }


}
