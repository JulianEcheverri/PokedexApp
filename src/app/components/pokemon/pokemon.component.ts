import { Component, OnInit, Input } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from '../../models/pokemon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit { 
  @Input() pokemon: Pokemon;
  @Input() fromList: false;


  constructor() { 
    
  }

  ngOnInit() {
  }

}
