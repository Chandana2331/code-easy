import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Tab1RoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';  
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    Tab1RoutingModule
  ],
  declarations: [Tab1Page] 
})
export class Tab1PageModule {}
