import { Action } from '@ngrx/store';
import { Task } from './task';

export enum TasksActionTypes {
  Load = '[Tasks] Load Tasks',
  LoadCompleted = '[Tasks] Load Completed',
  LoadFailed = '[Tasks] Load Failed'


}

export class Load implements Action {
  readonly type = TasksActionTypes.Load;
}

export class LoadCompleted implements Action {
  readonly type = TasksActionTypes.LoadCompleted;

  constructor(public payload: Task[]) {}
}

export class LoadFailed implements Action {
  readonly type = TasksActionTypes.LoadFailed;

  constructor(public payload: Task[]) {}
}


export type TasksActions = Load | LoadCompleted | LoadFailed;
