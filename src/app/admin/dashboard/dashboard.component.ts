import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  userInfo: any

  constructor() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo") || '')

  }

}
