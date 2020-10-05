import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersInfoPageRoutingModule } from './customers-info-routing.module';

import { CustomersInfoPage } from './customers-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersInfoPageRoutingModule
  ],
  declarations: [CustomersInfoPage]
})
export class CustomersInfoPageModule {}
