
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../../core/services/tasks.service';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;
  isEditMode = false;
  taskId!: number;

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.taskId = +params['id'];
        this.tasksService.getTask(this.taskId).subscribe(task => {
          this.taskForm.patchValue(task);
        });
      }
    });
  }

  private initForm(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['TO_DO', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.invalid) {
      return;
    }

    if (this.isEditMode) {
      this.tasksService.updateTask(this.taskId, this.taskForm.value).subscribe(() => {
        this.router.navigate(['/tasks', this.taskId]);
      });
    } else {
      this.tasksService.createTask(this.taskForm.value).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}
