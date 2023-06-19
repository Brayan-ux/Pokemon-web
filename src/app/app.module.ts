import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { HomeComponent } from './home/home.component';
import { BddService } from './servicios/bdd/bdd.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './servicios/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { EquiposComponent } from './equipos/equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PokemonesComponent,
    HomeComponent,
    EquiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BddService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
