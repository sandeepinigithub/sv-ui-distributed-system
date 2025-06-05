import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private _httpClient: HttpClient) { }

  // getToken(payload: any) {
  //   return this._httpClient.post("", payload)
  // }
  getToken(payload: any) {
    const body = new URLSearchParams();
    body.set('grant_type', payload.grant_type);
    body.set('code', payload.code);
    body.set('redirect_uri', payload.redirect_uri);
    body.set('client_id', payload.client_id);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': payload.cookie
    });

    return this._httpClient.post(
      'https://192.46.212.12:8443/realms/supplyvalid/protocol/openid-connect/token',
      body.toString(),
      { headers }
    );
  }

  getUserInfo(token: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
    });

    return this._httpClient.get(
      'https://192.46.212.12:8443/realms/supplyvalid/protocol/openid-connect/userinfo',
      { headers }
    );
  }

}
