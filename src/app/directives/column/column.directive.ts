import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[col]'
})
export class ColumnDirective implements OnInit {
  @Input() col: string;
  className: string;
  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
  }

  ngOnInit() {
    this.renderer.addClass(this.hostElement.nativeElement, this.determineClass());
  }


  determineClass() {
    let className = '';
    switch (this.col) {
      case '1':
        className = 'one';
        break;
      case '2':
        className = 'two';
        break;
      case '3':
        className = 'three';
        break;
      case '4':
        className = 'four';
        break;
      case '5':
        className = 'five';
        break;
      case '6':
        className = 'six';
        break;
      case '7':
        className = 'seven';
        break;
      case '8':
        className = 'eight';
        break;
      case '9':
        className = 'nine';
        break;
      case '10':
        className = 'ten';
        break;
      case '11':
        className = 'eleven';
        break;
      case '12':
        className = 'twelve';
        break;
    }
    return className;
  }

}
