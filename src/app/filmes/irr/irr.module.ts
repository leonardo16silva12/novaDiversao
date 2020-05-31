import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrrPageRoutingModule } from './irr-routing.module';

import { IrrPage } from './irr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrrPageRoutingModule
  ],
  declarations: [IrrPage]
})
export class IrrPageModule {}
