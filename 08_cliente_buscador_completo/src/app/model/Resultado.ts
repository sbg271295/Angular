export class Resultado{
  url:string;
  tematica:string;
  descripcion:string;
  //Para que luego al usar el contructor para utilizar
  //el model resultado no me pida incluir si o si las
  //variables del contructor, entonces añado  la interragacion
  //despues de la denominacion.

  //Si en vez de decidir que sea opcional preifero que las variables
  //sean obligatorias, entonces los obligatorios tienen que ser los
  //ultimos;
  constructor(url?:string,tematica?:string,descripcion?:string){
    this.url=url;
    this.tematica=tematica;
    this.descripcion=descripcion;
  }

}
