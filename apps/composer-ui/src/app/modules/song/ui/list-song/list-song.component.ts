import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '../../@models/song.model';
import { CardSongComponent } from "../card-song/card-song.component";

@Component({
    selector: 'composer-list-song',
    standalone: true,
    template: ` 
    <div class="p-12 pt-0 justify-items-center w-screen">
      <composer-card-song *ngFor="let song of songs" [song]="song"></composer-card-song>
    </div>
  `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, CardSongComponent]
})
export class ListSongComponent {

  @Input()
  songs!: Song[];

  // [
  //   {
  //     name: 'My Best Work',
  //     bpm: 120,
  //     key: 'A'
  //   },
  //   {
  //     name: 'WO',
  //     bpm: 120,
  //     key: 'A'
  //   },
  //   {
  //     name: 'T',
  //     bpm: 120,
  //     key: 'A'
  //   }
  // ]
}
