import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SdlPageRoutingModule } from './sdl-routing.module';

import { SdlPage } from './sdl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SdlPageRoutingModule
  ],
  declarations: [SdlPage]
})
export class SdlPageModule {}
