import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemoncenter',
  standalone: true,
  imports: [],
  templateUrl: './pokemoncenter.component.html',
  styleUrl: './pokemoncenter.component.scss'
})
export class PokemoncenterComponent {
  constructor(private router: Router) { }
  onBuildingClick(buildingName: string) {
    console.log(`Clicked on ${buildingName}`);

    if (buildingName === 'Exit') {
      this.router.navigate(['/map']);
    }
  }
}
