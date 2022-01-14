import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelDirective } from './tab-panel.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TabComponent,
    TabGroupComponent,
    TabPanelDirective
  ],
  exports: [
    TabComponent,
    TabGroupComponent,
    TabPanelDirective
  ]
})
export class UiTabsModule { }
