import { Component } from '@angular/core';
import { Task } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-tasks-dashboard',
  templateUrl: './tasks-dashboard.component.html',
  styleUrls: ['./tasks-dashboard.component.scss']
})
export class TasksDashboardComponent {

   currentDate = Date.now()

   tasks: Array<Task> = []

    constructor(private api: ApiService) { }

    tasksTotal = 0

    getTasks() {
        this.api.getTasks().subscribe({
            next: (data: Array<Task>) => {
                this.tasks = data;
                this.tasksTotal = data.length

            },
            error: (err) => console.log(err)
        })
    }

    ngOnInit(): void {
        this.getTasks();
    }

    onDelete(task: Task) {
        if (!task._id) {
            return;
        }

        var userConfirmed = confirm(`Are you sure you want to remove the following task? \n "${task.title}"`)

    if(userConfirmed){
       this.api.deleteTask(task._id).subscribe({
            next: (data: Task) => {
                this.getTasks();
            },
            error: (err) => console.log(err)
        })
    }


    }

    completedCss(task: Task): string {

        return task.complete ? 'text-decoration-line-through text-success' : '';
    }

    onComplete(task: Task) {
        if (!task._id) {
            return;
        }

        this.api.updateTask(
            task._id,
            { complete: true }
        ).subscribe({
            next: (data: Task) => {
                this.getTasks();
            },
            error: (err) => console.log(err)
        })
    }

    undoComplete(task: Task){
       if (!task._id) {
            return;
        }

        this.api.updateTask(
            task._id,
            { complete: false }
        ).subscribe({
            next: (data: Task) => {
                this.getTasks();
            },
            error: (err) => console.log(err)
        })
    }

    showProgressBar(){
      return this.tasks.length > 0 ? this.tasks.length: ''
    }

progressStyle(tasks: any): any{
  const myLength: number = tasks.length
  const myCompletedTasks = tasks.filter((item:any)=> item.complete == true)
  const temp = myLength / myCompletedTasks.length
  const myAv = 100 / temp
  return `${Math.round(myAv)}`
}

progressClass(): string{
  const myAv = this.progressStyle(this.tasks)
  console.log(myAv);
  return myAv > 60 ? 'bg-success' : 'bg-warning'

}

}
