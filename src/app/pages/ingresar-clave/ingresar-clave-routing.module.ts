import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarClavePage } from './ingresar-clave.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarClavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarClavePageRoutingModule {}
