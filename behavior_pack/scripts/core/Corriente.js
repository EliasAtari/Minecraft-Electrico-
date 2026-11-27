
"use strict";

// Modulo: Corriente Unidad: Amperios

export class Corriente {

    constructor(valor = 0) {
        this.valor = 0;
        this.establecer(valor);
    }

    establecer(valor) {

        if (typeof valor !== "number" || !Number.isFinite(valor)) {
            throw new Error("La corriente debe ser un numero valido.");
        }

        this.valor = valor;
    }
  
    obtener() {
        return this.valor;
    }

    aMiliamperios() {
        return this.valor * 1000;
    }

    aKiloamperios() {
        return this.valor / 1000;
    }

    desdeMiliamperios(valor) {
        this.establecer(valor / 1000);
    }

    desdeKiloamperios(valor) {
        this.establecer(valor * 1000);
    }

}
