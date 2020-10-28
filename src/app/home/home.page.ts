import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num: number;
  numSecret: number = this.numAleatorio(1, 100);
  mayorMenor: string = "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^";

  constructor() {
    console.log("El número secreto es " + this.numSecret);
  }

  numAleatorio(a, b) {//genera numero aleatorio entre a y b
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }

  compruebaNumero() {
    if (this.num) {
      if (this.numSecret < this.num) {
        this.mayorMenor = "El número secreto es menor";
      } else if (this.numSecret > this.num) {
        this.mayorMenor = "El número secreto es mayor";
      } else {
        this.mayorMenor = "Has ganado";
      }
    }
  }

  reinicia() {
    //Reiniciamos las variables
    this.num = null;
    this.mayorMenor = "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^";
    this.numSecret = this.numAleatorio(1, 100);
    console.log("El número secreto es " + this.numSecret);
  }

}