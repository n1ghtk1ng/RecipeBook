/**
 * Created by aman on 4/10/17.
 */
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient ('apples' , 5),
    new Ingredient ('tomatoes' , 10)
  ];
  // ingredientAdded = new EventEmitter<Ingredient[]>();
  ingredientChanged = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>();

  initialize() {
    return this.ingredients.slice();
  }
  getIngredient (index: number) {
    return this.ingredients[index];
  }
  addIngredient (ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // this.ingredientAdded.emit(this.ingredients.slice());
    this.ingredientChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredient: Ingredient[]) {
    // ingredient.forEach( (ing) => {
    //   this.ingredients.push(ing);
    // });
    this.ingredients.push(...ingredient);
    // this.ingredientAdded.emit(this.ingredients.slice());
    this.ingredientChanged.next(this.ingredients.slice());
  }
  updateIngredient (index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
  deleteIngredient (index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
