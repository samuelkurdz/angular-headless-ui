import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TabService } from '../tab.service';

@Component({
  selector: 'headless-tab',
  template: `<ng-content></ng-content>`,
})
export class TabComponent implements OnDestroy, OnInit  {
  @Output() selectedTabIndex = new EventEmitter<number>();
  @Input() disabled!: boolean;

  destroy$: Subject<boolean> = new Subject<boolean>();
  currentPanelIndex!: number;
  selected = false;

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
      this.selectedTabIndex.emit(index);


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

  // @HostBinding('class.selected') get isSelected() { return this.selected}
  // @HostBinding('class.notSelected') get isNotSelected() { return !this.selected}
  // @HostBinding('class.disabled') get isDisabled() { return this.disabled}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
