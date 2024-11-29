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
  isMenuOpen: boolean = false;

  constructor(private router: Router) { }

  onBuildingClick(buildingName: string) {

    if (buildingName === 'Exit') {
      this.router.navigate(['']);
    } else if (buildingName === 'Shop') {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

  selectOption(option: string) {
    console.log(`Selected: ${option}`);
    this.isMenuOpen = false; // Close the menu after selection

    // Handle each option
    switch (option) {
      case 'buy':
        // Navigate to or show the buy item screen
        this.buyItem();
        break;
      case 'sell':
        // Navigate to or show the sell item screen
        this.sellItem();
        break;
      case 'manage':
        // Navigate to or show the item management screen
        this.manageItems();
        break;
    }
  }

  buyItem() {
    console.log('Opening Buy Items menu...');
    // Add logic for the buy item feature
  }

  sellItem() {
    console.log('Opening Sell Items menu...');
    // Add logic for the sell item feature
  }

  manageItems() {
    console.log('Opening Item Management menu...');
    // Add logic for the item management feature
  }

}
