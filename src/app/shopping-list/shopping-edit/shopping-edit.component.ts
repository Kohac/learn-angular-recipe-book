import {
  ViewChild,
  Component,
  OnInit,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInputRef', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInputRef', { static: false }) amountInputRef: ElementRef;

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.shoppingListService.addIngredient(newIngredient);
  }

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}
}
