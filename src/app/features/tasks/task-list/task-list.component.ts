
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../core/services/tasks.service';
import { Task } from '../../../core/models/task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasks$ = this.tasksService.getTasks();
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(id).subscribe(() => {
      this.tasks$ = this.tasksService.getTasks();
    });
  }
}
