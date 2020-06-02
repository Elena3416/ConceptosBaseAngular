// Se utiliza para indicarle que otros archivos se utilizan

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./Components/Header/Header.component";
import { FooterComponent } from "./Components/Footer/Footer.component";
import { BodyComponent } from "./Components/Body/Body.component";
import {ArticulosComponent} from "./Components/Articulos/Articulos.component";
import {PublicidadComponent} from "./Components/Publicidad/Publicidad.component";

@NgModule({
  //Para que otros componentes se puedan utilizar
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ArticulosComponent,
    PublicidadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
