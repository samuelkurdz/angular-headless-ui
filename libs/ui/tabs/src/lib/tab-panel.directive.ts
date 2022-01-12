import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from '@angular/core';
import { TabGroupComponent } from '..';

@Directive({
  selector: 'headlessTabPanel, [headlessTabPanel]',
  exportAs: 'headlessTabPanel'
})
export class TabPanelDirective {

  /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
  @Output() selectTab: EventEmitter<TabPanelDirective> = new EventEmitter();
  /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
  @Output() deselectTab: EventEmitter<TabPanelDirective> = new EventEmitter();

  @HostBinding('attr.id') @Input() id?: string;
  /** if true tab can not be activated */

  tabGroup: TabGroupComponent;
  protected _hidden = true;


  /** tab hidden state toggle */
  @HostBinding('class.hidden')
  @Input()
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
    public elementRef: ElementRef,
    public renderer: Renderer2
  ) {
    this.tabGroup = tabGroup;
    this.tabGroup.addTab(this);
  }

}