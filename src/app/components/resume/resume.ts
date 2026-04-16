import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';

@Component({
  selector: 'app-resume',
  imports: [ScrollAnimateDirective],
  templateUrl: './resume.html',
})
export class Resume {
  protected readonly resumeUrl: string = 'resume/Senthil-Resume-2026.pdf';
  protected readonly safeResumeUrl: SafeResourceUrl;
  protected readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    sanitizer: DomSanitizer,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.safeResumeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.resumeUrl);
  }
}
