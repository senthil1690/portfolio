import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { PROFILE, SKILLS, EXPERIENCES } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  imports: [ScrollAnimateDirective],
  templateUrl: './about.html',
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly skills = SKILLS;
  protected readonly experiences = EXPERIENCES;

  protected readonly designSkills = SKILLS.filter((s) => s.category === 'design');
  protected readonly toolSkills = SKILLS.filter((s) => s.category === 'tools');
  protected readonly devSkills = SKILLS.filter((s) => s.category === 'development');
  protected readonly methodologySkills = SKILLS.filter((s) => s.category === 'methodology');
}
