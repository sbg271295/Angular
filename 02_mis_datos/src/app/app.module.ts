import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Es un archivo global de ts.

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ // Importamos los componentes que necesitamos. Añadimos el FormsModule
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
