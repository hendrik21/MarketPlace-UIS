import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InmueblesComponent } from './inmuebles/inmuebles.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ServiciosComponent,
    InmueblesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
