import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuButtonComponent } from '../menu-button/menu-button.component';

@Component({
  selector: 'app-pokemonmart',
  standalone: true,
  imports: [MenuButtonComponent, CommonModule],
  templateUrl: './pokemonmart.component.html',
  styleUrl: './pokemonmart.component.scss'
})
export class PokemonmartComponent {

  constructor(private router: Router) { }

  onBuildingClick(buildingName: string) {

    if (buildingName === 'Exit') {
      this.router.navigate(['']);
    } else if (buildingName === 'Pokemon Box') {
      this.router.navigate(['pokemonbox']);
    }
  }
}
