import { Component, } from '@angular/core';

@Component({
  selector: 'headless-demo-disclosure',
  templateUrl: './demo-disclosure.component.html',
  styleUrls: ['./demo-disclosure.component.scss']
})
export class DemoDisclosureComponent {

  options = [
    {
      buttoneText: "What is your refund policy?",
      description: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
    },
    {
      buttoneText: "Do you offer technical support?",
      description: "No., we don't at the moment."
    },
  ];

  listenToChangeInTabs(e: boolean) {
    // console.log(e)
  }

}
