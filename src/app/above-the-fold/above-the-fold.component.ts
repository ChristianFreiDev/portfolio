import { Component } from '@angular/core';
import { SocialMediaLinksComponent } from '../shared/social-media-links/social-media-links.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [SocialMediaLinksComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

}
