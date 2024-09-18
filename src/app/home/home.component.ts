import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactComponent } from '../contact/contact.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboveTheFoldComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  router: Router;
  location: Location;
  observers: IntersectionObserver[];

  @ViewChildren('view') views!: QueryList<ElementRef>;

  constructor(router: Router, location: Location) {
    this.router = router;
    this.location = location;
    this.observers = [];
  }

  /**
   * This function creates an IntersectionObserver for each section.
   */
  createObservers(): void {
    let options = {
      rootMargin: '0px',
      threshold: 0.4
    }
    let callback = (entries: any[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
              const urlTree = this.router.createUrlTree([], { fragment: entry.target.id });
              this.location.go(urlTree.toString());
        }
      })
    }
    this.views.forEach((cmpt: ElementRef) => {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(cmpt.nativeElement);
      this.observers.push(observer);
    })
  }

  /**
   * This function destroys the IntersectionObservers.
   */
  destroyObservers(): void {
    if (this.observers) {
      this.observers.forEach(observer => {
        observer.disconnect();
      })
      this.observers = [];
    }
  }

  ngAfterViewInit() {
    this.createObservers();
  }

  ngOnDestroy() {
    this.destroyObservers();
  }
}
