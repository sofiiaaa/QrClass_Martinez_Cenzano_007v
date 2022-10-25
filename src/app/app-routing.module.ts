import { Routes } from '@angular/router';
import { AlumnoGuard } from './guards/alumno.guard';
import { ProfesorGuard } from './guards/profesor.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'menu-profesor',
    loadChildren: () => import('./pages/menu-profesor/menu-profesor.module').then( m => m.MenuProfesorPageModule)
    ,canActivate:[ProfesorGuard]

  },

  {
    path: 'verificar-asistencia',
    loadChildren: () => import('./pages/verificar-asistencia/verificar-asistencia.module').then( m => m.VerificarAsistenciaPageModule)
    ,canActivate:[AlumnoGuard]
  },
  {
    path: 'configuracion-docente',
    loadChildren: () => import('./pages/configuracion-docente/configuracion-docente.module').then( m => m.ConfiguracionDocentePageModule)
    ,canActivate:[ProfesorGuard]
  },
  {
    path: 'menu-alumno',
    loadChildren: () => import('./pages/menu-alumno/menu-alumno.module').then( m => m.MenuAlumnoPageModule)
    ,canActivate:[AlumnoGuard]
  },
  {
    path: 'asistencia-qr',
    loadChildren: () => import('./pages/asistencia-qr/asistencia-qr.module').then( m => m.AsistenciaQrPageModule)
    ,canActivate:[ProfesorGuard]
  },
  {
    path: 'asistencia-alumno',
    loadChildren: () => import('./pages/asistencia-alumno/asistencia-alumno.module').then( m => m.AsistenciaAlumnoPageModule)
    ,canActivate:[AlumnoGuard]
  },
  {
    path: 'configuracion-alumno',
    loadChildren: () => import('./pages/configuracion-alumno/configuracion-alumno.module').then( m => m.ConfiguracionAlumnoPageModule)
    ,canActivate:[AlumnoGuard]
  },
  {
    path: 'restablecer-contrasena',
    loadChildren: () => import('./pages/restablecer-contrasena/restablecer-contrasena.module').then( m => m.RestablecerContrasenaPageModule)
  },
  {
    path: 'registrar-asistencia',
    loadChildren: () => import('./pages/registrar-asistencia/registrar-asistencia.module').then( m => m.RegistrarAsistenciaPageModule)
    ,canActivate:[ProfesorGuard]
  },
  {
    path: 'ingresar-clave',
    loadChildren: () => import('./pages/ingresar-clave/ingresar-clave.module').then( m => m.IngresarClavePageModule)
  },
  {
    path: 'ingresar-nueva-contra',
    loadChildren: () => import('./pages/ingresar-nueva-contra/ingresar-nueva-contra.module').then( m => m.IngresarNuevaContraPageModule)
  },
  {
    path: 'registrar-usuario',
    loadChildren: () => import('./pages/registrar-usuario/registrar-usuario.module').then( m => m.RegistrarUsuarioPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  
];


