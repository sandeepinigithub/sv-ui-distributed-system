import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info-card',
  standalone: false,
  templateUrl: './user-info-card.component.html',
  styleUrl: './user-info-card.component.scss'
})
export class UserInfoCardComponent {
  @Input() user: any;

  logout(): void {
    // Clear Local Storage
    localStorage.clear();

    // Clear Session Storages
    sessionStorage.clear();

    // Clear All Cookies
    document.cookie.split(";").forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    });

    // Optional: Redirect to login or home
    window.location.href = '/'; // Or use Angular Router
  }


}
