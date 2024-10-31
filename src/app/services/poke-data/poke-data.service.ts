import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeDataServiceService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemon(pokemonNames: string[]): Observable<any[]> {
    const requests = pokemonNames.map(name => this.http.get(`${this.apiUrl}/${name}`));
    return forkJoin(requests);
  }
}
