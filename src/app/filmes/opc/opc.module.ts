import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcPageRoutingModule } from './opc-routing.module';

import { OpcPage } from './opc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcPageRoutingModule
  ],
  declarations: [OpcPage]
})
export class OpcPageModule {}
