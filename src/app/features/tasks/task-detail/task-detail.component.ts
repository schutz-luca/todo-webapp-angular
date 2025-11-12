
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../../core/services/tasks.service';
import { Task } from '../../../core/models/task.model';
import { Observable } from 'rxjs';
import { taskStatusFormatter } from 'src/app/utils/task-status.formatter';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task$!: Observable<Task>;
    taskStatusFormatter = taskStatusFormatter;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.task$ = this.tasksService.getTask(+params['id']);
      }
    });
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(id).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
}
