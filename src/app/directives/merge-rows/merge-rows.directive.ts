import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[rows]'
})
export class MergeRowsDirective implements OnInit {
  @Input() rows: string;
  className: string;
  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
  }

  ngOnInit() {
    this.renderer.addClass(this.hostElement.nativeElement, this.determineClass());
  }

  determineClass() {
    let className = '';

    switch (this.rows) {
      case '2':
        className = 'merge-two-rows';
        break;
      case '3':
        className = 'merge-three-rows';
        break;
      case '4':
        className = 'merge-four-rows';
        break;
      case '5:':
        className = 'merge-five-rows';
        break;
      case '6:':
        className = 'merge-six-rows';
        break;
    }
    return className;
  }
}
