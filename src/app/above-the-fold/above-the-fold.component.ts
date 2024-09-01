import { Component } from '@angular/core';
import { SocialMediaLinksComponent } from '../shared/social-media-links/social-media-links.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SocialMediaLinksComponent, TranslateModule, CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

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
