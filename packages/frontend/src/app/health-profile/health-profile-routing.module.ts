import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthProfilePage } from './health-profile.page';

const routes: Routes = [
  {
    path: '',
    component: HealthProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthProfilePageRoutingModule {}
