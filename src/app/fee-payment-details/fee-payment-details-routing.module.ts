import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeePaymentDetailsPage } from './fee-payment-details.page';

const routes: Routes = [
  {
    path: '',
    component: FeePaymentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeePaymentDetailsPageRoutingModule {}
