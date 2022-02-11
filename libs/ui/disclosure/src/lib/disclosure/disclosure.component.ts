import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DisclosureButtonComponent } from '../disclosure-button/disclosure-button.component';
import { DisclosurePanelDirective } from '../disclosure-panel.directive';

@Component({
  selector: 'headless-disclosure',
  template: `<ng-content></ng-content>`,
})
export class DisclosureComponent {
  @Input() defaultState!: boolean;
  @Input() disabled!: boolean;
  @Output() panelChange: EventEmitter<boolean> = new EventEmitter();

  
  displayPanel!: DisclosurePanelDirective;
  disclosureButton!: DisclosureButtonComponent;

  addPanel(panel: DisclosurePanelDirective): void {
    this.displayPanel = panel;
    this.panelChange.emit(panel.hidden);
  }

  addButton(button: DisclosureButtonComponent): void {
    this.disclosureButton = button;
  }

  keyNavActions() {
    this.displayPanel.hidden = !this.displayPanel.hidden;
    this.panelChange.emit(this.displayPanel.hidden);
  }
}
