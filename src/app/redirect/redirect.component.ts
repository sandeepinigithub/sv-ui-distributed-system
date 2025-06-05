import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedirectService } from '../services/redirect.service';

@Component({
  selector: 'app-redirect',
  standalone: false,
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.scss'
})
export class RedirectComponent implements OnInit {
  queryParams: any = {};
  access_token = "";
  userInfo: any

  constructor(private _activatedRoute: ActivatedRoute, private _redirectService: RedirectService) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.queryParams = params;

      // Log or use the URL parameters
      console.log('Authorization Code:', params['code']);
      console.log('Session State:', params['session_state']);
      console.log('Issuer:', params['iss']);
      if (params['code'] && params['session_state'] && params['iss']) {
        this.getToken();
      }
    });
    this.getUserInfo()
  }

  getToken(): void {
    const payload = {
      grant_type: 'authorization_code',
      code: this.queryParams['code'],
      redirect_uri: 'http://localhost:4200/redirect',
      client_id: 'onion-web-app',
      cookie: document.cookie // not ideal, but if needed, grabs the whole cookie string
    };

    this._redirectService.getToken(payload).subscribe({
      next: (res: any) => {
        console.log('Token response:', res);
        this.access_token = res?.access_token
        sessionStorage.setItem("access_token", res?.access_token)
        this.getUserInfo()
      },
      error: (err) => {
        console.error('Token request error:', err);
      },
      complete: () => {
        console.log('Token request complete.');
      }
    });
  }

  getUserInfo() {
    this._redirectService.getUserInfo("token").subscribe({
      next: (res: any) => {
        console.log('Token response:', res);
        this.userInfo = res
      },
      error: (err) => {
        console.error('Token request error:', err);
      },
      complete: () => {
        console.log('Token request complete.');
      }
    });

  }
}


