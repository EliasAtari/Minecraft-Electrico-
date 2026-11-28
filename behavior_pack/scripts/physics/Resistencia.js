
"use strict";

// Modulo: Resistencia
// Unidad: Ω, kΩ

export class Resistencia {

     constructor(valor = 0) {
       this.valor = 0;
       this.establecer(valor);
     }

     establecer(valor) {

         if (typeof valor !== "number" ||
             !Number.isFinite(valor) || valor < 0) {
            throw new Error("Resistencia no valida.");
        }

        this.valor = valor;
    }

    obtener() {
        return this.valor;
    }

    aKiloohmios() {
        return this.valor / 1000;
    }

    desdeKiloohmios(valor) {
        this.establecer(valor * 1000);
    }

}
