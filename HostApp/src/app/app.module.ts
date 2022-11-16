import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonCardsLoaderComponent } from './pokemon-cards-loader/pokemon-cards-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardsLoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
