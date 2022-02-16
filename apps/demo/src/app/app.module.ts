import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UiTabsModule } from '@ngheadlessui/tabs';
import { UiRadioModule } from '@ngheadlessui/radio';
import { UiDisclosureModule } from '@ngheadlessui/disclosure';

import { AppComponent } from './app.component';
import { HeaderComponent } from './nx-welcome.component';
import { DemoTabsComponent } from './demo-tabs/demo-tabs.component';
import { DemoRadioComponent } from './demo-radio/demo-radio.component';
import { DemoDisclosureComponent } from './demo-disclosure/demo-disclosure.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DemoTabsComponent, DemoRadioComponent, DemoDisclosureComponent],
  imports: [BrowserModule, UiTabsModule, UiRadioModule, UiDisclosureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
