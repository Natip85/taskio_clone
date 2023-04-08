import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { LoggerService } from 'src/app/core/logger.service';
import { Project, Task } from '../../app.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    today = new Date();
    sectionTitle1 = 'Today\'s Tasks';
    sectionTitle2 = 'My Projects';

    constructor(
        private api: ApiService,
        private logger: LoggerService
    ) { }

    ngOnInit(): void {
        // this.api.getUserPosts().subscribe({
        //     next: (data) => this.logger.log(data.toString()),
        //     error: (err) => console.log(err)
        // })
    }

    projects: Array<Project> = [
        {
            title: 'my first project',
            description: 'such an awesome project, I am sure it would be a huge success.',
            image: 'https://cdn.pixabay.com/photo/2023/02/20/07/26/problem-7801590__340.jpg',
            status: 'PLANNED'
        },
        {
            title: 'Art project',
            description: 'because I love creating art',
            image: 'https://cdn.pixabay.com/photo/2016/06/25/12/55/art-1478831__340.jpg',
            status: 'IN PROGRESS'
        }
    ]

    tasks: Array<Task> = [
        {
            title: 'Your first task',
            complete: false,
            description: 'aaa'
        },
        {
            title: 'A second task',
            complete: false,
        },
        {
            title: 'Another task',
            complete: false,
        },
        {
            title: 'Task #4',
            complete: true
        }
    ]

    listStatusCss(): string {
        return this.tasks.length <= 3 ? 'text-success' : 'text-dark';
    }

    completedCss(task: Task): string {
        return task.complete ? 'text-decoration-line-through' : '';
    }

    getImagePath(): string {
        return "https://cdn.pixabay.com/photo/2023/02/06/01/14/superb-fairywren-7770904__340.jpg";
        console.log('test');

    }
}
