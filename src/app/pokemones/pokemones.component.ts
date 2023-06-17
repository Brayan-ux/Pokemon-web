import { Component } from '@angular/core';
import { BddService } from '../servicios/bdd/bdd.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent {

  visible: boolean = false;
  displayStyle = "none";

  constructor(public bdd: BddService) {
  }

  mostrar(id: any) {
    this.bdd.sel = this.bdd.pokemones[id-1];
    this.displayStyle = "block";
    console.log(this.bdd.sel.mov)
  }

  ocultar() {
    this.displayStyle = "none";
  }
}
