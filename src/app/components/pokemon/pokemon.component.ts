import { Component, OnInit, Input } from "@angular/core";
import { Pokemon } from "../../models/pokemon";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"]
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Pokemon; // recive the pokemon from list
  @Input() fromList: false; // allow show the pokemon title in the main page through ngIf in the pokemon component

  constructor() {}

  ngOnInit() {}
}
