import { Component, ViewEncapsulation, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'custom-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AccordionComponent  {
  @Input() icon = 'arrow';
  @ViewChild("el", {read: ElementRef}) el: ElementRef;

  constructor() { }

  toggleHelper() {
    this.el.nativeElement.classList.toggle("active");
    var panel = this.el.nativeElement.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
  }
 
}
