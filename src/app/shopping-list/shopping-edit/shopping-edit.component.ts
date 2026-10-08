import {Component, ElementRef, Input,  ViewChild} from '@angular/core';
import {Ingredient} from "../../Shared/ingredients.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {




  @ViewChild('nameinput') nameInputRef !: ElementRef;
  @ViewChild('amountinput') amountInputRef !: ElementRef;


  constructor(private slService : ShoppingListService) {
  }

  onAdditem() {

    const  ingname = this.nameInputRef.nativeElement.value;
    const ingamount = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingname , ingamount);

    this.slService.addIngredients(newIngredient);





  }
}
