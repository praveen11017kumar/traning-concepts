import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }


  @HostListener("mouseenter") onMouseEnter() {
    this.highlight('orange');
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
