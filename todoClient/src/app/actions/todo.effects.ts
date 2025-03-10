import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from '../services/task.service';
import { TaskActions, TaskApiActions } from './todo.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TaskEffects {
    loadTaskHistory$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TaskActions.loadTaskHistory),
            mergeMap(() =>
            this.TaskService.getTaskHistory().pipe(
                map(task =>  {
                    return {...TaskApiActions.loadTasksSuccess({ task }), isEditing: false }
                }),
                catchError(error => of(TaskApiActions.loadTasksFailure({ error })))
            )
            )
        )
    });

    constructor(
        private actions$: Actions,
        private TaskService: TaskService
    ) {}
}
