import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { RadioGroupComponent } from '../lib/group/group.component';

@Directive({
  selector: 'headlessRadioOption, [headlessRadioOption]',
  exportAs: 'headlessRadioOption'
})
export class RadioOptionDirective implements OnInit {

  /** add id attribute to radio-option, if decleared by users */
  @HostBinding('attr.id') @Input() id?: string;

  @HostBinding('attr.tabIndex') in = 0;
  @HostBinding('attr.role') get role() { return 'radio' }
  @HostBinding('class.headless-radio') 'headless-radio' = true;

  /** if true radioOption can not be selected */
  @HostBinding('class.disabled-headless-radio') @Input() disabled = false;
  /** fired when radioOption became active, $event:radioOption equals to selected instance of radioOption component */


  protected _checked = false;
  radioIndex!: number;
  radioGroup: RadioGroupComponent;

  /** tab active state toggle */
  @HostBinding('attr.aria-checked') @HostBinding('class.checked-headless-radio')
  get checked(): boolean {
    return this._checked;
  }

  set checked(active: boolean) {

    if (this._checked === active) {
      return;
    }

    if (this.disabled) {
      this._checked = false;
      return;
    }

    this._checked = active;

  }

  constructor(
    radioGroup: RadioGroupComponent,
    public ref: ElementRef,
  ) {
    this.radioGroup = radioGroup;
    this.radioGroup.addRadioOption(this);
  }


  ngOnInit(): void {
    const parentNode = this.ref.nativeElement.parentNode;
    this.radioIndex = Array.prototype.indexOf.call(parentNode.children, this.ref.nativeElement);
    if (this.radioGroup.checkedOptionIndex) {
      if (this.radioIndex === this.radioGroup.checkedOptionIndex) this.checked = true;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @HostListener('mousedown', ['$event']) onClick(event: any) {
    const parentNode = event.target.parentNode;
    const index = Array.prototype.indexOf.call(parentNode.children, event.target);

    if(this._checked) return;
    if (!this.disabled) this.radioGroup.keyNavActions(event, index);
  }

}
