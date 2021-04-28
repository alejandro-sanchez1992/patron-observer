import { Observador } from './observador'

export interface Observado {
    suscribirObservador(observador: Observador): void;

    eliminarObservador(observador: Observador): void;

    notificarObservadores(): void;
}