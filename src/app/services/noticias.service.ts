import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadliness } from  '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private Http:HttpClient) { }


  getTopHeadLines(){
    return this.Http.get<RespuestaTopHeadliness>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4c1fa2b20062474c862e83c3320a9b11')
  }
}
