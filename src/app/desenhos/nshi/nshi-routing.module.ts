import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NshiPage } from './nshi.page';

const routes: Routes = [
  {
    path: '',
    component: NshiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NshiPageRoutingModule {}
