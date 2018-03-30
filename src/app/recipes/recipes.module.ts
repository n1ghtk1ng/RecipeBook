import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [RecipesComponent,
    RecipeStartComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
  ],
  imports: [
    CommonModule, // this is always to be imported for any feature module
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})  // by using NgModule Decorator we are able to transform our simple typescript class into a module

export class RecipesModule {

}

// we must not duplicate our declarations e.g. using DropdownDirective in 2 modules
// but we can import one service in many modules, one module in many modules etc..
