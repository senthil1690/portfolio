import {
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  input,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimate]',
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {
  readonly animationClass = input<string>('animate-fade-in-up', { alias: 'appScrollAnimate' });
  readonly threshold = input<number>(0.1);
  readonly delay = input<string>('0ms', { alias: 'animateDelay' });

  private observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement;
    element.style.opacity = '0';
    element.style.transitionDelay = this.delay();

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cls = this.animationClass() || 'animate-fade-in-up';
            element.classList.add(cls);
            element.style.opacity = '';
            this.observer?.unobserve(element);
          }
        });
      },
      { threshold: this.threshold() },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
