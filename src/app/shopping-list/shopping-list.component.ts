import { Component } from '@angular/core';
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {Ingredient} from "../Shared/ingredients.model";
import {NgForOf} from "@angular/common";

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
export class ShoppingListComponent {

  ingredients: Ingredient [] = [
    new Ingredient ("Apples" , 4),
    new Ingredient ("Orange" , 3),
    new Ingredient ("Berlin" , 4),


  ]

  constructor() {
  }

}
