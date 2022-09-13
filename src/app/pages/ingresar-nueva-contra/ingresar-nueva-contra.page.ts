import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-nueva-contra',
  templateUrl: './ingresar-nueva-contra.page.html',
  styleUrls: ['./ingresar-nueva-contra.page.scss'],
})
export class IngresarNuevaContraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usuario = {
    Contrasena1: '',
    Contrasena2: ''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
