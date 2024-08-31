import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UseScrollAnimationDirective } from '../../directives/use-scroll-animation.directive';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, UseScrollAnimationDirective],
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
}
