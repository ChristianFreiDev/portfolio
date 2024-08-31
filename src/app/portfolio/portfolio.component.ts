import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { UseScrollAnimationDirective } from '../directives/use-scroll-animation.directive';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, UseScrollAnimationDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
