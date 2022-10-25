import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Article } from '../../interfaces/interfaces';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-menu-profesor',
  templateUrl: 'menu-profesor.page.html',
  styleUrls: ['menu-profesor.page.scss'],
})
export class MenuProfesorPage implements OnInit {

  noticias: Article[] = [];

  constructor(private menuController: MenuController,
     private noticiasSerice: NoticiasService) 
  { }
 
  ngOnInit() {
   this.noticiasSerice.getTopHeadLines().subscribe(resp =>{
    console.log('noticias', resp);
   this.noticias.push(...resp.articles);
   });
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}

