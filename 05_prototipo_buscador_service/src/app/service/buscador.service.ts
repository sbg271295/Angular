import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  resultados:Resultado[] = [(new Resultado("http://www.mybook.com/","libros","librería de temas varios")),
    new Resultado("http://www.game.es/","juegos","Juegos variados"),
    new Resultado("http://www.music.es/","música","Lamejor música")
  ];
  buscar(tematica:string):Resultado[]{
    console.log(tematica)
    return this.resultados.filter((r) => r.tematica === tematica);
  }
}
