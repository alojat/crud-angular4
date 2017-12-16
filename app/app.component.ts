import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Hola Mundo!';

  constructor(){
    console.log("Estamos corriendo nuestra app satisfactoriamente");
  }

}
