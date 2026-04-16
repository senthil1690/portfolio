import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly profile = PROFILE;

  constructor(private scrollService: ScrollService) {}

  scrollToAbout(): void {
    this.scrollService.scrollTo('about');
  }
}
