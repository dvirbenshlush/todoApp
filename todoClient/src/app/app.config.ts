import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { tasksReducer } from './actions/todo.reducer';
import { provideEffects } from '@ngrx/effects';
import { TaskEffects } from './actions/todo.effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({
      tasks: tasksReducer, 
    }),
    provideHttpClient(),
    provideEffects([TaskEffects]), provideAnimationsAsync()
],
};