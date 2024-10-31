import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-social-media-links',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './social-media-links.component.html',
  styleUrl: './social-media-links.component.scss'
})
export class SocialMediaLinksComponent {
  @Input('isInFooter') isInFooter: boolean = false;
}
