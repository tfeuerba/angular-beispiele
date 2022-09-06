import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.less'],
})
export class NewProductComponent {
  readonly formGroup: FormGroup;

  validationMessages: Message[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group(
      {
        name: ['', Validators.required],
        price: [0.0, [Validators.required, Validators.min(0.01)]],
        description: [''],
      },
      { validators: [NewProductComponent.booksMustBeExpensiveValidatorFn] }
    );
  }

  onFormSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.validationMessages = [
        { severity: 'info', summary: 'Form is valid.' },
      ];
    } else {
      const validationMessagesTemp = [];
      for (let controlsKey in this.formGroup.controls) {
        let control = this.formGroup.get(controlsKey)!;
        for (let errorsKey in control.errors) {
          validationMessagesTemp.push({
            severity: 'error',
            summary: `Validation error for field ${controlsKey}: "${errorsKey}" violated.`,
          });
        }
      }
      for (let errorsKey in this.formGroup.errors) {
        validationMessagesTemp.push({
          severity: 'error',
          summary: `Validation error for whole group: "${errorsKey}" violated.`,
        });
      }
      this.validationMessages = validationMessagesTemp;
    }
  }

  // cross field validator
  static booksMustBeExpensiveValidatorFn(
    control: AbstractControl
  ): ValidationErrors | null {
    const name = control.get('name')?.value;
    const price = control.get('price')?.value;

    if (
      name &&
      price &&
      name.toLowerCase().indexOf('book') >= 0 &&
      price < 20
    ) {
      return { booksMustBeExpensive: true };
    } else {
      return null;
    }
  }
}
