import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { RadioOptionDirective } from '../radio-option.directive';

@Component({
  selector: 'headless-radio-group',
  template: `<ng-content></ng-content>`,
})
export class RadioGroupComponent {
  @Input() checkedOptionIndex!: number;
  @Output() changeRadio: EventEmitter<number> = new EventEmitter();
  @HostBinding('attr.role') get role() { return 'radiogroup' }

  radios: RadioOptionDirective[] = [];

  addRadioOption(radioOption: RadioOptionDirective): void {
    this.radios.push(radioOption);
  }

  keyNavActions(event: KeyboardEvent, index: number) {
    this.changeRadio.emit(index);
    this.radios.forEach((radio, radioIndex) => {
      radioIndex === index ? radio.checked = true : radio.checked = false
    })
  }

}
