import { FormsModule } from '@angular/forms';
import { Task } from '../../../models/task.model';
import { Component, Inject } from '@angular/core';
import { CommandTypes } from '../../../models/enum.model';
import { MatInputModule } from '@angular/material/input';
import { SocketService } from '../../../services/socket.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-create-dialog-command',
  standalone: true,
  imports: [
      MatLabel,
      FormsModule,
      MatFormField,
      MatInputModule,
      MatDialogModule
  ],
  templateUrl: './create-dialog-command.component.html',
  styleUrls: ['./create-dialog-command.component.scss']
})
export class CreateDialogCommandComponent {
  // initiall task
  task: Task = {
      title: '', 
      description: '',
      isEditing: false,
      completed: false,
      priority: 'low',
      createdAt: new Date()
  };
  command!: CommandTypes;
  constructor(
    private dialogRef: MatDialogRef<CreateDialogCommandComponent>,
    private socketService: SocketService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
        this.command = data.command;
        this.task = data
    };
  }

  confirm() {
    this.socketService.createTask(this.task);
  }

  close() {
    this.dialogRef.close();
  }
}
