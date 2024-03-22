import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS, 
      useExisting: EmailDirective,
      multi: true,
    }
  ]
})
export class EmailDirective implements Validator {
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const isValid = this.emailValidator()(control);
    return isValid;
  }

  emailValidator(): ValidatorFn {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (control: AbstractControl): ValidationErrors | null => {
      const isEmailValid = regex.test(control.value);
      console.log(isEmailValid);
      
      if (!isEmailValid) {
        return { 'invalidEmail': true };
      }
      return null;
    };
  }
}

