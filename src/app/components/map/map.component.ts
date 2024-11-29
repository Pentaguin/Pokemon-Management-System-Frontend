import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuButtonComponent } from '../menu-button/menu-button.component';

@Component({
  selector: 'app-map',
  imports: [MenuButtonComponent, CommonModule],
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  constructor(private router: Router) { }
  onBuildingClick(buildingName: string) {
    console.log(`Clicked on ${buildingName}`);

    if (buildingName === 'Pokemon Center') {
      this.router.navigate(['/pokemoncenter']);
    } else if (buildingName === 'Pokemon Mart') {
      this.router.navigate(['/pokemonmart']);
    }
  }

}
