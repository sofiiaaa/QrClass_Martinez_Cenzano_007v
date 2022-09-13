import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionDocentePage } from './configuracion-docente.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionDocentePageRoutingModule {}
