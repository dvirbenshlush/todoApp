import { DatePipe } from '@angular/common';
import { Task } from '../../models/task.model';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
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
  @Input() task!: Task;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
}
