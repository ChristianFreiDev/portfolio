import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './name.component.html',
  styleUrl: './name.component.scss'
})
export class NameComponent {
  constructor(private router: Router) { }
}