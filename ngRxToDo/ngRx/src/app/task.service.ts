import { Injectable } from '@angular/core';
import { ApiService, GenericService } from './api.service';
import { Task, TaskStatus } from './task'
import { Observable, BehaviorSubject } from 'rxjs';
// import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements GenericService<Task> {
  private _tasks: BehaviorSubject<Task[]> = new  BehaviorSubject([]);
  public readonly tasks: Observable<Task[]> = this._tasks.asObservable();

  constructor(private api: ApiService<Task>) {
    this.getAll().subscribe((tasks: Task[]) => {
      this._tasks.next(tasks);

    })
  }

  getAll(): Observable<Task[]> {
    return this.api.getAll('tasks');
  }

  create(task: Partial<Task>): Observable<Task> {
    const response$ = this.api.create('tasks', task)
    response$ .subscribe((savedTask: Task) => {
      const prevTasks = this._tasks.getValue();
      this._tasks.next(prevTasks.concat([savedTask]))
    });
    return response$;
  }

  get(id: number): Observable<Task> {
    return this.api.get('tasks', id);
  }

  update(id: number, task: Partial<Task>): Observable<Task> {
    const response$ = this.api.update('tasks', id, task);
    response$.subscribe((updateTask: Task)=> {
      let prevTask = this._tasks.getValue()
      prevTask.forEach((item, index) => {
        if (item.id === id) {
          updateTask.status = TaskStatus.Completed;
          prevTask.splice(index, 1, updateTask);
        }
      });
      this._tasks.next(prevTask);
    })
   return response$;
  }

  delete(id: number): Observable<Task> {
    const response$ = this.api.delete('tasks', id)
    response$ .subscribe(()=> {
      let prevTasks = this._tasks.getValue();
      prevTasks.forEach( (item, index) => {
        if(item.id === id) {
          prevTasks.splice(index, 1)
        }
      });
      this._tasks.next(prevTasks);
    });
    return response$;
  }
}
