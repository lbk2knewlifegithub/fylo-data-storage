import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export function fadeIn() {
  return trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    transition(':enter', [animate('300ms')]),
  ]);
}
