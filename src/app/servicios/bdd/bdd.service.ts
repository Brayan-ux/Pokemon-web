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
      this.http.get("http://localhost:8080/pokemones").subscribe((req: any) => {
        this.pokemones.push({
          id: req.PokeID,
          nombre: req.Nombre,
          descripcion: req.Descripcion
        });
        if (id == 1 || id == 4 || id == 7) {
          this.iniciales.push({
            id: req.PokeID,
            nombre: req.Nombre,
            descripcion: req.Descripcion
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
