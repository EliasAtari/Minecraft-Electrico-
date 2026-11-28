
"use strict";

// Modulo: Energia
// Unidad: J, kJ

export class Energia {

    constructor(valor = 0) {
      this.valor = 0;
      this.establecer(valor);
    }

    establecer(valor) {

        if (typeof valor !== "number" ||
            !Number.isFinite(valor) || valor < 0) {
            throw new Error("Energia no valida.");
        }

        this.valor = valor;
    }

    acumular(potencia, tiempoSegundos) {

        if (typeof potencia !== "number" ||
            typeof tiempoSegundos !== "number" ||
            !Number.isFinite(potencia) ||
            !Number.isFinite(tiempoSegundos) ||
            tiempoSegundos < 0) {
            throw new Error("Datos de energia no validos.");
        }

        this.valor += Math.abs(potencia) * tiempoSegundos;

        return this.valor;
    }

    obtener() {
        return this.valor;
    }

    aKilojulios() {
        return this.valor / 1000;
    }

    aKilovatiosHora() {
        return this.valor / 3600000;
    }

}
