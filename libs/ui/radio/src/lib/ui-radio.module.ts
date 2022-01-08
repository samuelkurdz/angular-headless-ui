import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './group/group.component';
import { LabelComponent } from './label/label.component';
import { OptionComponent } from './option/option.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RadioGroupComponent,
    LabelComponent,
    OptionComponent
  ],
  exports: [
    RadioGroupComponent,
    LabelComponent,
    OptionComponent
  ]
})
export class UiRadioModule {}
