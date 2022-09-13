import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-verificar-asistencia',
  templateUrl: './verificar-asistencia.page.html',
  styleUrls: ['./verificar-asistencia.page.scss'],
})
export class VerificarAsistenciaPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
   
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}