import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.initialize();
    this.subscription = this.shoppingListService.ingredientChanged.subscribe(
      (ing: Ingredient[]) => {
        this.ingredients = ing;
      }
    );
  }
  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
  // onIngredientAdded(ingredient: Ingredient) {
  //   // this.ingredients.push(ingredient);
  // }

}
