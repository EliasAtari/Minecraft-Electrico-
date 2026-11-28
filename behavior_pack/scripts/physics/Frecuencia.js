
"use strict";

import { CONSTANTES } from "../utils/Constantes.js";

// Modulo: Frecuencia
// Unidad: Hz, kHz,

export class Frecuencia {

    constructor(valor = 0) {
        this.valor = 0;
        this.establecer(valor);
    }

    establecer(valor) {

        if (!Number.isFinite(valor) ||
            valor < CONSTANTES.FRECUENCIA.MINIMA ||
            valor > CONSTANTES.FRECUENCIA.MAXIMA) {

            throw new Error("Frecuencia no valida.");
        }

        this.valor = valor;
    }

    obtener() {
        return this.valor;
    }

    periodo() {

        if (this.valor === 0) return Infinity;

        return 1 / this.valor;
    }

    aKilohertz() {
        return this.valor / 1000;
    }

    desdeKilohertz(valor) {

        if (!Number.isFinite(valor) || valor < 0) {
            throw new Error("Frecuencia no valida.");
        }

        this.establecer(valor * 1000);
    }
}
