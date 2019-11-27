import { Component, OnInit } from "@angular/core";
import { PokedexService } from "src/app/services/pokedex.service";
import { Pokemon } from "../../models/pokemon";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"]
})
export class PokemonListComponent implements OnInit {
  pokemons: any[]; // array that stores the pokemons from pokemon service
  pokemonSelectedIndex: number = null;

  constructor(public pokedexService: PokedexService) {
    // get the pokemons from the pokemon service
    this.pokemons = this.pokedexService.getPokemons();
    // set the first pokemon by default
    this.pokemonSelectedIndex = 0;
  }
  ngOnInit() {}

  // function for send the pokemon to details and main page when the user clicks
  sendPokemon(pokemon: Pokemon, idx?: number) {
    this.pokedexService.sendPokemon(pokemon);
    this.pokedexService.clearPokemon();
    this.pokemonSelectedIndex = idx;
  }
}
