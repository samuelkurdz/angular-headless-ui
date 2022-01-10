import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RadioService } from '../radio.service';

@Component({
  selector: 'headless-radio-option',
  templateUrl: './option.component.html',
})
export class OptionComponent implements OnInit, OnDestroy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() value: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentRadioGroupValue: any;

  @HostBinding('attr.aria-checked')
  @HostBinding('class.checked-headless-radio') checked = false;
  @HostBinding('class.disabled-headless-radio') @Input() disabled!: boolean;
  @HostBinding('attr.role') get role() { return 'radio' }
  // @HostBinding('tabIndex') get tabIndex() { return this.checked ? 0 : -1  }

  constructor(
    private radioService: RadioService,
  ) {

  }

  ngOnInit() {
    this.radioService.currentRadioValue
    .pipe(takeUntil(this.destroy$))
    .subscribe(index => {
      this.currentRadioGroupValue = index;
      this.checked = this.currentRadioGroupValue === this.value;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @HostListener('click', ['$event']) onClick(event: any) {
    const parentNode = event.target.parentNode;
    const index = Array.prototype.indexOf.call(parentNode.children, event.target);
    console.log(event);

    if (this.disabled) return;
    if (this.currentRadioGroupValue !== this.value) this.radioService.changeRadioValue(this.value);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
