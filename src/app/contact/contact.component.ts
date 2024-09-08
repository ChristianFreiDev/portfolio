import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { UseScrollAnimationDirective } from '../directives/use-scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ValidityIconComponent } from './validity-icon/validity-icon.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, UseScrollAnimationDirective, TranslateModule, CommonModule, ValidityIconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  httpClient = inject(HttpClient);

  formData: any = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  }

  mailTest = true;

  mailPhpUrl = 'https://';

  post = {
    endPoint: this.mailPhpUrl,
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.httpClient.post(this.post.endPoint, this.post.body(this.formData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('Data has been sent.'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
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
