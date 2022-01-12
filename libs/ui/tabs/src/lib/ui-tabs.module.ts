import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabPanelDirective } from './tab-panel.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TabComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabPanelDirective
  ],
  exports: [
    TabComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabPanelDirective
  ]
})
export class UiTabsModule {}
