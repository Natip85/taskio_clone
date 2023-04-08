import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ProjectsModule } from '../projects/projects.module';
import { TasksModule } from '../tasks/tasks.module';
import { RouterLink } from '@angular/router';



@NgModule({
    declarations: [
        ButtonComponent,
        SectionTitleComponent,
        HomePageComponent,
    ],
    imports: [
        CommonModule,
        ProjectsModule,
        TasksModule,
        RouterLink
    ],
    exports: [
        ButtonComponent,
        SectionTitleComponent,
        HomePageComponent,
    ]
})
export class HomeModule { }
