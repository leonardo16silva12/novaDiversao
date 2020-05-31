import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JetPage } from './jet.page';

const routes: Routes = [
  {
    path: '',
    component: JetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JetPageRoutingModule {}
