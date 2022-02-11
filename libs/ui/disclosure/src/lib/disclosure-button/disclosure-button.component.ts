import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { DisclosureComponent } from '../disclosure/disclosure.component';

@Component({
  selector: 'headless-disclosure-button',
  template: `<ng-content></ng-content>`,
})
export class DisclosureButtonComponent implements OnInit {

  disclosure: DisclosureComponent;
  protected _disabled = false;

  @HostBinding('style.cursor') cursorType = 'pointer';

  @HostBinding('class.disabled')
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(disabled: boolean) {
    if (this._disabled === disabled) {
      return;
    }

    this._disabled = disabled;
  }

  constructor(
    disclosureParent: DisclosureComponent,
  ) {
    this.disclosure = disclosureParent;
    this.disclosure.addButton(this);
  }

  ngOnInit(): void {
    if (this.disclosure.disabled) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  @HostListener('mousedown', ['$event']) onClick() {
    if (this.disabled) return;
    this.disclosure.keyNavActions();
  }
}
