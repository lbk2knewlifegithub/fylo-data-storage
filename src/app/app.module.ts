import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author.component';
import { GigabytesLeftComponent } from './gigabytes-left.component';
import { OptionComponent } from './options.component';
import { ProcessBarComponent } from './process-bar.component';

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
