import { Route } from '@angular/router';

export const songRoutes: Route[] = [
  {
    path: 'all',
    loadComponent: () => import('./feature/all-songs/all-songs.component').then(m => m.AllSongsComponent),
  },

  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  }
];