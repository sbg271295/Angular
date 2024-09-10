export class Resultado {
  url:string;
  tematica:string;
  descripcion:string;

  constructor(url:string, tematica:string, descripcion:string){ // Si no se define el tipo,es de tipo any.
    this.url=url;
    this.tematica=tematica;
    this.descripcion=descripcion;
  }
}



