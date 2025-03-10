import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { Component, Inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { SocketService } from '../../services/socket.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [
      MatLabel,
      FormsModule,
      MatFormField,
      MatInputModule,
      MatDialogModule
],
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent {
  task: Task = {
      title: '',
      isEditing: false,
      completed: false,
      priority: 'low',
      createdAt: new Date()
  };

  constructor(
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    private socketService: SocketService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
        console.log(data)
        this.task = { ...data }
    };
  }

  save() {
    if (this.data) {
    //   this.socketService.updateTask('test1', this.task)
      this.socketService.createTask(this.data)
    } else {
    }
  }

  close() {
    this.dialogRef.close();
  }
}
