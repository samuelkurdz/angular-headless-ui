import { Component, Input } from '@angular/core';

@Component({
  selector: 'headless-radio-group',
  templateUrl: './group.component.html',
})
export class RadioGroupComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() defaultOption: any;

}
