import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { NonNumericDirective } from './directives/non-numeric.directive';



@NgModule({
  declarations: [AvatarComponent, NonNumericDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
