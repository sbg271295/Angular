export class Contacto {
  nombre:string;
  edad:number;
  telefono:string;

  constructor(nombre:string, edad:number, telefono:string){ // Si no se define el tipo,es de tipo any.
    this.nombre=nombre;
    this.edad=edad;
    this.telefono=telefono;
  }
}



