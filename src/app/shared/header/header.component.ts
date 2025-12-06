import { Component, ViewChild } from '@angular/core';
import { IsActiveMatchOptions, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NameComponent } from '../name/name.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive, NameComponent, TranslateModule, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public routerLinkOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact'
  }
  activeLanguage: string = 'de';
  activeFragmentFromLocation: BehaviorSubject<string> = new BehaviorSubject('#above-the-fold');
  location: Location;
  unsubLocationUrlChange!: () => void;

  constructor(private router: Router, private translate: TranslateService, location: Location) { 
    this.location = location;
  }

  /**
   * This function changes the active language.
   */
  changeLanguage(language: string): void {
    this.translate.use(language);
    this.activeLanguage = language;
  }

  @ViewChild('headerBurgerMenuOverlay') overlay: any;
  @ViewChild('headerBurgerMenuSvgAnimation1') menuSvgAnimation1: any;
  @ViewChild('headerBurgerMenuSvgAnimation2') menuSvgAnimation2: any;
  @ViewChild('headerBurgerMenuSvgAnimation3') menuSvgAnimation3: any;

  isBurgerMenuOpen = false;
  fragmentFromLocation: string = '#above-the-fold';

  ngOnInit() {
    this.unsubLocationUrlChange = this.location.onUrlChange((url, state) => {
      this.activeFragmentFromLocation.next(this.location.path(true));
    });
  }

  ngOnDestroy() {
    this.unsubLocationUrlChange();
    this.activeFragmentFromLocation.unsubscribe();
  }

  /**
   * This function opens or closes the burger menu.
   */
  toggleBurgerMenu(): void {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
    if (this.isBurgerMenuOpen) {
      this.openBurgerMenu();
    } else {
      this.closeBurgerMenu();
    }
  }

  /**
   * This function opens the burger menu.
   */
  openBurgerMenu(): void {
    document.body.classList.add('disable-scroll');
    this.overlay.nativeElement.classList.add('show-burger-menu');
    this.startAnimation();
  }

  /**
   * This functions closes the burger menu.
   */
  closeBurgerMenu(): void {
    this.isBurgerMenuOpen = false;
    document.body.classList.remove('disable-scroll');
    this.overlay.nativeElement.classList.remove('show-burger-menu');
    this.startAnimation();
  }

  /**
   * This function starts the animation for opening or closing the burger menu.
   */
  startAnimation(): void {
    let anims = [this.menuSvgAnimation1.nativeElement, this.menuSvgAnimation2.nativeElement, this.menuSvgAnimation3.nativeElement];
    anims.forEach(anim => {
      anim.beginElement();
      let from = anim.getAttribute('from');
      anim.setAttribute('from', anim.getAttribute('to'));
      anim.setAttribute('to', from);
    })
  }
}
