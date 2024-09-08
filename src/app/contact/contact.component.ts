import { Component, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { UseScrollAnimationDirective } from '../directives/use-scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ValidityIconComponent } from './validity-icon/validity-icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, UseScrollAnimationDirective, TranslateModule, CommonModule, ValidityIconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  formData: any = {
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

  isValid(input: NgModel) {
    if (input && input.valid) {
      return true;
    } else {
      return false;
    }
  }

  isInvalid(input: NgModel) {
    if (input && !input.valid && input.touched && input.value.length >= 0) {
      return true;
    } else {
      return false;
    }
  }

}
