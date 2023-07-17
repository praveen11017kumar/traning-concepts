import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlighterDirective } from './directives/highlighter.directive';

const commonComponents = [
  HighlighterDirective
];

@NgModule({
  declarations: [
    ...commonComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...commonComponents
  ]
 
})
export class SharedModule { }
