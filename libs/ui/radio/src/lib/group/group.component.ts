import { Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RadioService } from '../radio.service';

@Component({
  selector: 'headless-radio-group',
  templateUrl: './group.component.html',
})
export class RadioGroupComponent implements OnInit, OnDestroy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() defaultOption: any;
  @Input() Label!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() currentRadioGroupValue = new EventEmitter<any>();

  destroy$: Subject<boolean> = new Subject<boolean>();

  @HostBinding('attr.aria-labelledby') @Input() radioGroupName!: string;
  @HostBinding('attr.role') get role() { return 'radiogroup' }

  constructor(
    private radioService: RadioService
  ) { }

  ngOnInit(): void {
    this.radioService.changeRadioValue(this.defaultOption);
    this.radioService.currentRadioValue
    .pipe(takeUntil(this.destroy$))
    .subscribe(index => {
      this.currentRadioGroupValue.emit(index);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
