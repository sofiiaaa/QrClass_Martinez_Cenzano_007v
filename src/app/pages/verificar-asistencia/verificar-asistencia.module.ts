import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificarAsistenciaPageRoutingModule } from './verificar-asistencia-routing.module';

import { VerificarAsistenciaPage } from './verificar-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificarAsistenciaPageRoutingModule
  ],
  declarations: [VerificarAsistenciaPage]
})
export class VerificarAsistenciaPageModule {}
