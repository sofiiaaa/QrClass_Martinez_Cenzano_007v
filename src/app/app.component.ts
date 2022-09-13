import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
  
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  menuprofe : Componente[] = [

    {
      
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/menu-profesor'
    },
    {
      
      icon: 'qr-code-outline',
      name: 'Registrar Asistencia',
      redirecTo: '/registrar-asistencia'
    
    },
    {
    
      icon: 'checkmark-done-outline',
      name: 'Verificar Asistencia',
      redirecTo: '/verificar-asistencia'
    },
    
    
    {
      
      icon: 'camera-outline',
      name: 'Tomar asistencia',
      redirecTo: '/asistencia-qr'
    },
    
    {
      
      icon: 'checkmark-done-outline',
      name: 'Revisar mi asistencia',
      redirecTo: '/asistencia-alumno'
    },
    {
     
      icon: 'settings-outline',
      name: 'Configuracion',
      redirecTo: '/configuracion-docente'
    },

    {
      
      icon: 'enter-outline',
      name: 'Cerrar sesión',
      redirecTo: '/login'
    },
    
  ];
}
