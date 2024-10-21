import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StaffDetailsPage } from './staff-details.page';
import { StaffDetailsPageRoutingModule } from './staff-details-routing.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffDetailsPageRoutingModule 
  ],
  declarations: [StaffDetailsPage]
})
export class StaffDetailsPageModule {}
