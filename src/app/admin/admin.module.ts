import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserInfoCardComponent } from './user-info-card/user-info-card.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UserInfoCardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
