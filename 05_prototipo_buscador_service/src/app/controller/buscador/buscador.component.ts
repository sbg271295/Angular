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

  this.resultados=this.BuscadorService.buscar(this.tematica);
}
}
