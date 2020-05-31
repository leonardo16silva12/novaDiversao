import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilnovePage } from './milnove.page';

const routes: Routes = [
  {
    path: '',
    component: MilnovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MilnovePageRoutingModule {}
