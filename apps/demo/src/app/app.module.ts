import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiTabsModule } from '@ngheadlessui/tabs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, UiTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
