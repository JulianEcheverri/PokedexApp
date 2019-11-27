import { Injectable } from "@angular/core";
import * as pokemonJson from "./pokemon.json";
import { Pokemon } from "../models/pokemon";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokedexService {
  private subject = new Subject<Pokemon>(); // observable that allows send and get data between components

  constructor() {}

  getPokemons() {
    return (pokemonJson as any).default; // get the pokemons from the local json file
  }

  sendPokemon(pokemon: Pokemon) {
    this.subject.next(pokemon); // allows send pokemon type data (send pokemon between components by observable subject)
  }

  getPokemon(): Observable<Pokemon> {
    return this.subject.asObservable(); // allows get the sent pokemon
  }

  clearPokemon() {
    this.subject.next();
  }
}
