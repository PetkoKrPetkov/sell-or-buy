import { Component } from '@angular/core';
import { FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    passGroup: this.formBuilder.group(
      {
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]],
      },
      { validators: this.matchPasses('password', 'confirm_password') }
    ),
  });

  matchPasses(password: string, confirm_password: string): ValidatorFn {
    return (control) => {
      const pass = control.get(password)?.value;
      const rePass = control.get(confirm_password)?.value;

      return pass === rePass ? null : { mismatch: true };
    };
  }

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, passGroup: { password, confirm_password } = {} } =
      this.form.value;
    if (password !== confirm_password) {
      return;
    }
    this.authService.register(email!, password!).subscribe(() => {
      this.router.navigate(['/auth/profile']);
    });
    console.log(this.form.value);
  }
}
