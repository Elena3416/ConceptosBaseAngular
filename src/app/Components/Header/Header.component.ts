//Inicializar un component y un decorador es una funcion 
import {Component} from "@angular/core";

//Ejecuta un decorador
@Component({
    /*Selector - Indica el nombre que recibira en alguna otra parte
    poder darle nombre al component y poder utilizarlo en alguna otra parte de la aplicacion
    y maneja un estandar como app-header
    Templante: para utilizar el html dentro de component y para utilizarlo en un archivo externo
    se utiliza el templanteurl con el nombre del archivo*/
    selector:'app-header',
    templateUrl:'./Header.component.html'
})

//Para utilizarlo en otro archivo
export class HeaderComponent {

}