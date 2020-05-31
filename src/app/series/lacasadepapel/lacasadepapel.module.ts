import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LacasadepapelPageRoutingModule } from './lacasadepapel-routing.module';

import { LacasadepapelPage } from './lacasadepapel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LacasadepapelPageRoutingModule
  ],
  declarations: [LacasadepapelPage]
})
export class LacasadepapelPageModule {}
