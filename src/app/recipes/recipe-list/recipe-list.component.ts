import { Component } from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {Recipe} from "../recipe.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent,
    NgForOf
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {


  recipes:Recipe[]  = [

    new Recipe("recipe1" , "the description of recipe"
      ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xuEokb64MhGzkoJ3eaUSVOfWgnGmf9ej1gfSyVRO6ZcKenpnQPBxsPC&s=10" ),
    new Recipe("recipe2", "the description of recipe" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzqfzcGOLYOYW3QEVj7hyVpQVCc68AnvKfo-iDiJQjs3e5VBMVgZvX88&s=10" )
  ];

  constructor() {
  }

}
