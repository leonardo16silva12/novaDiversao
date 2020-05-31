import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrrPage } from './irr.page';

const routes: Routes = [
  {
    path: '',
    component: IrrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrrPageRoutingModule {}
