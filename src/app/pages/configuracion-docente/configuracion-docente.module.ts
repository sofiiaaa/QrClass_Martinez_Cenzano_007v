import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionDocentePageRoutingModule } from './configuracion-docente-routing.module';

import { ConfiguracionDocentePage } from './configuracion-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionDocentePageRoutingModule
  ],
  declarations: [ConfiguracionDocentePage]
})
export class ConfiguracionDocentePageModule {}
