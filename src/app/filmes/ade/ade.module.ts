import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdePageRoutingModule } from './ade-routing.module';

import { AdePage } from './ade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdePageRoutingModule
  ],
  declarations: [AdePage]
})
export class AdePageModule {}
