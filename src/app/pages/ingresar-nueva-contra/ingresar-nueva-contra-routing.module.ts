import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarNuevaContraPage } from './ingresar-nueva-contra.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarNuevaContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarNuevaContraPageRoutingModule {}
