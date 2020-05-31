import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B10Page } from './b10.page';

const routes: Routes = [
  {
    path: '',
    component: B10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B10PageRoutingModule {}
