/**
 * Created by aman on 3/10/17.
 */
import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false; // class is an array of all classes
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
