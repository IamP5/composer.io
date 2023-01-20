import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'composer-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ng-container>
      <header></header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <footer></footer>
    </ng-container>
  `
})
export class LayoutComponent { }
