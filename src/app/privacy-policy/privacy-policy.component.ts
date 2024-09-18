import { Component } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { UseScrollAnimationDirective } from '../directives/use-scroll-animation.directive';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, UseScrollAnimationDirective],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  currentLanguage: string = this.translate.currentLang;

  languageSubscription: Subscription;

  constructor(private router: Router, private translate: TranslateService) { 
    this.languageSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLanguage = event.lang;
    })
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }
}
