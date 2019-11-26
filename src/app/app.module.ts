import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { HomeComponent } from './components/home/home.component';
import { PokedexService } from './services/pokedex.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    HeaderComponent,
    FooterComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PokedexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
