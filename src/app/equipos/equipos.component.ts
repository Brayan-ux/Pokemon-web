import { Component } from '@angular/core';
import { AuthService } from '../servicios/auth/auth.service';
import { BddService } from '../servicios/bdd/bdd.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {
  equipos: Array<any> = new Array();
  displayStyle = "none";
  name = "";

  idTemp: number = 0;
  equipoTemp: Array<any> = new Array();

  constructor(public auth: AuthService, private bdd: BddService) {

  }

  nuevo() {
    this.equipoTemp = new Array();
    this.displayStyle = "block";
  }

  ocultar() {
    this.displayStyle = "none";
  }

  agregar() {
    if (this.equipoTemp.length < 6) {
      if (this.idTemp > 0 && this.idTemp < 152) {
        this.equipoTemp.push(this.bdd.pokemones[this.idTemp - 1]);
        this.idTemp = 0;
      }
    }
  }

  crear() {
    this.ocultar();
    this.equipos.push({ nombre: this.name, equipo: this.equipoTemp });
    this.name = "";
  }
}
