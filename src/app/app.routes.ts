import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldfarmComponent } from './components/goldfarm/goldfarm.component';
import { MapComponent } from './components/map/map.component';
import { PartyComponent } from './components/party/party.component';
import { PokemonboxComponent } from './components/pokemonbox/pokemonbox.component';
import { PokemoncenterComponent } from './components/pokemoncenter/pokemoncenter.component';

export const routes: Routes = [
    { path: '', component: MapComponent },
    { path: 'pokemoncenter', component: PokemoncenterComponent },
    { path: 'pokemonbox', component: PokemonboxComponent },
    { path: 'party', component: PartyComponent },
    { path: 'goldfarm', component: GoldfarmComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }