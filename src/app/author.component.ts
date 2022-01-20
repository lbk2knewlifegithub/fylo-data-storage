import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-author',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="text-sm">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by
      <a
        class="text-sky-600 decoration-wavy"
        href="https://github.com/lbk2knewlifegithub"
        >lbk2k</a
      >.
    </p>
  `,
})
export class AuthorComponent {}
