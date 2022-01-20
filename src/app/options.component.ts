import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Option } from './models';

@Component({
  selector: 'lbk-options',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="flex gap-4">
      <ng-container *ngFor="let option of options">
        <li class="bg-blue-900 p-3 rounded-lg">
          <img [src]="option.src" [alt]="option.name" />
        </li>
      </ng-container>
    </ul>
  `,
})
export class OptionComponent {
  @Input()
  options: Option[] = [
    {
      name: 'Document',
      src: 'assets/images/icon-document.svg',
    },
    {
      name: 'Folder',
      src: 'assets/images/icon-folder.svg',
    },
    {
      name: 'Upload',
      src: 'assets/images/icon-upload.svg',
    },
  ];
}
