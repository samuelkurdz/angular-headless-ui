import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { RadioGroupComponent } from '../lib/group/group.component';

@Directive({
  selector: 'headlessRadioOption, [headlessRadioOption]',
  exportAs: 'headlessRadioOption'
})
export class RadioOptionDirective {

  @HostBinding('attr.id') @Input() id?: string;
  @HostBinding('class.headless-radio') 'headless-radio' = true;

  /** if true radioOption can not be selected */
  @HostBinding('class.disabled-headless-radio') @Input() disabled = false;
  /** fired when radioOption became active, $event:radioOption equals to selected instance of radioOption component */
  @Output() selectRadioOption: EventEmitter<RadioOptionDirective> = new EventEmitter();


  protected _checked? = false;
  radioGroup: RadioGroupComponent;

    /** tab active state toggle */
    @HostBinding('class.checked-headless-radio')
    @Input()
    get checked(): boolean | undefined {
      return this._checked;
    }
  
    set checked(active: boolean | undefined) {

      if (this._checked === active) {
        return;
      }

      if (this.disabled) {
        this._checked = false;
        return;
      }
      
      if (active) this.selectRadioOption.emit(this);

      this._checked = active;

    }

  constructor(
    radioGroup: RadioGroupComponent,
  ) {
    this.radioGroup = radioGroup;
    this.radioGroup.addTab(this);
  }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @HostListener('click', ['$event']) onClick(event: any) {
      const parentNode = event.target.parentNode;
      const index = Array.prototype.indexOf.call(parentNode.children, event.target);

      if (!this.disabled) this.radioGroup.keyNavActions(event, index);
    }

}
