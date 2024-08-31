import { Component } from '@angular/core';
import { UseScrollAnimationDirective } from '../directives/use-scroll-animation.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [UseScrollAnimationDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
