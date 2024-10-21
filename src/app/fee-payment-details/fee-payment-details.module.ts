import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeePaymentDetailsPageRoutingModule } from './fee-payment-details-routing.module';

import { FeePaymentDetailsPage } from './fee-payment-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeePaymentDetailsPageRoutingModule
  ],
  declarations: [FeePaymentDetailsPage]
})
export class FeePaymentDetailsPageModule {}
