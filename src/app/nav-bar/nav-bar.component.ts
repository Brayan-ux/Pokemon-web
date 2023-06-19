import { Component } from '@angular/core';
import { BddService } from '../servicios/bdd/bdd.service';
import { AuthService } from '../servicios/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  displayStyle = "none";
  name = "";
  pass = "";
  constructor(public auth: AuthService) {

  }
  mostrar() {
    this.displayStyle = "block";
  }
  ocultar() {
    this.displayStyle = "none";
  }
  login() {
    this.auth.login(this.name, this.pass);
    this.ocultar();
  }
  logout() {
    this.auth.logout();
    this.name = "";
    this.pass = "";
  }
}
