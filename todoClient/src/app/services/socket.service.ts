import { Injectable } from "@angular/core";
import { io, Socket } from "socket.io-client";
import { Observable } from "rxjs";
import { Task } from "../models/task.model";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io("http://localhost:5000"); // ודא שזו הכתובת הנכונה של השרת

    this.socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });
  }

  getTaskList(): Observable<any[]> {
    return new Observable((observer) => {
      this.socket.emit("getAllTasks"); 
      this.socket.on("taskList", (tasks) => observer.next(tasks));
    });
  }

  requestTaskEdit(taskId: string): Observable<boolean> {
    return new Observable((observer) => {
      this.socket.emit("taskEditRequest", taskId);
      this.socket.on("taskLocked", (lockedId) => {
        if (lockedId === taskId) observer.next(false);
      });
      this.socket.on("taskUnlocked", (unlockedId) => {
        if (unlockedId === taskId) observer.next(true);
      });
    });
  }

  updateTask(taskId: string, updatedTask: Task) {
    this.socket.emit("taskUpdate", taskId, updatedTask);
  }

  createTask(newTask: Task) {
    this.socket.emit("createTask", newTask);
  }

  onTaskUpdated(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on("taskUpdated", (updatedTask) => observer.next(updatedTask));
    });
  }

  deleteTask(taskId: string) {
    this.socket.emit("taskDelete", taskId);
  }

  onTaskDeleted(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on("taskDeleted", (taskId) => observer.next(taskId));
    });
  }
}
