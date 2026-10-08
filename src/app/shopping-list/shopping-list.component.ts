import {Component, OnInit} from '@angular/core';
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {Ingredient} from "../Shared/ingredients.model";
import {NgForOf} from "@angular/common";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    ShoppingEditComponent,
    NgForOf
  ],

  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})

export class ShoppingListComponent implements OnInit{

  ingredients: Ingredient [] = [];

  constructor(private slService : ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

   onIngredeientadded(ingredient: Ingredient) {

    this.ingredients.push(ingredient);

  }
}
