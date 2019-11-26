import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[];
    
  constructor(public pokedexService: PokedexService) { 
    this.pokemons = this.pokedexService.getPokemons();
    console.log(this.pokemons);
  }
  ngOnInit() {
  }

}
