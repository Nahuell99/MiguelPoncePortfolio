import { Directive, ElementRef, OnDestroy, afterNextRender, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class Reveal implements OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  constructor() {
    const node = this.el.nativeElement;
    afterNextRender(() => {
      if (this.prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
        node.classList.add('is-visible');
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            node.classList.add('is-visible');
            this.observer?.disconnect();
          }
        },
        { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
      );
      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private prefersReducedMotion(): boolean {
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      return false;
    }
  }
}
