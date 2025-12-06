import { Component } from '@angular/core';
import { NameComponent } from '../name/name.component';
import { SocialMediaLinksComponent } from '../social-media-links/social-media-links.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    imports: [RouterLink, NameComponent, SocialMediaLinksComponent, TranslateModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year: number = new Date().getFullYear();
}
