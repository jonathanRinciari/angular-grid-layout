import { Directive, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[grid]'
})
export class GridContainerDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'main');
  }
}
