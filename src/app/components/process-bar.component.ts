import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'lbk-process-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <div #process class="relative rounded-full bg-blue-900">
        <!-- full -->
        <div #full class="relative bg-process-bar w-0 h-4 duration-700  rounded-full">
          <!-- ball -->
          <div
            class="absolute top-1/2 -translate-y-1/2 w-2 h-2 right-[3px] bg-white rounded-full "
          ></div>
          <!-- end ball -->
        </div>
        <!-- end full -->
      </div>

      <div class="text-white font-bold text-sm flex justify-between mt-1">
        <span>0GB</span>
        <span>1000GB</span>
      </div>
    </div>
  `,
})
export class ProcessBarComponent implements OnInit {
  @Input() limit = 1_000;
  @Input() current = 815;

  @ViewChild('process', { static: true })
  processRef!: ElementRef<HTMLDivElement>;
  @ViewChild('full', { static: true }) fullRef!: ElementRef<HTMLDivElement>;

  constructor(private readonly _cd: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.fullRef.nativeElement.style.width = `${this.percent}%`;
    }, 400);
  }

  get percent() {
    return (this.current / this.limit) * 100;
  }

  get left() {
    return Math.floor(this.percent * this.processBarWith);
  }

  get processBarWith() {
    return this.process.clientWidth;
  }

  get process() {
    return this.processRef.nativeElement;
  }
}
