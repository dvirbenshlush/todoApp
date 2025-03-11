import { DatePipe } from '@angular/common';
import { Task } from '../../models/task.model';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { TaskService } from '../../services/task.service';
import { SocketService } from '../../services/socket.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    DatePipe,
    MatCheckbox,
    MatIconModule,
    MatExpansionModule
  ],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  userId = localStorage.getItem('currentUserEmail')?.split('@')[0] || '';
  @Input() task!: Task;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  constructor(private socketService: SocketService) {
    this.socketService.onTaskLocked().subscribe((data) => {
        if (this.task._id === data.taskId) {
          this.task.lockedBy = data.userId;
        }
      });
  
      this.socketService.onTaskUnlocked().subscribe((data) => {
        if (this.task._id === data.taskId) {
          this.task.lockedBy = undefined;
        }
      });
  }

  startEditing() {
    if (!this.task.lockedBy) {
      this.socketService.lockTask(this.task._id, this.userId);
      this.edit.emit();
    }
  }

  finishEditing() {
    if (this.task.lockedBy === this.userId) {
      this.socketService.unlockTask(this.task._id);
    }
  }

  deleteTask() {
    this.delete.emit();
    this.socketService.unlockTask(this.task._id); // שחרור הנעילה אוטומטית במחיקה
  }
}
