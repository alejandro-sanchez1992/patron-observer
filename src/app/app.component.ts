import { Component, VERSION } from '@angular/core';
import { Vuelo } from './vuelo'
import { Viajero } from './viajero'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    name = 'Angular ' + VERSION.major;

	  constructor() {
        const vuelo = new Vuelo("AVA123 destino Bogota");

        const alejo = new Viajero("Alejandro", vuelo);
        vuelo.suscribirObservador(alejo);

        const luisa = new Viajero("Luisa", vuelo);
        vuelo.suscribirObservador(luisa);

        const yohan = new Viajero("Yohan", vuelo);
        vuelo.suscribirObservador(yohan);

        const manuela = new Viajero("Manuela", vuelo);
        vuelo.suscribirObservador(manuela);

        vuelo.eliminarObservador(yohan);

        vuelo.Mensaje('Sala de espera');

        vuelo.Mensaje('Proximo a salir');
	  }
}
