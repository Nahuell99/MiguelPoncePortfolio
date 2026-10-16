import { Component, signal } from '@angular/core';
import { site } from '../site';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-header',
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: {
    '[class.is-scrolled]': 'scrolled()',
    '[class.is-open]': 'menuOpen()',
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  readonly site = site;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  onScroll(): void {
    const next = window.scrollY > 8;
    if (next !== this.scrolled()) {
      this.scrolled.set(next);
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
