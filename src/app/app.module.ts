import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  AuthorComponent,
  GigabytesLeftComponent,
  OptionComponent,
  ProcessBarComponent
} from './components';

export const COMPONENTS = [
  AppComponent,
  AuthorComponent,
  ProcessBarComponent,
  OptionComponent,
  GigabytesLeftComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
