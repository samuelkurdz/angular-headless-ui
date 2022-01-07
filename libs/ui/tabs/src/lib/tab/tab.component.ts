/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'headless-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent  {

  @HostListener('click', ['$event']) onClick(event: any) {
    console.log(event.target.id);
  }
}
