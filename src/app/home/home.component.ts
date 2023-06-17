import { Component } from '@angular/core';
import { BddService } from '../servicios/bdd/bdd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loged: boolean = false;
  src: String = "";
  
  constructor(public bdd: BddService) {
  }

}
