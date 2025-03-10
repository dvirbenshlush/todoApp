import { Task } from '../models/task.model';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const TaskActions = createActionGroup({
    source: 'Task',
    events: {
      'Deposit Task': props<{ task: Task }>(),
      'Withdrawal Task': props<{ task: Task }>(),
      'Remove Task': props<{ taskId: string }>(),
      'Update Task': props<{ taskId: string; updatedTask: Task }>(),
      'Load Task History': emptyProps(),
    },
});

export const TaskApiActions = createActionGroup({
  source: 'Task API',
  events: {
    'Load Tasks Success': props<{ task: Task[] }>(),
    'Load Tasks Failure': props<{ error: string }>(),
  },
});
