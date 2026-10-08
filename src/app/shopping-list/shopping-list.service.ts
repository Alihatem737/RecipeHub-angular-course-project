import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Orange', 3),
    new Ingredient('Berlin', 4)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsfromrecipe(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.addIngredients(ingredient);
    }
  }
}
