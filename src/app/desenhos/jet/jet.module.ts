import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JetPageRoutingModule } from './jet-routing.module';

import { JetPage } from './jet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JetPageRoutingModule
  ],
  declarations: [JetPage]
})
export class JetPageModule {}
