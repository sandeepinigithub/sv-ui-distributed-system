import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  menuItems = [
    { label: 'Dashboard', icon: 'bi-grid' },
    { label: 'Register', icon: 'bi-journal-plus' },
    { label: 'List', icon: 'bi-card-list' },
    // { label: 'Payments', icon: 'bi-cash-stack' },
    // { label: 'Procurement Details', icon: 'bi-box-seam' },
    // { label: 'Procure Summary', icon: 'bi-bar-chart' },
    // { label: 'Storage', icon: 'bi-house-door' },
    // { label: 'Initial Assaying', icon: 'bi-journal-text' },
    // { label: 'Farmer Procurement and Payment', icon: 'bi-person-lines-fill' },
    // { label: 'Dispatch', icon: 'bi-truck' },
    // { label: 'Truck Scheduling', icon: 'bi-calendar-check' },
    // { label: 'Receive Details', icon: 'bi-inbox' },
    // { label: 'Report', icon: 'bi-file-earmark-text' },
    // { label: 'Training Videos', icon: 'bi-camera-video' }
  ];

  userInfo: any

  constructor(){
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo") || '')
  }


}
