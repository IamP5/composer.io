import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '../../@models/song.model';

@Component({
  selector: 'composer-card-song',
  standalone: true,
  imports: [CommonModule],
  template: ` 
    <div class="bg-tertiary h-20 mb-12 text-primary flex font-bold justify-between items-center p-4 rounded-xl border-2" *ngIf="song">
      <h1 class="text-lg">{{song.name}}</h1>
      <div class="text-base">
          <p class="">{{ song.bpm }} bpm</p>
          <p class="">Key {{ song.key }}</p>
      </div>
    </div>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSongComponent {
  @Input()
  song!: Song;
}
