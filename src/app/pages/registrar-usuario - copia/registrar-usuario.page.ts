import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nuevoUsuario = {
    Nombre: '',
    Apellido: '',
    Correo: '',
    Contrasena1:'',
    Contrasena2: ''

  }

  onSubmit(){
    console.log('submit');
    console.log(this.nuevoUsuario);
  }
}
