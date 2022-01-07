import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TablistComponent } from './tablist/tablist.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TabComponent,
    TablistComponent
  ],
  exports: [
    TabComponent,
    TablistComponent
  ]
})
export class UiTabsModule {}
