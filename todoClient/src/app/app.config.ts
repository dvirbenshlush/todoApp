import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { TaskEffects } from './actions/todo.effects';
import { tasksReducer } from './actions/todo.reducer';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({
      tasks: tasksReducer, 
    }),
    provideRouter(routes),
    provideHttpClient(),
    provideEffects([TaskEffects]), provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
],
};