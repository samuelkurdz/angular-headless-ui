import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './group/group.component';
import { RadioOptionDirective } from './radio-option.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RadioGroupComponent,
    RadioOptionDirective
  ],
  exports: [
    RadioGroupComponent,
    RadioOptionDirective
  ]
})
export class UiRadioModule {}
