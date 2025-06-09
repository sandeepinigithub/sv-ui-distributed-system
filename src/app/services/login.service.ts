import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private keycloakUrl = 'https://192.46.212.12:8443';
  private realm = 'supplyvalid';
  private clientId = 'onion-web-app';
  private clientSecret = 'FsgWEAbeX9qcdE1tBWWMNBhr4MbTHnOd';

  constructor(private _httpClient: HttpClient) { }

  getToken(username: string, password: string) {
    const url = `${this.keycloakUrl}/realms/${this.realm}/protocol/openid-connect/token`;

    const body = new HttpParams()
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret)
      .set('grant_type', 'password')
      .set('scope', 'openid')
      .set('username', username)
      .set('password', password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this._httpClient.post(url, body.toString(), { headers });
  }

  getUserInfoByUsername(token: string, username: string) {
    const url = `${this.keycloakUrl}/realms/${this.realm}/protocol/openid-connect/userinfo`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem("access_token")}`
    });

    return this._httpClient.get(url, { headers });
  }
}
