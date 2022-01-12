import { Component } from '@angular/core';
import { TabPanelDirective } from '../tab-panel.directive';

@Component({
  selector: 'headless-tab-group',
  template: `<ng-content></ng-content>`,
})
export class TabGroupComponent  {
  tabs: TabPanelDirective[] = [];

  addTab(tab: TabPanelDirective): void {
    this.tabs.push(tab);
  }

  keyNavActions(event: KeyboardEvent, index: number) {
    this.tabs.forEach((tab, tabIndex) => {
      tabIndex === index ? tab.hidden = false : tab.hidden = true
    });
  }
  

}
