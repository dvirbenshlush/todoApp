import { FormsModule } from '@angular/forms';
import { Task } from '../../../models/task.model';
import { Component, Inject } from '@angular/core';
import { CommandTypes } from '../../../models/enum.model';
import { MatInputModule } from '@angular/material/input';
import { SocketService } from '../../../services/socket.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog-command',
  standalone: true,
  imports: [
      MatLabel,
      FormsModule,
      MatFormField,
      MatInputModule,
      MatDialogModule
  ],
  templateUrl: './delete-dialog-command.component.html',
  styleUrls: ['./delete-dialog-command.component.scss']
})
export class DeleteDialogCommandComponent {
  task: Task = {
      title: '', 
      description: '',
      isEditing: false,
      completed: false,
      priority: 'low',
      createdAt: new Date()
  };
  title!: string;
  command!: CommandTypes;
  constructor(
    private dialogRef: MatDialogRef<DeleteDialogCommandComponent>,
    private socketService: SocketService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
        this.command = data.command;
        this.task = data;
        this.title = data;
    };
  }

  confirm() {
        this.socketService.deleteTask(this.title);
  }

  close() {
    this.dialogRef.close();
  }
}
