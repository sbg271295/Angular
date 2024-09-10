import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {


  resultados:Resultado[] = [(new Resultado("http://www.mybook.com/","libros","librería de temas varios")),
    new Resultado("http://www.game.es/","juegos","Juegos variados"),
    new Resultado("http://www.music.es/","música","Lamejor música")
  ]

  tematica:string;

  buscar():Resultado[]{
    return this.resultados.filter((r) => r.tematica.includes(this.tematica));
  }
}
