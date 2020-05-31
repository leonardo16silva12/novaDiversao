import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdePage } from './ade.page';

const routes: Routes = [
  {
    path: '',
    component: AdePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdePageRoutingModule {}
