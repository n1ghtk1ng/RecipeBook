import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './core/home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [

  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' } , // here we are implementing lazy loading by pointing (not loading) to the recipe module
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules })], // here second argument is used for preloading the lazy loaded routes
  // PreloadAllModules is used to load all the lazy routes
  exports: [RouterModule]
})

export class AppRoutingModule {
}
