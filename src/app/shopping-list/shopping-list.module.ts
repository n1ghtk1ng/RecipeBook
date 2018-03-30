import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingListEditComponent} from './shopping-list-edit/shopping-list-edit.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
  ]
})

export class ShoppingListModule {

}
// for shoppingList routing we are not creating separate routing module
// this is because for a component or a directive we need to provide in the declarations array of the module in which we
// are using it or we need to import it from the shared module
// however this is not the case with the routes
// for routing we need to make sure that the component that we load in that route is declared somewhere
