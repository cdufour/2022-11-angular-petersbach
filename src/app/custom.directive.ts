import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el: ElementRef) {
    console.log(this.el)
  }

  @HostListener('click') onClick() {
    //this.el.nativeElement.innerText = 'hacked !';
    this.el.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'pink';
  }

}
