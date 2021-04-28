import { Vuelo } from './vuelo'
import { Observador } from './observador'
import { Observado } from './observado'

export class Viajero implements Observador {
    nombre: string;
    vuelo: Vuelo;

    constructor(nombre: string, vuelo: Vuelo) {
        this.nombre = nombre;
        this.vuelo = vuelo;
    }

    public actualizar(observado: Observado): void {
        if (observado instanceof Vuelo) {
            console.log(`${this.nombre} fue notificado`);
        }
    }
}
