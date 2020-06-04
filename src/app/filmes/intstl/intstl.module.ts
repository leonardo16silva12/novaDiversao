import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntstlPageRoutingModule } from './intstl-routing.module';

import { IntstlPage } from './intstl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntstlPageRoutingModule
  ],
  declarations: [IntstlPage]
})
export class IntstlPageModule {}
