import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B10PageRoutingModule } from './b10-routing.module';

import { B10Page } from './b10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B10PageRoutingModule
  ],
  declarations: [B10Page]
})
export class B10PageModule {}
