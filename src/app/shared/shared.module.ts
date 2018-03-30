import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ DropdownDirective],
  exports: [
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule {

}

// every component or directive needs to be declared only once
// and the idea behind shared module is that we will be able to import this shared module into the other modules
// everything that we set up in a module is available in that module only
// to make some component or directive available form outside we need to explicitly export them like we do here in
// the case of dropdowndirective

// also here we need not import the commonmodule
// the place where we declare the component or directive , there we need not import the common module
