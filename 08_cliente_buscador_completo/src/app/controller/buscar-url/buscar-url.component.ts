import { Component } from '@angular/core';
import { BuscadorService } from '../../service/buscador.service';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-buscar-url',
  templateUrl: './buscar-url.component.html',
  styleUrl: './buscar-url.component.css'
})
export class BuscarUrlComponent {
  constructor(private buscadorService:BuscadorService){
  }
  urlBusqueda:string;
  resultado:Resultado;

  buscarUrl():void{
this.buscadorService.buscarUrl(this.urlBusqueda).subscribe(data=>this.resultado=data);
  }
}
