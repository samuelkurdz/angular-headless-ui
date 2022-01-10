import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private radioValueSource = new BehaviorSubject<any>(undefined);
  currentRadioValue = this.radioValueSource.asObservable();

  changeRadioValue(panelIndex: number) {
    this.radioValueSource.next(panelIndex)
  }

}
