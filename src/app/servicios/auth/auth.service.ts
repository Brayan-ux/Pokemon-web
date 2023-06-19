import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  name: string = "";
  loged: boolean = false;
  pass: string = "";
  equipos: Array<any> = new Array();

  constructor() { }

  login(name: string, pass: string) {
    if (name == "Julio" || name == "Brayan") {
      if (pass == "12345") {
        this.loged = true;
        this.name = name;
        this.pass = pass;
      }
    }
  }

  logout() {
    this.loged = false;
  }

}
