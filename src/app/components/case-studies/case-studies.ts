import { Component, signal } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { CASE_STUDIES, CaseStudy } from '../../data/portfolio.data';

@Component({
  selector: 'app-case-studies',
  imports: [ScrollAnimateDirective],
  templateUrl: './case-studies.html',
})
export class CaseStudies {
  protected readonly caseStudies = CASE_STUDIES;
  protected readonly expandedId = signal<string | null>(null);

  toggleStudy(id: string): void {
    this.expandedId.update((current) => (current === id ? null : id));
  }

  isExpanded(id: string): boolean {
    return this.expandedId() === id;
  }

  /** Public asset path under `public/` (works with `ng serve` and production build). */
  screenUrl(relativePath: string): string {
    const path = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    const segments = path.split('/').map((segment) => encodeURIComponent(segment));
    return '/' + segments.join('/');
  }
}
