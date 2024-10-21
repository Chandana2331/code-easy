import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login.page';
import { RegisterPage } from './register/register.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPage },

  { path: 'tab1', loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule) },
  { path: 'fee-details', loadChildren: () => import('./fee-details/fee-details.module').then(m => m.FeeDetailsPageModule) },
  { path: 'collect-fees', loadChildren: () => import('./collect-fees/collect-fees.module').then(m => m.CollectFeesPageModule) },
  { path: 'time-table', loadChildren: () => import('./time-table/time-table.module').then(m => m.TimeTablePageModule) },
  { path: 'reminder-notification', loadChildren: () => import('./reminder-notification/reminder-notification.module').then(m => m.ReminderNotificationPageModule) },
  { path: 'fee-payment-details', loadChildren: () => import('./fee-payment-details/fee-payment-details.module').then(m => m.FeePaymentDetailsPageModule) },
  { path: 'invoice/:invoiceId', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoicePageModule) },
  { path: 'attendance/:studentId', loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendancePageModule) },
  { path: 'marks/:studentId', loadChildren: () => import('./marks/marks.module').then(m => m.MarksPageModule) },
  { path: 'admin-login', loadChildren: () => import('./admin-login/admin-login.module').then(m => m.AdminLoginPageModule) },
  { path: 'admin-dashboard', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardPageModule) },

  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule) },
  { path: 'edit-profile', loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfilePageModule) }, // Edit profile route

  { path: 'marks', loadChildren: () => import('./marks/marks.module').then(m => m.MarksPageModule) },
  { path: 'staff-details', loadChildren: () => import('./staff-details/staff-details.module').then(m => m.StaffDetailsPageModule) }, // Staff details route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
