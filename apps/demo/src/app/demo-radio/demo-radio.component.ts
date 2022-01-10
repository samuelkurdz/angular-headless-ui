import { Component } from '@angular/core';

@Component({
  selector: 'headless-demo-radio',
  templateUrl: './demo-radio.component.html',
  styleUrls: ['./demo-radio.component.scss']
})
export class DemoRadioComponent {

  plans = [
    {
      name: 'Startup',
      ram: '12GB',
      cpus: '6 CPUs',
      disk: '160 GB SSD disk',
    },
    {
      name: 'Business',
      ram: '16GB',
      cpus: '8 CPUs',
      disk: '512 GB SSD disk',
    },
    {
      name: 'Enterprise',
      ram: '32GB',
      cpus: '12 CPUs',
      disk: '1024 GB SSD disk',
    },
  ]

}
