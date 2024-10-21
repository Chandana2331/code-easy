import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectFeesPage } from './collect-fees.page';

const routes: Routes = [
  {
    path: '',
    component: CollectFeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectFeesPageRoutingModule {}
