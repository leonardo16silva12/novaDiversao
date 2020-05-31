import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcPage } from './opc.page';

const routes: Routes = [
  {
    path: '',
    component: OpcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcPageRoutingModule {}
