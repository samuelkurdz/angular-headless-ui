import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RadioOptionDirective } from '../radio-option.directive';

@Component({
  selector: 'headless-radio-group',
  templateUrl: './group.component.html',
})
export class RadioGroupComponent {
  // @Input() defaultOption: any;
  // @Input() Label!: string;
  // @Output() currentRadioGroupValue = new EventEmitter<any>();

  // destroy$: Subject<boolean> = new Subject<boolean>();

  // @HostBinding('attr.aria-labelledby') @Input() radioGroupName!: string;
  // @HostBinding('attr.role') get role() { return 'radiogroup' }

  tabs: RadioOptionDirective[] = [];

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  addTab(tab: RadioOptionDirective): void {
    this.tabs.push(tab);
    // tab.active = this.tabs.length === 1 && !tab.active;
  }

  keyNavActions(event: KeyboardEvent, index: number) {
    // event.preventDefault();
    // const list: HTMLElement[] = Array.from(this.elementRef.nativeElement.querySelectorAll('.headless-radio'));
    // console.log(list.length);
    this.tabs.forEach((tab, tabIndex) => {
      tabIndex === index ? tab.checked = true : tab.checked = false
    })
  }

}
