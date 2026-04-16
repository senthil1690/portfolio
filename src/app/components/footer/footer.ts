import { Component } from '@angular/core';
import { PROFILE, CONTACTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly contacts = CONTACTS;
  protected readonly currentYear = new Date().getFullYear();
}
