import {Component} from "@angular/core";

@Component({
    selector:'app-footer',
    templateUrl:"./Footer.component.html"
})

export class FooterComponent{
//Esto es para actualizar la fecha cambiando de año
    public fecha:number = new Date().getFullYear();

    nombre:string = "Laura Elena Rubalcava";
}
