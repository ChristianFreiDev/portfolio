import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appUseScrollAnimation]',
  standalone: true
})
export class UseScrollAnimationDirective {

  @Input() scrollAnimationClass: string = '';

  observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  constructor(private elementRef: ElementRef) { }

  /**
   * This function adds the animation class to the first element child of the target of an IntersectionObserverEntry.
   */
  addClass(entry: IntersectionObserverEntry): void {
    entry.target.firstElementChild?.classList.add(this.scrollAnimationClass);
  }

  intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.firstElementChild?.classList.contains(this.scrollAnimationClass)) {
        this.addClass(entry);
      }
    });
  }, this.observerOptions);

  ngOnInit() {
    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

}
