import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { TabGroupComponent } from '..';

@Directive({
  selector: 'headlessTabPanel, [headlessTabPanel]',
  exportAs: 'headlessTabPanel'
})
export class TabPanelDirective implements OnInit {
  @HostBinding('attr.id') @Input() id?: string;

  tabGroup: TabGroupComponent;
  protected _hidden = true;


  /** tab hidden state toggle */
  @HostBinding('class.hidden')
  get hidden(): boolean {
    return this._hidden;
  }

  set hidden(hidden: boolean) {
    if (this._hidden === hidden) {
      return;
    }

    this._hidden = hidden;
  }

  constructor(
    tabGroup: TabGroupComponent,
    public ref: ElementRef,
    public renderer: Renderer2
  ) {
    this.tabGroup = tabGroup;
    this.tabGroup.addTab(this);
  }

  ngOnInit(): void {
    const parentNode = this.ref.nativeElement.parentNode;
    const refIndex = Array.prototype.indexOf.call(parentNode.children, this.ref.nativeElement);
    if (this.tabGroup.defaultTabIndex) {
      if (refIndex === this.tabGroup.defaultTabIndex + 1) this.hidden = false;
    } else {
      if (refIndex === 1) this.hidden = false;
    }
  }

}