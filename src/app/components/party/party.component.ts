import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeDataServiceService } from '../../services/poke-data/poke-data.service';
import { MenuButtonComponent } from '../menu-button/menu-button.component';

@Component({
  selector: 'app-party',
  standalone: true,
  imports: [CommonModule, MenuButtonComponent, HttpClientModule],
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss'],
  providers: [PokeDataServiceService]
})
export class PartyComponent implements OnInit {
  party: any[] = [];

  constructor(private pokemonService: PokeDataServiceService) { }

  ngOnInit(): void {
    const pokemonNames = ['1021', 'necrozma-ultra', '1000', 'squirtle', 'jigglypuff', 'psyduck'];
    this.loadParty(pokemonNames);
  }

  loadParty(names: string[]): void {
    this.pokemonService.getPokemon(names).subscribe((data: any[]) => {
      this.party = data.map(pokemon => ({
        name: pokemon.name.toUpperCase(),
        sprite: pokemon.sprites.front_default
      }));
    }, error => {
      console.error('Error fetching Pokemon data', error);
    });
  }
}
