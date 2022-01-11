import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TabService } from '../tab.service';

@Component({
  selector: 'headless-tab',
  template: `<ng-content></ng-content>`,
})
export class TabComponent implements OnDestroy, OnInit  {
  // event which is fired when change in selected tab occurs, returns index of selected tab
  @Output() tabIndexChange = new EventEmitter<number>();
  @HostBinding('class.disabled-headless-tab') @Input() disabled!: boolean;

  destroy$: Subject<boolean> = new Subject<boolean>();
  currentPanelIndex!: number;

  @HostBinding('attr.aria-selected')
  @HostBinding('class.selected-headless-tab') selected = false;

  constructor(
    private tabService: TabService,
    private ref: ElementRef
  ) {

  }

  ngOnInit() {
    this.tabService.currentPanelIndex
    .pipe(takeUntil(this.destroy$))
    .subscribe(index => {
      if (index === undefined) return;
      this.currentPanelIndex = index;
      this.tabIndexChange.emit(index);


      const parentNode = this.ref.nativeElement.parentNode;
      const refIndex = Array.prototype.indexOf.call(parentNode.children, this.ref.nativeElement);
      this.selected = index === refIndex;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @HostListener('click', ['$event']) onClick(event: any) {
    // console.log(event);
    const parentNode = event.target.parentNode;
    const index = Array.prototype.indexOf.call(parentNode.children, event.target);
    if (this.disabled) return;
    // update tabIndex only if previous index != index of tab on which click event occures
    if (this.currentPanelIndex !== index) this.tabService.changeCurrentTabIndex(index);
  }

  @HostBinding('class.unselected-headless-tab') get isNotSelected() {
    return !this.selected;
  }

  @HostBinding('attr.role') get role() { return 'tab' }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
