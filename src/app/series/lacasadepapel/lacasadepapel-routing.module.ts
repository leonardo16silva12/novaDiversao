import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LacasadepapelPage } from './lacasadepapel.page';

const routes: Routes = [
  {
    path: '',
    component: LacasadepapelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LacasadepapelPageRoutingModule {}
