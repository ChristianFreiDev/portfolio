import { Component } from '@angular/core';
import { NameComponent } from '../name/name.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NameComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year: number = new Date().getFullYear();
}
