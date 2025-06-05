import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sv-ui-distributed-system';
  login(){
    window.open("https://192.46.212.12:8443/realms/supplyvalid/protocol/openid-connect/auth?client_id=onion-web-app&redirect_uri=http://localhost:4200/redirect&response_type=code&scope=openid","_blank")
  }
  logout(){
    window.open("https://192.46.212.12:8443/realms/supplyvalid/protocol/openid-connect/logout?redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin")
  }
}
