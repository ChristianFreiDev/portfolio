import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'app-validity-icon',
    imports: [],
    templateUrl: './validity-icon.component.html',
    styleUrl: './validity-icon.component.scss'
})
export class ValidityIconComponent {
  @Input() model!: NgModel;
  @Input() isValidCallback!: boolean;
  @Input() isInvalidCallback!: boolean;

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
