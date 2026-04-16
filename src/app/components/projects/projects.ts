import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { ScrollService } from '../../services/scroll.service';
import { PROJECTS, Project } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  imports: [ScrollAnimateDirective],
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = PROJECTS;

  constructor(private scrollService: ScrollService) {}

  viewCaseStudy(project: Project): void {
    this.scrollService.scrollTo('cs-' + project.id);
  }

  /** Public asset path under `public/` (segment-encoded for spaces/special chars). */
  thumbnailUrl(relativePath: string): string {
    const path = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    const segments = path.split('/').map((segment) => encodeURIComponent(segment));
    return '/' + segments.join('/');
  }
}
