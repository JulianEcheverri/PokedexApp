import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.css"]
})
export class PokemonDetailComponent implements OnInit, OnChanges {
  @Input() pokemon: Pokemon; // recive the pokemon
  pokemonDetail: Pokemon; // for pokemon detail

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    // copy the object received
    this.pokemonDetail = { ...this.pokemon };
    // delete the following keys for show only the necessary values in the html component
    delete this.pokemonDetail.icon;
    delete this.pokemonDetail.image;
    delete this.pokemonDetail.name;
  }
}
