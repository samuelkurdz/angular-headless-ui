import { Component, EventEmitter, HostListener, OnDestroy, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TabService } from '../tab.service';

@Component({
  selector: 'headless-tab',
  template: `<ng-content></ng-content>`,
})
export class TabComponent implements OnDestroy  {
  @Output() selectedTabIndex = new EventEmitter<number>();
  destroy$: Subject<boolean> = new Subject<boolean>();
  currentPanelIndex!: number;

  constructor(
    private tabService: TabService
  ) {
    this.tabService.currentPanelIndex
      .pipe(takeUntil(this.destroy$))
      .subscribe(index => {
        this.currentPanelIndex = index;
        this.selectedTabIndex.emit(index);
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @HostListener('click', ['$event']) onClick(event: any) {
    const parentNode = event.target.parentNode;
    const index = Array.prototype.indexOf.call(parentNode.children, event.target);
    if (this.currentPanelIndex !== index) this.tabService.changeMessage(index);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
