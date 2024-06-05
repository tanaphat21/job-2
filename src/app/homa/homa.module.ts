import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomaPageRoutingModule } from './homa-routing.module';

import { HomaPage } from './homa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomaPageRoutingModule
  ],
  declarations: [HomaPage]
})
export class HomaPageModule {}
