import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";
import { HttpClient } from "@angular/common/http";
import { ApiResponse } from "../models/api-response.model";
import { environment } from "../../environments/environments";

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = `${environment['server_url']}/api/`;

  constructor(private http: HttpClient) {}

  getTaskHistory(): Observable<Array<Task>> {
    return this.http.get<Task[]>(this.apiUrl + 'tasks');
  }

  createTask(Task: Task): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl + 'Tasks/CreateTask', Task);
  }

  updateTask(Task: Task): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl + 'Tasks/UpdateTask', Task);
  }

  deleteTask(TaskDate: Date): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}Tasks/DeleteTask?TaskDate=${TaskDate}`);
  }
}
