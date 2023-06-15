import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JscriptsListComponent } from './jscripts-list/jscripts-list.component';

const routes: Routes = [
  {path:'', redirectTo:'jscript', pathMatch:'full'},
  {path:'jscript', component: JscriptsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrerequisitesRoutingModule { }
