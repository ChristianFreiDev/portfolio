import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UseScrollAnimationDirective } from '../directives/use-scroll-animation.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, UseScrollAnimationDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(private router: Router) { }
}
