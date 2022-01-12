import { Component } from '@angular/core';
import { RadioOptionDirective } from '../radio-option.directive';

@Component({
  selector: 'headless-radio-group',
  template: `<ng-content></ng-content>`
})
export class RadioGroupComponent {
  radios: RadioOptionDirective[] = [];

  addTab(tab: RadioOptionDirective): void {
    this.radios.push(tab);
  }

  keyNavActions(event: KeyboardEvent, index: number) {
    this.radios.forEach((radio, radioIndex) => {
      radioIndex === index ? radio.checked = true : radio.checked = false
    })
  }

}
