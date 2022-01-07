import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TablistComponent } from './tablist/tablist.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TabComponent,
    TablistComponent,
    TabPanelComponent
  ],
  exports: [
    TabComponent,
    TablistComponent,
    TabPanelComponent
  ]
})
export class UiTabsModule {}
