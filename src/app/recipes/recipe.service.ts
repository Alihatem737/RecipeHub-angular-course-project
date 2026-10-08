import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../Shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeselected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [

    new Recipe(
      'recipe1',
      'the description of recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xuEokb64MhGzkoJ3eaUSVOfWgnGmf9ej1gfSyVRO6ZcKenpnQPBxsPC&s=10',
      [
        new Ingredient('meat', 1),
        new Ingredient('fries', 4)
      ]
    ),

    new Recipe(
      'recipe2',
      'the description of recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzqfzcGOLYOYW3QEVj7hyVpQVCc68AnvKfo-iDiJQjs3e5VBMVgZvX88&s=10',
      [
        new Ingredient('buns', 2),
        new Ingredient('meat', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getrecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addingredienttoshopping(ingredients: Ingredient[]) {
    this.slService.addIngredientsfromrecipe(ingredients);
  }
}
