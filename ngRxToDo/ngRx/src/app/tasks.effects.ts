import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TasksActionTypes, LoadCompleted } from './tasks.actions';
import { map, switchMap } from 'rxjs/operators';
import { dispatch } from 'rxjs/internal/observable/range';
import { TaskService } from './task.service';
import { Task } from './task';



@Injectable()
export class TasksEffects {
  constructor(private actions$: Actions, private service: TaskService) {}
//Эффекты перехватывают action и делают какое-то полезное действие, а reducer так же перехватывает action, но он меняет состояние
  @Effect( {dispatch: false}) tasks$ = this.actions$.pipe(
    ofType(TasksActionTypes.Load),
    switchMap(() => this.service.getAll()),
    map((tasks: Task[]) => new LoadCompleted(tasks)),
  )
}
