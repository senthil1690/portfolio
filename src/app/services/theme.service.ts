import { Injectable, Inject, PLATFORM_ID, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  /** True when dark theme is active (`html.dark`). Default dark until storage says otherwise. */
  readonly isDark = signal(true);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.syncFromStorage();
    }
  }

  /** Call after view init if you need to re-read (e.g. SSR → hydrate). */
  syncFromStorage(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    /** Default theme is dark; only `portfolio-theme` === `light` opts out. */
    const useDark = stored !== 'light';
    this.applyDark(useDark);
  }

  toggle(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.applyDark(!this.isDark());
  }

  setLight(): void {
    this.applyDark(false);
  }

  setDark(): void {
    this.applyDark(true);
  }

  private applyDark(dark: boolean): void {
    this.isDark.set(dark);
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
  }
}
