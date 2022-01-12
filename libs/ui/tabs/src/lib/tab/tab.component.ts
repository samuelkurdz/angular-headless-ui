import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'headless-tab',
  template: `<ng-content></ng-content>`,
})
export class TabComponent implements OnInit {
  // event which is fired when change in selected tab occurs, returns index of selected tab
  @Output() tabIndexChange = new EventEmitter<number>();
  @HostBinding('class.disabled-headless-tab') @Input() disabled!: boolean;

  currentPanelIndex!: number;

  @HostBinding('attr.aria-selected')
  @HostBinding('class.selected-headless-tab') selected = false;

  tabGroup: TabGroupComponent;
  constructor(
    tabGroup: TabGroupComponent,
    private ref: ElementRef
  ) {
    this.tabGroup = tabGroup;
  }

  ngOnInit() {
    const parentNode = this.ref.nativeElement.parentNode;
    const refIndex = Array.prototype.indexOf.call(parentNode.children, this.ref.nativeElement);
    console.log(refIndex);
    // if (refIndex === 0) this.
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @HostListener('click', ['$event']) onClick(event: any) {
    // console.log(event);
    const parentNode = event.target.parentNode;
    const index = Array.prototype.indexOf.call(parentNode.children, event.target);
    if (this.disabled) return;
    this.tabGroup.keyNavActions(event, index);
    // update tabIndex only if previous index != index of tab on which click event occures
    // if (this.currentPanelIndex !== index) this.tabService.changeCurrentTabIndex(index);
  }

  @HostBinding('class.unselected-headless-tab') get isNotSelected() {
    return !this.selected;
  }

  @HostBinding('attr.role') get role() { return 'tab' }

}
