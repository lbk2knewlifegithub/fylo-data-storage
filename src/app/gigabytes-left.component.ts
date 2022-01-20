import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'lbk-gigabytes-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <strong class="text-4xl">185</strong>
    <span class="font-medium text-sm">GB LEFT</span>

    <div
      class="hidden triangle absolute right-0 bottom-0 translate-y-full lg:block"
    ></div>
  `,
  styles: [
    `
      :host {
        @apply inline-flex gap-2 items-center rounded-lg bg-white py-4 px-6 text-black lg:rounded-br-none;
      }
    `,
  ],
})
export class GigabytesLeftComponent implements OnInit {
  @Input() amount = 185;
  @Input() duration = 200;
  @Input() delay = 200;
  count = 0;

  constructor(private readonly _cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => this.counting(), this.delay);
  }

  counting() {
    const step = this.duration / this.amount;

    const interval = setInterval(() => {
      if (this.count < this.amount) {
        this.count++;
        this._cd.markForCheck();
        return;
      }

      this.count = this.amount;
      this._cd.markForCheck();
      clearInterval(interval);
    }, step);
  }
}
