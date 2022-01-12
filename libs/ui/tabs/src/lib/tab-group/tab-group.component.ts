import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabPanelDirective } from '../tab-panel.directive';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'headless-tab-group',
  template: `<ng-content></ng-content>`,
})
export class TabGroupComponent  {
  @Input() defaultTabIndex!: number;
    /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
    @Output() changeTab: EventEmitter<number> = new EventEmitter();

  tabs: TabPanelDirective[] = [];
  tabHeaders: TabComponent[] = [];

  addTab(tab: TabPanelDirective): void {
    this.tabs.push(tab);
  }

  addTabHeads(head: TabComponent): void {
    this.tabHeaders.push(head);
  }

  keyNavActions(event: KeyboardEvent, index: number) {
    this.tabs.forEach((tab, tabIndex) => {
      tabIndex === index ? tab.hidden = false : tab.hidden = true
    });

    this.tabHeaders.forEach((head, headIndex) => {
      headIndex === index ? head.selected = true : head.selected = false;
    });
    this.changeTab.emit(index);
  }
  

}
