import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NshiPageRoutingModule } from './nshi-routing.module';

import { NshiPage } from './nshi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NshiPageRoutingModule
  ],
  declarations: [NshiPage]
})
export class NshiPageModule {}
