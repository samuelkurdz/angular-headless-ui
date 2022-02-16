import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
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

  @HostBinding('class.close-disclosure') get isShown(): boolean {
    return this._isShown;
  }

  set isShown(hidden: boolean) {
    if (this._isShown === hidden) {
      return;
    }

    this._isShown = hidden;
  }  
  
  _isShown!: boolean;
  displayPanel!: DisclosurePanelDirective;
  disclosureButton!: DisclosureButtonComponent;

  updateOpenState(state: boolean) {
    this.panelChange.emit(state);
    this.isShown = state;
  }

  addPanel(panel: DisclosurePanelDirective): void {
    this.displayPanel = panel;
    this.panelChange.emit(panel.hidden);
    this.updateOpenState(panel.hidden);
  }
  
  addButton(button: DisclosureButtonComponent): void {
    this.disclosureButton = button;
  }
  
  keyNavActions() {
    this.displayPanel.hidden = !this.displayPanel.hidden;
    this.updateOpenState(this.displayPanel.hidden);
  }
}
