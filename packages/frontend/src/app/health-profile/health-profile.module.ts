import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthProfilePageRoutingModule } from './health-profile-routing.module';

import { HealthProfilePage } from './health-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthProfilePageRoutingModule
  ],
  declarations: [HealthProfilePage]
})
export class HealthProfilePageModule {}
