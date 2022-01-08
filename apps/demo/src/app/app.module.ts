import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UiTabsModule } from '@ngheadlessui/tabs';
import { UiRadioModule } from '@ngheadlessui/radio';

import { AppComponent } from './app.component';
import { HeaderComponent } from './nx-welcome.component';
import { DemoTabsComponent } from './demo-tabs/demo-tabs.component';
import { DemoRadioComponent } from './demo-radio/demo-radio.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DemoTabsComponent, DemoRadioComponent],
  imports: [BrowserModule, UiTabsModule, UiRadioModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
