import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReminderNotificationPageRoutingModule } from './reminder-notification-routing.module';

import { ReminderNotificationPage } from './reminder-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReminderNotificationPageRoutingModule
  ],
  declarations: [ReminderNotificationPage]
})
export class ReminderNotificationPageModule {}
