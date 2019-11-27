import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit, OnChanges {
  @Input() pokemon: Pokemon;
  pokemonDetail: Pokemon;
  constructor() {
   }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.pokemonDetail = {...this.pokemon};
    delete this.pokemonDetail.icon;
    delete this.pokemonDetail.image;
    delete this.pokemonDetail.name;
  }

}
