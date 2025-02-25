import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownHover]',
  standalone: true
})
export class DropdownHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'show');
    this.renderer.addClass(this.el.nativeElement.querySelector('.dropdown-menu'), 'show');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'show');
    this.renderer.removeClass(this.el.nativeElement.querySelector('.dropdown-menu'), 'show');
  }
}