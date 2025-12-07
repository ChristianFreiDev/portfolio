import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-name',
    imports: [RouterLink],
    templateUrl: './name.component.html',
    styleUrl: './name.component.scss'
})
export class NameComponent {
  constructor(private router: Router) { }
}