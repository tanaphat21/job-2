import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomaPage } from './homa.page';

const routes: Routes = [
  {
    path: '',
    component: HomaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomaPageRoutingModule {}
