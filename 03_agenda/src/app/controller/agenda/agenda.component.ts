import { Component } from '@angular/core';
import {Contacto} from '../../model/Contacto';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  // Como ya tenemos la clase contacto:
  agenda:Contacto[] = []; // Un array de contactos. Se inicializa para que pueda añadirse elementos.
  nombre:string;
  edad:number;
  telefono:string;

  // Respuesta al evento guardar:
  guardar():void {
    this.agenda.push(new Contacto(this.nombre,this.edad,this.telefono));
  }

}
