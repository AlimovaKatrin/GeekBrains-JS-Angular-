import { Action } from '@ngrx/store';
import { TasksActionTypes, TasksActions } from './tasks.actions';
import { Task } from './task';


export const tasksFeatureKey = 'tasks';

export interface State {
  loading: boolean;
  entities: Task[];
  error?: any;
}

export const initialState: State = {
  loading: false,
  entities: []
};

export function reducer(state = initialState, action: TasksActions): State {
  switch (action.type) {
    case TasksActionTypes.Load:
      return {
        ...state,
        loading: true,
      };
      case TasksActionTypes.LoadCompleted:
        console.log(action);
        return {
          ...state,
          loading: false,
          entities: action.payload,
        };
        case TasksActionTypes.LoadFailed:
          return{
            ...state,
            loading: false,
            entities: [],
            error: action.payload
          }
    default:
      return state;
  }
}
