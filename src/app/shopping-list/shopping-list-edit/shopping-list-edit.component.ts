import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  // ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editdItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editdItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    // const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    const newIngredient = new Ingredient(value.name, value.amount);
    // this.shoppingListService.ingredientAdded.emit(newIngredient);
    if (this.editMode === true ) {
      this.shoppingListService.updateIngredient(this.editdItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
      // this.ingredientAdded.emit(newIngredient);
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete () {
    this.shoppingListService.deleteIngredient(this.editdItemIndex);
    this.onClear();
  }
  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
