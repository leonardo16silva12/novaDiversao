import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbzPage } from './dbz.page';

const routes: Routes = [
  {
    path: '',
    component: DbzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbzPageRoutingModule {}
