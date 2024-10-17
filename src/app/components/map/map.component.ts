import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  constructor(private router: Router) { }
  onBuildingClick(buildingName: string) {
    console.log(`Clicked on ${buildingName}`);

    if (buildingName === 'Pokémon Center') {
      this.router.navigate(['/map/pokemoncenter']);
    }
  }
}
