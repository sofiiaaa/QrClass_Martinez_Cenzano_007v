import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/servicio-registro.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Usuario[] = [];

  constructor(private alertController: AlertController, 
              private navController: NavController,
              private registroService: RegistroserviceService, 
              private fb: FormBuilder) { 
                this.formularioLogin = this.fb.group({ 
                  'correo' : new FormControl("", Validators.required),
                  'password' : new FormControl ("", Validators.required)                
                })
              }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a=0;
    this.registroService.getUsuarios().then(datos=>{ 
      this.usuarios = datos; 
      if (!datos || datos.length==0){
        return null;
      }
      for (let obj of this.usuarios){
        if (f.correo == obj.correoUsuario && f.password==obj.passUsuario){
          a=1;
         localStorage.clear();
          if(obj.tipoUsuario=='profesor'){ localStorage.setItem('profesor','true');}
         else if(obj.tipoUsuario=='alumno'){ localStorage.setItem('alumno','true');}
         console.log(localStorage.getItem('alumno'));
         console.log(localStorage.getItem('profesor'));
          this.bienvenido(obj.nomUsuario);
          if(obj.tipoUsuario=='profesor'){  this.navController.navigateRoot('menu-profesor');}
         else if(obj.tipoUsuario=='alumno'){ this.navController.navigateRoot('menu-alumno');}
    
        }
      }//findelfor
      if(a==0){
        this.alertMsg();
      }
    })
  }//findelmetodo

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error...',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }
  async bienvenido(nombre:string){
    const alert = await this.alertController.create({
      header: 'Bienvenido '+nombre+' :)',
      message: 'Que disfrutes la experiencia',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }
}
