import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component';

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
        loadChildren: () => import('./prerequisites/prerequisites.module').then(m => m.PrerequisitesModule) 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
