import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[nomena_walker]',
  standalone: true
})
export class BorderCardDirective {

  constructor(private el:ElementRef) {
    this.setBorder("rouge")
   }
  @HostListener('mouseleave') onMouseEnter() {
    this.setBorder("rouge")
  }
   private setBorder(el:string):void {
    console.log("mande le raha")
    console.log(el)
   }
}
