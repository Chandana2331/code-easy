import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectFeesPageRoutingModule } from './collect-fees-routing.module';

import { CollectFeesPage } from './collect-fees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectFeesPageRoutingModule
  ],
  declarations: [CollectFeesPage]
})
export class CollectFeesPageModule {}
