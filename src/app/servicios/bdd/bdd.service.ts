import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BddService {
  pokemones: Array<any> = new Array();
  iniciales: Array<any> = new Array();
  sel: any;
  constructor(private http: HttpClient) { }

  async get() {
    this.pokemones = new Array();
    this.iniciales = new Array();
    for (let id = 1; id < 152; id++) {
      this.http.get("https://pokeapi.co/api/v2/pokemon/" + id + "/").subscribe((req: any) => {
        this.pokemones.push({
          id: id,
          nombre: req.name,
          tipos: req.types,
          imagenes: req.sprites,
          hab: req.abilities,
          mov: req.moves
        });
        if (id == 1 || id == 4 || id == 7) {
          this.iniciales.push({
            id: id,
            nombre: req.name,
            tipos: req.types,
            imagenes: req.sprites
          });
        }
        this.ordenar();
      });
    }
    this.sel = this.pokemones[0];
  }
  ordenar() {
    this.pokemones.sort(function (a, b) {
      if (a.id < b.id) {
        return -1;
      }
      if (b.id < a.id) {
        return 1;
      }
      return 0;
    });
  }
}
