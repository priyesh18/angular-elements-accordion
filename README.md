## Accordion web component made using angular elements

This component was made as a part of the tutorial. It can be directly used in any framework or vanilla js.  
[Tutorial link](https://blog.bitsrc.io/creating-a-reusable-accordion-component-that-works-anywhere-2f2add05baa4)  
[Demo]( https://priyesh18.github.io/angular-elements-accordion/)  
Import the elements.js in the scripts tag.
use the 
    `<custom-accordion><span slot="header">My header</span>
            <span slot="details">My content</span></custom-accordion>`

### To edit and build your on version
1. Clone this repository
2. Run `npm install`
3. To build `ng build --prod --output-hashing=none`
1. To make a package `cat dist/accordion/{runtime,polyfills,scripts,main}.js > elements.js`
