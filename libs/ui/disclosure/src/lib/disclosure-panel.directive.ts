import { Directive, HostBinding, OnInit } from '@angular/core';
import { DisclosureComponent } from './disclosure/disclosure.component';

@Directive({
  selector: 'headlessDisclosurePanel, [headlessDisclosurePanel]',
  exportAs: 'headlessDisclosurePanel'
})
export class DisclosurePanelDirective implements OnInit {
  disclosure: DisclosureComponent;
  protected _hidden = false;

  @HostBinding('class.hidden') get hidden(): boolean {
    return this._hidden;
  }

  set hidden(hidden: boolean) {
    if (this._hidden === hidden) {
      return;
    }

    this._hidden = hidden;
  }

  constructor(
    disclosureParent: DisclosureComponent,
  ) {
    this.disclosure = disclosureParent;
    this.disclosure.addPanel(this);
  }

  ngOnInit(): void {
    if (this.disclosure.defaultOpenState) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}
