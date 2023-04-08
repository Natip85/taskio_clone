import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './task-page/task-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksDashboardComponent } from './tasks-dashboard/tasks-dashboard.component';



@NgModule({
    declarations: [
        TaskPageComponent,
        TasksDashboardComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
      TasksDashboardComponent
    ]
})
export class TasksModule { }
