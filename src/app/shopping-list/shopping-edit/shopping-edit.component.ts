import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../Shared/ingredients.model";

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

  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  onAdditem() {

    const  ingname = this.nameInputRef.nativeElement.value;
    const ingamount = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingname , ingamount);

    this.ingredientAdded.emit(newIngredient);




  }
}
