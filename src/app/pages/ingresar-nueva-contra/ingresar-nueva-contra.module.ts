import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarNuevaContraPageRoutingModule } from './ingresar-nueva-contra-routing.module';

import { IngresarNuevaContraPage } from './ingresar-nueva-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarNuevaContraPageRoutingModule
  ],
  declarations: [IngresarNuevaContraPage]
})
export class IngresarNuevaContraPageModule {}
