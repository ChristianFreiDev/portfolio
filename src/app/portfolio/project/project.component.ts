import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UseScrollAnimationDirective } from '../../directives/use-scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-project',
    imports: [CommonModule, UseScrollAnimationDirective, TranslateModule],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() title: string = '';
  @Input() stack: string = '';
  @Input() description: string = '';
  @Input() imagePath: string = '';
  @Input() alt: string = '';
  @Input() direction: string = 'row';
  @Input() liveTestUrl: string = '';
  @Input() gitHubUrl: string = '';

  openUrl(url: string) {
    window.open(url);
  }
}
