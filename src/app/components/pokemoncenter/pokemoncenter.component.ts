import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuButtonComponent } from '../menu-button/menu-button.component';

@Component({
  selector: 'app-pokemoncenter',
  standalone: true,
  imports: [CommonModule, MenuButtonComponent],
  templateUrl: './pokemoncenter.component.html',
  styleUrls: ['./pokemoncenter.component.scss']
})
export class PokemoncenterComponent {

  constructor(private router: Router) { }

  onBuildingClick(buildingName: string) {

    if (buildingName === 'Exit') {
      this.router.navigate(['']);
    } else if (buildingName === 'Pokemon Box') {
      this.router.navigate(['pokemonbox']);
    }
  }
}
