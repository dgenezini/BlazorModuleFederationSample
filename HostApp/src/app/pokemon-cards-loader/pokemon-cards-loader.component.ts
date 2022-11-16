import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentRef,
  EventEmitter
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'pokemon-cards-loader',
  template: ''
})
export class PokemonCardsLoaderComponent implements OnInit {
  constructor(
    private vcref: ViewContainerRef
  ) {}

  async ngOnInit() {
    const { PokemonCardsComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:8080/js/remoteEntry.js',
      remoteName: 'blazormodule',
      exposedModule: './PokemonCards',
    });

    const componentRef: ComponentRef<{
        startFromId: number;
        onDataLoaded: EventEmitter<any>;
      }> = this.vcref.createComponent(PokemonCardsComponent);

    componentRef.instance.startFromId = 810;
    componentRef.instance.onDataLoaded.subscribe(evt => console.log('API Data Loaded'));
  }
}
