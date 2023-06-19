import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { HomeComponent } from './home/home.component';
import { EquiposComponent } from './equipos/equipos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemones', component: PokemonesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'equipos', component: EquiposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
