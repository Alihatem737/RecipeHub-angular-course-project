import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe.model";
import {DropdownDirectiveDirective} from "../../Shared/dropdown-directive.directive";
import {NgForOf} from "@angular/common";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    DropdownDirectiveDirective,
    NgForOf
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

  constructor(private recipeService: RecipeService,) {
  }

  @Input() recipe !: Recipe;

  addtoshoppinglist() {

    this.recipeService.addingredienttoshopping(this.recipe.ingredients)

  }
}
