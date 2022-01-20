import { Component } from '@angular/core';
import {
  fadeInLeftOnEnterAnimation,
  fadeInOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'lbk-root',
  templateUrl: './app.component.html',
  animations: [fadeInLeftOnEnterAnimation(), fadeInOnEnterAnimation()],
})
export class AppComponent {}
