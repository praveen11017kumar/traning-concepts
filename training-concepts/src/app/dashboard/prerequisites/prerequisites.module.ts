import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrerequisitesRoutingModule } from './prerequisites-routing.module';
import { JscriptsListComponent } from './jscripts-list/jscripts-list.component';


@NgModule({
  declarations: [
    JscriptsListComponent
  ],
  imports: [
    CommonModule,
    PrerequisitesRoutingModule
  ]
})
export class PrerequisitesModule { }
