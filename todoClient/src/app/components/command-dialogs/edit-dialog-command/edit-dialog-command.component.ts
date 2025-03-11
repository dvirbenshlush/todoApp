import { FormsModule } from '@angular/forms';
import { Task } from '../../../models/task.model';
import { Component, Inject } from '@angular/core';
import { CommandTypes } from '../../../models/enum.model';
import { MatInputModule } from '@angular/material/input';
import { SocketService } from '../../../services/socket.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog-command',
  standalone: true,
  imports: [
      MatLabel,
      FormsModule,
      MatFormField,
      MatInputModule,
      MatDialogModule
],
  templateUrl: './edit-dialog-command.component.html',
  styleUrls: ['./edit-dialog-command.component.scss']
})
export class EditDialogCommandComponent {
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
    private dialogRef: MatDialogRef<EditDialogCommandComponent>,
    private socketService: SocketService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
        this.command = data.command;
        this.task = data
    };
  }

  confirm() {
    this.socketService.updateTask(this.task._id, this.task);
  }

  close() {
    this.dialogRef.close();
  }
}
