import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { CONTACTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [ScrollAnimateDirective],
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly contacts = CONTACTS;
}
