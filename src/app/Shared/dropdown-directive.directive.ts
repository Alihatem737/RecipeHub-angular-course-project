import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
  standalone: true
})
export class DropdownDirectiveDirective {
@HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleopen(){
    this.isOpen = !this.isOpen;
  }
  constructor() {

  }

}
