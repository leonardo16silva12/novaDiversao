import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilnovePageRoutingModule } from './milnove-routing.module';

import { MilnovePage } from './milnove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilnovePageRoutingModule
  ],
  declarations: [MilnovePage]
})
export class MilnovePageModule {}
