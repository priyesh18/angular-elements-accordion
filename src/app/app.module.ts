import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'

import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AccordionComponent]
})
export class AppModule { 

  constructor(injector: Injector) {
    const acc = createCustomElement(AccordionComponent, { injector });
    customElements.define('custom-accordion',acc);
  }
  ngDoBootstrap() {}
}
