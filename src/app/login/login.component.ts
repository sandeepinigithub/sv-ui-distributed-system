import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { RedirectService } from '../services/redirect.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  captchaText = 'K 5 2 p 3';
  userInfo: any

  constructor(private fb: FormBuilder, private _loginService: LoginService, private _redirectService: RedirectService,
    private _activatedRoute: ActivatedRoute, private _router: Router
  ) {
    this.loginForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required],
      captcha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // if (this.loginForm.invalid) {
    //   this.loginForm.markAllAsTouched();
    //   return;
    // }

    const { mobileNumber, password, captcha } = this.loginForm.value;

    // if (captcha !== this.captchaText) {
    //   alert('Invalid captcha');
    //   return;
    // }

    // Simulated login success
    // alert(`Login successful for mobile: ${mobileNumber}`);
    this._loginService.getToken(mobileNumber, password).subscribe({
      next: (res: any) => {
        console.log(res)
        sessionStorage.setItem("access_token", res?.access_token)
        // this._redirectService.getUserInfo(res?.access_token).subscribe({
        //   next: (res: any) => {
        //     console.log('Token response:', res);
        //     this.userInfo = res
        //   },
        //   error: (err) => {
        //     console.error('Token request error:', err);
        //   },
        //   complete: () => {
        //     console.log('Token request complete.');
        //   }
        // });
        this._loginService.getUserInfoByUsername(res?.access_token, mobileNumber).subscribe({
          next: (res: any) => {
            this.userInfo = res
            sessionStorage.setItem("userInfo",JSON.stringify(res))
            this._router.navigate(['admin']);

          }
        })
      }
    })
  }

  reloadCaptcha(): void {
    // You can implement real captcha later
    this.captchaText = 'A 7 B x 2'; // Example change
  }
}
