import { Component, ViewChild } from '@angular/core';
import { IsActiveMatchOptions, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NameComponent } from '../name/name.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
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

  constructor(private router: Router, private translate: TranslateService) { }

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
