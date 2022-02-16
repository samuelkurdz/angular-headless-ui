import { Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DisclosureButtonComponent } from '../disclosure-button/disclosure-button.component';
import { DisclosurePanelDirective } from '../disclosure-panel.directive';

@Component({
  selector: 'headless-disclosure',
  template: `<ng-content></ng-content>`,
})
export class DisclosureComponent implements OnChanges {
  @Input() defaultState!: boolean;
  @Input() disabled!: boolean;
  @Output() panelChange: EventEmitter<boolean> = new EventEmitter();
  
  private _isOpen = false;
  displayPanel!: DisclosurePanelDirective;
  disclosureButton!: DisclosureButtonComponent;

  @HostBinding('class.opened-headless-disclosure') get isOpened(): boolean {
    return this._isOpen;
  }

  set isOpened(hidden: boolean) {
    if (this._isOpen === hidden) {
      return;
    }

    this._isOpen = hidden;
  } 

  ngOnChanges(): void {
    this._isOpen = !!this.defaultState;
  }

  addPanel(panel: DisclosurePanelDirective): void {
    this.displayPanel = panel;
    this.panelChange.emit(panel.hidden);
  }

  
  addButton(button: DisclosureButtonComponent): void {
    this.disclosureButton = button;
  }
  
  keyNavActions() {
    this.displayPanel.hidden = !this.displayPanel.hidden;
    this.updateOpenState();
  }


  updateOpenState() {
    this.isOpened = !this._isOpen;
    this.panelChange.emit(this.isOpened);
  }
}
