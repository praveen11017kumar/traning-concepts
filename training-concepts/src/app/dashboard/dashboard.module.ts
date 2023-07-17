import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard-component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { InterviewQuesComponent } from './interview-ques/interview-ques.component';
import { CourseCardComponent } from './interview-ques/course-card/course-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    InterviewQuesComponent,
    CourseCardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
