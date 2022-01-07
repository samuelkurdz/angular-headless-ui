import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  private panelIndexSource = new BehaviorSubject<number>(0);
  currentPanelIndex = this.panelIndexSource.asObservable();

  changeMessage(panelIndex: number) {
    this.panelIndexSource.next(panelIndex)
  }
}
