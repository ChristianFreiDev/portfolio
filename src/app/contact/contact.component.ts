import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { UseScrollAnimationDirective } from '../directives/use-scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ValidityIconComponent } from './validity-icon/validity-icon.component';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, UseScrollAnimationDirective, TranslateModule, CommonModule, ValidityIconComponent, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private router: Router) { }

  httpClient = inject(HttpClient);

  formData: any = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  }

  formSent: boolean = false;

  /**
   * This function resets the form data.
   */
  resetFormData(ngForm: NgForm): void {
    ngForm.resetForm();
    this.formData = {
      name: '',
      email: '',
      message: '',
      checkbox: false
    }
    this.formSent = true;
  }

  mailTest = false;

  mailPhpUrl = 'https://christian-frei.dev/sendMail.php';

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

  /**
   * This function sends the form data via e-mail.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.httpClient.post(this.post.endPoint, this.post.body(this.formData))
        .subscribe({
          next: (response) => {
            this.resetFormData(ngForm);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('Data has been sent.'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.resetFormData(ngForm);
    }
  }

  /**
   * This function checks if the input value is valid.
   */
  isValid(input: NgModel): boolean {
    if (input && input.valid) {
      return true;
    } else {
      return false;
    }
  }

    /**
   * This function checks if the input value is invalid.
   */
  isInvalid(input: NgModel): boolean {
    if (input && !input.valid && input.touched && input.value.length >= 0) {
      return true;
    } else {
      return false;
    }
  }

}
