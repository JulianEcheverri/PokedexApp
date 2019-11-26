import { Injectable } from '@angular/core';
import * as pokemonJson from './pokemon.json';


@Injectable({
  providedIn: 'root'
})

export class PokedexService {
  constructor() { }

  getPokemons(){
     return (pokemonJson as any).default;
  } 
}
