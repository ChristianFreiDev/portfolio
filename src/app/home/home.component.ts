import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-home',
    imports: [AboveTheFoldComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ContactComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

  observer!: IntersectionObserver;
  areObserversActive: boolean = false;

  @ViewChildren('view') views!: QueryList<ElementRef>;

  constructor(private router: Router, private location: Location) { }

  /**
   * This function creates an IntersectionObserver.
   */
  createObserver(): void {
    let options = {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }
    let callback = (entries: any[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id && entry.target.id !== window.location.hash.substring(1)) {
          const urlTree = this.router.createUrlTree([], { fragment: entry.target.id });
          this.location.replaceState(urlTree.toString());
        }
      })
    }
    this.observer = new IntersectionObserver(callback, options);
    this.views.forEach((cmpt: ElementRef) => {
      this.observer.observe(cmpt.nativeElement);
    })
  }

  /**
   * This function destroys the IntersectionObserver.
   */
  destroyObserver(): void {
    if (this.observer) {
      this.views.forEach((cmpt: ElementRef) => {
        this.observer.unobserve(cmpt.nativeElement);
      })
      this.observer.disconnect();
    }
  }

  ngAfterViewInit() {
    this.createObserver();
  }

  ngOnDestroy() {
    this.destroyObserver();
  }
}
