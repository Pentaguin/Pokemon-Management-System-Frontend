import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { PokemoncenterComponent } from './components/pokemoncenter/pokemoncenter.component';

export const routes: Routes = [
    { path: '', component: MapComponent },
    { path: 'pokemoncenter', component: PokemoncenterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }