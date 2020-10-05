import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersInfoPage } from './customers-info.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersInfoPageRoutingModule {}
