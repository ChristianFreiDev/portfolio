import { Component } from '@angular/core';
import { NameComponent } from '../name/name.component';
import { SocialMediaLinksComponent } from '../social-media-links/social-media-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NameComponent, SocialMediaLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year: number = new Date().getFullYear();
}
