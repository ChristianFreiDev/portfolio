import { Component } from '@angular/core';
import { SocialMediaLinksComponent } from '../shared/social-media-links/social-media-links.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SocialMediaLinksComponent, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  constructor(private router: Router) { }
}
