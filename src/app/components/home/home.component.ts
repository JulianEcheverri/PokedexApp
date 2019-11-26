import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Pokemon } from "src/app/models/pokemon";
import { PokedexService } from "src/app/services/pokedex.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  pokemon: Pokemon;

  constructor(public pokedexService: PokedexService) {
    this.pokemon = this.pokedexService.getPokemons()[0];
  }

  ngOnInit() {
    this.subscription = this.pokedexService.getPokemon().subscribe(item => {
      if (item) {
        this.pokemon = item;
      }
    });   
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
