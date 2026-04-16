import { Component, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { CaseStudies } from './components/case-studies/case-studies';
import { Resume } from './components/resume/resume';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Projects, CaseStudies, Resume, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  /** Ensures theme service initializes (applies saved / system preference). */
  private readonly _theme = inject(ThemeService);
}
