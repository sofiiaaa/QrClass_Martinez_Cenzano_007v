import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: './asistencia-alumno.page.html',
  styleUrls: ['./asistencia-alumno.page.scss'],
})
export class AsistenciaAlumnoPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}
