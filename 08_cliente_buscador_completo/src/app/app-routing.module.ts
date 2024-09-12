import { BuscarUrlComponent } from './controller/buscar-url/buscar-url.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './controller/buscador/buscador.component';
import { AltaComponent } from './controller/alta/alta.component';
//Con este atributo routes se definen las rutas, es un arrays de objeto de
//json de ruta componentes
const routes: Routes = [
  {path:"buscar",
  component:BuscadorComponent},
  {path:"nuevo",
  component:AltaComponent},
  {path:"buscarUrl",
   component:BuscarUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//El routing ya viene aplicado en cualquier proyecto Angular.
