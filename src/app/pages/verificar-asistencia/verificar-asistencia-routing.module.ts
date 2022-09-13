import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificarAsistenciaPage } from './verificar-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: VerificarAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificarAsistenciaPageRoutingModule {}
