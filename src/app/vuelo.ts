import { Observado } from './observado'
import { Observador } from './observador'

export class Vuelo implements Observado {
    public destino: string;

    private observados: Observador[] = [];

    constructor(destino: string) {
        this.destino = destino;
    }

    public suscribirObservador(observador: Observador): void {
        const isExist = this.observados.includes(observador);
        if (isExist) {
            return console.log(`Viajero ${observador} ya existe.`);
        }

        console.log(`Viajero ${observador['nombre']} fue suscrito al vuelo ${observador['vuelo']['destino']}.`);
        this.observados.push(observador);
    }

    public eliminarObservador(observador: Observador): void {
        const observerIndex = this.observados.indexOf(observador);
        if (observerIndex === -1) {
            return console.log('No existen viajeros.');
        }

        this.observados.splice(observerIndex, 1);
        console.log(`Se ha eliminado el viajero ${observador['nombre']}`);
    }

    public notificarObservadores(): void {
        for (const observador of this.observados) {
            observador.actualizar(this);
        }
    }

    public Mensaje(msg: any): void {
        console.log(`${msg}`);
        this.notificarObservadores();
    }
}