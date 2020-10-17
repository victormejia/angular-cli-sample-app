import { Directive } from '@angular/core';

@Directive({
  selector: '[abcNonNumeric]'
})
export class NonNumericDirective {

  constructor() { }

}
