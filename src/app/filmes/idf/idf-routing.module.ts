import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdfPage } from './idf.page';

const routes: Routes = [
  {
    path: '',
    component: IdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdfPageRoutingModule {}
