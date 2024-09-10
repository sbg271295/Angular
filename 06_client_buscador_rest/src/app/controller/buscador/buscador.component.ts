import { BuscadorService } from './../../service/buscador.service';
import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  constructor( private BuscadorService:BuscadorService){

  }

tematica:string;
resultados:Resultado[];
buscar():void{
this.BuscadorService.buscar(this.tematica)//Esto devuelve un observable
//de Arrays de resultados;
.subscribe(data=>this.resultados=data); //Indicamos lo uqe hay que hacer cuando estan dispnibles



}
}
