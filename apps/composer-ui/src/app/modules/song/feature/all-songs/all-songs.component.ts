import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'composer-all-songs',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>all-songs works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllSongsComponent {}
