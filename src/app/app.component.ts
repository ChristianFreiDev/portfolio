import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, RouterOutlet, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  isIOS = false;

  constructor(translate: TranslateService) {
    this.isIOS = this.checkIOS();
    translate.setDefaultLang('de');
    translate.use('de');
    this.setHeight(window.screen.height);
  }

  checkIOS() {
    const platform = (navigator as any).userAgentData?.platform || navigator.platform;
    return platform.startsWith("iP") || platform.startsWith("Mac") && navigator.maxTouchPoints > 4;
  }

  setHeight(innerHeight: number) {
    if (this.isIOS) {
      document.documentElement.style.setProperty('--vh100', `${innerHeight - 49}px`); 
    }
  }

  @HostListener('window:resize', ['$event.target.screen.height'])
  onResize(height: number) {
    this.setHeight(height);
  }

}
