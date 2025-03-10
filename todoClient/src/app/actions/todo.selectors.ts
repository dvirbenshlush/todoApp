import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TaskRequest } from '../models/task-request.model';
import { Task } from '../models/task.model';

export const selectTasks = createFeatureSelector<ReadonlyArray<Task>>('Tasks');
