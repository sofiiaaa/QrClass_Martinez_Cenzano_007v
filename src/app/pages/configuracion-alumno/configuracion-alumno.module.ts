import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionAlumnoPageRoutingModule } from './configuracion-alumno-routing.module';

import { ConfiguracionAlumnoPage } from './configuracion-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionAlumnoPageRoutingModule
  ],
  declarations: [ConfiguracionAlumnoPage]
})
export class ConfiguracionAlumnoPageModule {}
