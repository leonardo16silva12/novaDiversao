import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdfPageRoutingModule } from './idf-routing.module';

import { IdfPage } from './idf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdfPageRoutingModule
  ],
  declarations: [IdfPage]
})
export class IdfPageModule {}
