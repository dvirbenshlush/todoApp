import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskActions } from '../../actions/todo.actions';
import { selectTasks } from '../../actions/todo.selectors';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SocketService } from '../../services/socket.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CreateDialogCommandComponent } from '../command-dialogs/create-dialog-command/create-dialog-command.component';
import { DeleteDialogCommandComponent } from '../command-dialogs/delete-dialog-command/delete-dialog-command.component';
import { EditDialogCommandComponent } from '../command-dialogs/edit-dialog-command/edit-dialog-command.component';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    TaskItemComponent
],
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<ReadonlyArray<Task>> = this.store.select(selectTasks);
  tasks: any[] = [];

  constructor(
    private socketService: SocketService,
    private dialog: MatDialog,
    private store: Store
    ) {}

  ngOnInit() {
    this.store.dispatch(TaskActions.loadTaskHistory());
    this.loadTasks();
  }

  loadTasks() {
    this.socketService.getTaskList().subscribe((tasks) => {
        console.log(tasks)
        this.tasks = tasks;
      });
    }

  openCreateTaskDialog(task?: Task | null) {
    const dialogRef = this.dialog.open(CreateDialogCommandComponent, {
      width: '400px',
      data: task 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadTasks();
      }
    });
  }

  openUpdateTaskDialog(task: Task) {
    const dialogRef = this.dialog.open(EditDialogCommandComponent, {
        width: '400px',
        data: task 
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.loadTasks();
        }
      });
  }
  
  deleteTask(task: Task) {
    const dialogRef = this.dialog.open(DeleteDialogCommandComponent, {
        width: '400px',
        data: task._id
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.loadTasks();
        }
      });
    }

  toggleTask(title: string, task: Task) {
    task.completed = !task.completed;
    this.socketService.updateTask(title, task);
  }
}
