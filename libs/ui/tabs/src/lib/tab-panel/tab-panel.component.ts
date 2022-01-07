import { AfterViewInit, Component, Input, OnDestroy, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TabService } from '../tab.service';

@Component({
  selector: 'headless-tab-panel',
  template: `<ng-container #panel></ng-container>`,
})
export class TabPanelComponent implements AfterViewInit, OnDestroy {

  @ViewChild('panel', { read: ViewContainerRef }) panel!: ViewContainerRef;
  destroy$: Subject<boolean> = new Subject<boolean>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() panelTemplates!: TemplateRef<any>[];

  constructor(
    private tabService: TabService,
  ) {

  }

  ngAfterViewInit(): void {
    this.tabService.currentPanelIndex
      .pipe(takeUntil(this.destroy$))
      .subscribe(index => {
        this.panel.clear();
        
        if (index > this.panelTemplates.length - 1) {
          console.error('Not tab panel template provided');
        } else {
          this.panel.createEmbeddedView(this.panelTemplates[index]);
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
