import { Injectable } from '@angular/core';
import * as pokemonJson from './pokemon.json';
import { Pokemon } from '../models/pokemon';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PokedexService {
  private subject = new Subject<Pokemon>();

  constructor() { }

  getPokemons(){
     return (pokemonJson as any).default;
  } 

  sendPokemon(pokemon: Pokemon){
    this.subject.next(pokemon);
  }

  getPokemon() : Observable<Pokemon>{
    return this.subject.asObservable();
  }

  clearPokemon(){
    this.subject.next();
  }

}
