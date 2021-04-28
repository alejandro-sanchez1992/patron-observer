import { Observado } from './observado'

export interface Observador {
    actualizar(observado: Observado): void;
}