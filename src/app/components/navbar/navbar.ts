import {
  Component,
  HostListener,
  signal,
  Inject,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly theme = inject(ThemeService);
  protected readonly isScrolled = signal(false);
  protected readonly isMobileMenuOpen = signal(false);

  protected readonly navLinks = [
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Case Studies', section: 'case-studies' },
    { label: 'Resume', section: 'resume' },
    { label: 'Contact', section: 'contact' },
  ];

  constructor(
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 50);
    }
  }

  navigateTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
    this.isMobileMenuOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }

  toggleTheme(): void {
    this.theme.toggle();
  }
}
