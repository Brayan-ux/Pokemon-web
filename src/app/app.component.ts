import { Component } from '@angular/core';
import { BddService } from './servicios/bdd/bdd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon-web';

  constructor(public bdd: BddService){
  }

  ngOnInit() {
    this.bdd.get()
  }
}
