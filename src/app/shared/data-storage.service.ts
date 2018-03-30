import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {RecipeService} from "../recipes/recipe.service";
import {Response} from '@angular/http';
import {Recipe} from "../recipes/recipe.model";
import 'rxjs/Rx';
import {AuthService} from "../auth/auth.service";
@Injectable ()
export class DataStorageService {
  constructor (private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes () {
    const token = this.authService.getToken();
    return this.http.put('https://myrecipeproject-de485.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes());
  }
  getRecipes () {
    const token = this.authService.getToken();
     this.http.get('https://myrecipeproject-de485.firebaseio.com/recipes.json?auth=' + token).map(
       (response: Response) => {
         const recipes: Recipe[] = response.json();

         for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
         }
         return recipes;
       }
     ).subscribe(
      (recipes: Recipe[]) => {
        // const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
