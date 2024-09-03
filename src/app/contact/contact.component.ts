import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UseScrollAnimationDirective } from '../directives/use-scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, UseScrollAnimationDirective, TranslateModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log('Form submitted.', this.formData);
    }
  }

}
