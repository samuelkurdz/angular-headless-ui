import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisclosureComponent } from './disclosure/disclosure.component';
import { DisclosureButtonComponent } from './disclosure-button/disclosure-button.component';
import { DisclosurePanelDirective } from './disclosure-panel.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DisclosureComponent,
    DisclosureButtonComponent,
    DisclosurePanelDirective
  ],
  exports: [
    DisclosureComponent,
    DisclosureButtonComponent,
    DisclosurePanelDirective
  ],
})
export class UiDisclosureModule {}
