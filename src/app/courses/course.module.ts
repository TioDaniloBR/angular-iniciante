import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { CourseListComponent } from 'src/app/courses/course-list.component';
import { CourseInfoComponent } from 'src/app/courses/course-info.component';
import { StarModule } from 'src/app/shared/component/star/star.module';
import { AppPipeModule } from 'src/app/shared/pipe/app-pipe.module';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule {

}
