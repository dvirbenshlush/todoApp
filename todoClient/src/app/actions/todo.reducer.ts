import { createReducer, on } from '@ngrx/store';
import { Task } from '../models/task.model';
import { TaskActions, TaskApiActions } from './todo.actions';

// Initial state for Tasks and cart
export const initialTasksState: ReadonlyArray<Task> = [];
export const initialCartState: ReadonlyArray<Task> = [];
export const taskHistory: ReadonlyArray<Task> = [];

// Reducer for Tasks (fetched from API)
export const tasksReducer = createReducer(
    taskHistory,
    on(TaskApiActions.loadTasksSuccess, (state, { task }) => {
        return task.map(t => ({ ...t, isEditing: false }));
    }),
    on(TaskApiActions.loadTasksFailure, (state, { error }) => {
    console.error('Failed to load Tasks:', error);
    return state;
    }),
    on(TaskActions.updateTask, (state, { taskId, updatedTask }) => {
        return state.map(t => t.title === taskId ? updatedTask : t);
      }),
);
