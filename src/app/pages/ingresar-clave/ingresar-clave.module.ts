import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarClavePageRoutingModule } from './ingresar-clave-routing.module';

import { IngresarClavePage } from './ingresar-clave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarClavePageRoutingModule
  ],
  declarations: [IngresarClavePage]
})
export class IngresarClavePageModule {}
