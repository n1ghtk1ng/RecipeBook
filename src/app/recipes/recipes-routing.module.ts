
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuardService} from '../auth/auth-guard.service';

const recipeRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent,  canActivate: [AuthGuardService]},
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)   // forRoot() method is to be used only in the case of app.module.ts only
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuardService]
})

export class RecipesRoutingModule {
}
