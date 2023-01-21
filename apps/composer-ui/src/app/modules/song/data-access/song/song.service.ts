import { inject, Injectable } from '@angular/core';
import { Song } from '@prisma/client';
import { TrpcService } from 'apps/composer-ui/src/app/trpc/trpc.service';
import { from, map, Observable, of } from 'rxjs';

import { fromPromise } from "rxjs/internal/observable/innerFrom";

@Injectable()
export class SongService {
  trpc = inject(TrpcService).getTrpc();

  getSongs() {
    return fromPromise(this.trpc.song.getAll.query());
  }
}
