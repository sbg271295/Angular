import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PASS, USER } from '../custom_properties';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http:HttpClient){

  }
  buscar(tematica:string):Observable<Resultado[]>{
    let url:string="http://localhost:9000/buscar/"+tematica;
    return this.http.get<Resultado[]>(url);
  }
  alta(resultado:Resultado):Observable<string>{
    console.log("llamado a alta en service")
    let url:string="http://localhost:9000/alta";

    //supongamos que el recurso esta securizado y
    //solo un usuario autorizado puede acceder;
   /* let user="admin";
    let pwd="admin";*///Se modifica a posteriori porque hemos creado
    //la clase custom_properties;
    // btoa le das lo que quieras en base64 y te lo codifica;
    let codificado=btoa(USER+":"+PASS);
    // creacion de encabezados;
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Basic "+codificado);

    //Al final se le introduce los encabezados de usuario y contraseña;
    return this.http.post<string>(url,resultado,{headers:heads});
  }
  buscarUrl(busquedaurl:string):Observable<Resultado>{
    let url:string="http://localhost:9000/buscarUrl";
    return this.http.get<Resultado>(url,{
      params:{url:busquedaurl}
    });
  }
}
