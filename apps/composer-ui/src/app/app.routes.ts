import { Route } from "@angular/router";

export const APP_ROUTES: Route[] = [
  {
    path: 'song',
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    loadChildren: () => import('./modules/song/song.routes').then(m => m.songRoutes)
  },

  {
    path: '',
    redirectTo: 'song',
    pathMatch: 'full'
  }
];