import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './group/group.component';
import { LabelComponent } from './label/label.component';
import { RadioOptionDirective } from './radio-option.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RadioGroupComponent,
    LabelComponent,
    RadioOptionDirective
  ],
  exports: [
    RadioGroupComponent,
    LabelComponent,
    RadioOptionDirective
  ]
})
export class UiRadioModule {}
