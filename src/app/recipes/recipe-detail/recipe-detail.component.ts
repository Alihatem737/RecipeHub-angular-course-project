import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe.model";
import {DropdownDirectiveDirective} from "../../Shared/dropdown-directive.directive";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    DropdownDirectiveDirective
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

  @Input() recipe !: Recipe;

}
