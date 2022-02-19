import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private elem: ElementRef) {
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.elem.nativeElement.style.textDecoration = 'underline';
    this.elem.nativeElement.style.fontStyle = 'bold';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.elem.nativeElement.style.textDecoration = 'none';
    this.elem.nativeElement.style.fontStyle = 'none';
  }

}
