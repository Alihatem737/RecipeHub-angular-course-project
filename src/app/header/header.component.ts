import {Component, EventEmitter, Output} from '@angular/core';
import {DropdownDirectiveDirective} from "../Shared/dropdown-directive.directive";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DropdownDirectiveDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    protected readonly onselect = onselect;

   @Output() featureSelected = new EventEmitter<string>;
  onSelect(feature: string) {

    this.featureSelected.emit(feature);
  }

  constructor() {
  }
}
