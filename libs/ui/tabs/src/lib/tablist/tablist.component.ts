import { Component, Input, OnInit } from '@angular/core';
import { TabService } from '../tab.service';

@Component({
  selector: 'headless-tablist',
  template: `<ng-content></ng-content>`,
})
export class TablistComponent implements OnInit  {
  @Input() defaultTabIndex = 0;
  
  constructor(
    private tabService: TabService
  ) { }

  ngOnInit(): void {
    this.tabService.changeCurrentTabIndex(this.defaultTabIndex)
  }

  

}
