import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion-docente',
  templateUrl: './configuracion-docente.page.html',
  styleUrls: ['./configuracion-docente.page.scss'],
})
export class ConfiguracionDocentePage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
   
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}