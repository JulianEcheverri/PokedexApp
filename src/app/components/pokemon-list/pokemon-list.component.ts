import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[];
  pokemonSelectedIndex: number = null;
    
  constructor(public pokedexService: PokedexService) { 
    this.pokemons = this.pokedexService.getPokemons();
  }
  ngOnInit() {
  }

  sendPokemon(pokemon: Pokemon, idx?: number){
    this.pokedexService.sendPokemon(pokemon);
    this.pokedexService.clearPokemon();
     this.pokemonSelectedIndex = idx;
  }
}
