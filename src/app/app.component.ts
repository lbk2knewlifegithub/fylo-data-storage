import { Component } from '@angular/core';
import { fadeIn } from './shared';

@Component({
  selector: 'lbk-root',
  templateUrl: './app.component.html',
  animations: [fadeIn()],
})
export class AppComponent {}
