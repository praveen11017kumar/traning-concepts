import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component';
import { InterviewQuesComponent } from './interview-ques/interview-ques.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'prerequite-jscript',
        pathMatch:'full'
      },
      { 
        path: 'prerequite-jscript', 
        loadChildren: () => import('./prerequisites/prerequisites.module').then(m => m.PrerequisitesModule),
        canActivateChild:[AuthGuard] 
      },
      { 
        path: 'users', 
        loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
        canActivateChild:[AuthGuard] 
      },
      {
        path:'interview-ques', 
        component: InterviewQuesComponent, 
        canActivateChild: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
