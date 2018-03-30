import {Ingredient} from '../shared/ingredient.model';
/**
 * Created by aman on 9/9/17.
 */

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor (name: string, imagePath: string, description: string, ingredients: Ingredient[]) {
      this.name = name;
      this.description = description;
      this.imagePath = imagePath;
      this.ingredients = ingredients;
  }
}
