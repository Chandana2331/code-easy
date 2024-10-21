import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReminderNotificationPage } from './reminder-notification.page';

const routes: Routes = [
  {
    path: '',
    component: ReminderNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReminderNotificationPageRoutingModule {}
