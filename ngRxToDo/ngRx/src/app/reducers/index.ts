import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { tasksFeatureKey, reducer as tasksReducer, State as TaskState } from '../tasks.reducer';

export const stateFeatureKey = 'state';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  [tasksFeatureKey]: tasksReducer,

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

const selectTasks = (state: State) => state[tasksFeatureKey];
export const selectTasksLoading = createSelector(
  selectTasks,
  (state: TaskState) => state.loading,
);
export const SelectTasksEntities = createSelector(
  selectTasks,
  (state: TaskState) => state.entities,
);
