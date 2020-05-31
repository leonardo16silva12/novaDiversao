import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DbzPageRoutingModule } from './dbz-routing.module';

import { DbzPage } from './dbz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DbzPageRoutingModule
  ],
  declarations: [DbzPage]
})
export class DbzPageModule {}
