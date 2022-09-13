import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-clave',
  templateUrl: './ingresar-clave.page.html',
  styleUrls: ['./ingresar-clave.page.scss'],
})
export class IngresarClavePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usuario = {
    clave: ''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
