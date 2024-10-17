import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { PokemoncenterComponent } from './components/map/pokemoncenter/pokemoncenter.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'map', component: MapComponent },
    { path: 'map/pokemoncenter', component: PokemoncenterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }