import {Component, OnDestroy, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs/Subscription";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  // = [
  //   new Recipe ('A Test Recipe', 'http://i.ndtvimg.com/i/2016-06/indian-food-625_625x350_71467111221.jpg', 'This is simply a Test'),
  //   new Recipe ('A Test Recipe', 'http://i.ndtvimg.com/i/2016-06/indian-food-625_625x350_71467111221.jpg', 'This is simply a Test')
  // ];
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   this.subscription = this.recipeService.recipesChanged.subscribe(
    (recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe () {
    this.router.navigate(['new'], {relativeTo: this.route} );
  }
  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
