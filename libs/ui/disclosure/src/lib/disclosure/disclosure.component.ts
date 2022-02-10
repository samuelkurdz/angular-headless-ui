import { Component, Input } from '@angular/core';
import { DisclosureButtonComponent } from '../disclosure-button/disclosure-button.component';
import { DisclosurePanelDirective } from '../disclosure-panel.directive';

@Component({
  selector: 'headless-disclosure',
  template: `<ng-content></ng-content>`,
})
export class DisclosureComponent {
  @Input() defaultState!: boolean;
  @Input() disabled!: boolean;

  displayPanel!: DisclosurePanelDirective;
  disclosureButton!: DisclosureButtonComponent;

  addPanel(panel: DisclosurePanelDirective): void {
    this.displayPanel = panel;
  }

  addButton(button: DisclosureButtonComponent): void {
    this.disclosureButton = button;
  }

  keyNavActions() {
    this.displayPanel.hidden = !this.displayPanel.hidden;
  }
}
