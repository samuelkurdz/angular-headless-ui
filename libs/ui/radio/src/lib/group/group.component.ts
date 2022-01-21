import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioOptionDirective } from '../radio-option.directive';

@Component({
  selector: 'headless-radio-group',
  template: `<ng-content></ng-content>`,
})
export class RadioGroupComponent {
  @Input() checkedOptionIndex!: number;
  @Output() changeRadio: EventEmitter<number> = new EventEmitter();

  radios: RadioOptionDirective[] = [];

  addTab(tab: RadioOptionDirective): void {
    this.radios.push(tab);
  }

  keyNavActions(event: KeyboardEvent, index: number) {
    this.changeRadio.emit(index);
    this.radios.forEach((radio, radioIndex) => {
      radioIndex === index ? radio.checked = true : radio.checked = false
    })
  }

}
