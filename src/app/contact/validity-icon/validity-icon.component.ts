import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-validity-icon',
  standalone: true,
  imports: [],
  templateUrl: './validity-icon.component.html',
  styleUrl: './validity-icon.component.scss'
})
export class ValidityIconComponent {
  @Input() ngModel!: NgModel;
  @Input() isValidCallback!: (args: any) => void;
  @Input() isInvalidCallback!: (args: any) => void;

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
