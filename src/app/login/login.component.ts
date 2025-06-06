import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  captchaText = 'K 5 2 p 3';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required],
      captcha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { mobileNumber, password, captcha } = this.loginForm.value;

    if (captcha !== this.captchaText) {
      alert('Invalid captcha');
      return;
    }

    // Simulated login success
    alert(`Login successful for mobile: ${mobileNumber}`);
  }

  reloadCaptcha(): void {
    // You can implement real captcha later
    this.captchaText = 'A 7 B x 2'; // Example change
  }
}
