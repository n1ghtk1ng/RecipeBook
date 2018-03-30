/**
 * Created by aman on 4/10/17.
 */
import {Recipe } from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  // recipeWasSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe ('A Test Recipe', 'http://i.ndtvimg.com/i/2016-06/indian-food-625_625x350_71467111221.jpg',
      'Makhani Dal',
      [new Ingredient ('Dal', 100),
        new Ingredient ('Kidney Beans', 100)
      ]),
    new Recipe ('A Test Recipe', 'http://www.freepngimg.com/download/burger/1-2-burger-transparent.png',
      'Cheese Burger',
      [new Ingredient ('Bun', 100),
        new Ingredient ('Cheese', 100)
      ])
  ];
  constructor (private shoppingListService: ShoppingListService) {}

  setRecipes (recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes () {
    return this.recipes.slice(); // returns copy of the above recipes array
  }
  AddToShopping (ingredients) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe (id: number) {
    return this.recipes[id] ;
  }
  addRecipe (recipe: Recipe ) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe (index: number, newrecipe: Recipe) {
    this.recipes[index] = newrecipe;

    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe (index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
