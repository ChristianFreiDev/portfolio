import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UseScrollAnimationDirective } from '../directives/use-scroll-animation.directive';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslateModule, UseScrollAnimationDirective],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
